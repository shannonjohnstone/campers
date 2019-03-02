import React, { useState, useEffect } from 'react';
import useToggle from '../hooks/useToggle';
import * as campersApi from '../api/campers';

const CAMPERS_TYPES = {
  TOTAL: 'total',
  MONTH: 'month',
};

const CampersContainer = props => {
  const [campers, setCampers] = useState([]);

  const [toggleCampersState, setToggleCampers] = useToggle({
    on: CAMPERS_TYPES.TOTAL,
    off: CAMPERS_TYPES.MONTH,
  });

  const fetchCampers = async () => {
    const limitQuery = '?limit=5';
    const campers =
      toggleCampersState === CAMPERS_TYPES.TOTAL
        ? await campersApi.fetchTotalCampers(limitQuery)
        : await campersApi.fetchTotalForMonthCampers(limitQuery);

    setCampers(campers.data);
  };
  useEffect(() => {
    fetchCampers();
  }, [toggleCampersState]);

  console.log(campers, 'campers');
  const renderByName = () => campers.map(campers => <p>{campers.username}</p>);
  return (
    <div>
      <button onClick={setToggleCampers}>Toggle</button>
      <h1>Campers Container</h1>
      {toggleCampersState === CAMPERS_TYPES.TOTAL
        ? renderByName()
        : renderByName()}
    </div>
  );
};

export default CampersContainer;
