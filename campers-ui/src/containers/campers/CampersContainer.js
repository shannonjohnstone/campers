import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import useToggle from '../../hooks/useToggle';
import useFetchingData from '../../hooks/useFetchingData';
import * as campersApi from '../../api/campers';

import CampersTable from './CampersTable';
import Loader from '../../components/Loader';

const CAMPERS_TYPES = {
  TOTAL: 'total',
  MONTH: 'month',
};

const CampersContainer = () => {
  const { data, fetchData, isFetching } = useFetchingData([]);

  const [toggleCampersState, setToggleCampers] = useToggle({
    on: CAMPERS_TYPES.TOTAL,
    off: CAMPERS_TYPES.MONTH,
  });

  const isTotal = () => toggleCampersState === CAMPERS_TYPES.TOTAL;
  const dataReady = () => !isFetching && !!data.length;

  const fetchCampers = () => {
    const limitQuery = '?limit=100';

    const fetchCampers = isTotal()
      ? campersApi.fetchTotalCampers.bind(null, limitQuery)
      : campersApi.fetchTotalForMonthCampers.bind(null, limitQuery);

    fetchData(fetchCampers);
  };

  useEffect(() => {
    fetchCampers();
  }, [toggleCampersState]);

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
              {isTotal() ? 'Show Monthly' : 'Show All Time'}
            </Button>
          </Col>
        </Row>
      </header>
      <Row>{dataReady() && <CampersTable campers={data} />}</Row>
    </section>
  );
};

export default CampersContainer;
