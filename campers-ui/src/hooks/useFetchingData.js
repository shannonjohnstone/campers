import { useState, useEffect } from 'react';

export default function useFetchingData(apiCall, defaultState, watchers) {
  const [data, setData] = useState(defaultState);
  const [isFetching, setIsFetching] = useState(false);

  async function fetchData() {
    setIsFetching(true);
    const { data } = await apiCall();
    setData(data);
    setIsFetching(false);
  }

  useEffect(() => {
    fetchData();
  }, watchers);

  return { data, isFetching };
}
