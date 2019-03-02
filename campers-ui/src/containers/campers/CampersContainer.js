import React, { useEffect } from 'react';
import useToggle from '../../hooks/useToggle';
import useFetchingData from '../../hooks/useFetchingData';
import * as campersApi from '../../api/campers';

import CampersTable from './CampersTable';

const CAMPERS_TYPES = {
  TOTAL: 'total',
  MONTH: 'month',
};

const CampersContainer = props => {
  const { data, fetchData, isFetching } = useFetchingData([]);

  const [toggleCampersState, setToggleCampers] = useToggle({
    on: CAMPERS_TYPES.TOTAL,
    off: CAMPERS_TYPES.MONTH,
  });

  const fetchCampers = () => {
    const limitQuery = '?limit=100';

    const fetchCampers =
      toggleCampersState === CAMPERS_TYPES.TOTAL
        ? campersApi.fetchTotalCampers.bind(null, limitQuery)
        : campersApi.fetchTotalForMonthCampers.bind(null, limitQuery);

    fetchData(fetchCampers);
  };

  useEffect(() => {
    fetchCampers();
  }, [toggleCampersState]);

  return (
    <div>
      <button onClick={setToggleCampers}>Toggle</button>
      <h1>Campers Container</h1>
      {!!data.length && <CampersTable campers={data} />}
    </div>
  );
};

export default CampersContainer;
