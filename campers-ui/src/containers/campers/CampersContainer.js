import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import useToggle from '../../hooks/useToggle';
import useFetchingData from '../../hooks/useFetchingData';
import * as campersApi from '../../api/campers';

import CampersTable from './CampersTable';
import Loader from '../../components/Loader';

const CampersContainer = () => {
  const [sortByTotal, setToggleCampers] = useToggle(true);

  const fetchCampers = () => {
    const limitQuery = '?limit=100';

    const fetchCampers = sortByTotal
      ? campersApi.fetchTotalCampers.bind(null, limitQuery)
      : campersApi.fetchTotalForMonthCampers.bind(null, limitQuery);

    return fetchCampers();
  };

  const { data, isFetching } = useFetchingData(fetchCampers, [], [sortByTotal]);

  return (
    <section>
      <Loader isLoading={isFetching} />
      <header>
        <Row className="mt-5 mb-5">
          <Col lg={{ span: 6 }}>
            <h1>Campers Leaderboard</h1>
          </Col>
          <Col lg={{ span: 2, offset: 4 }}>
            <Button onClick={setToggleCampers}>
              {sortByTotal ? 'Show Monthly' : 'Show All Time'}
            </Button>
          </Col>
        </Row>
      </header>
      <Row>{!isFetching && <CampersTable campers={data} />}</Row>
    </section>
  );
};

export default CampersContainer;
