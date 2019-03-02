import { useState, useEffect } from 'react';

export default function useFetchingData(apiCall, defaultState, watchers = []) {
  if (typeof apiCall !== 'function')
    throw Error('useFetchingData: apiCall must be a function');

  if (defaultState === null || defaultState === undefined)
    throw Error('useFetchingData: defaultState is required');

  const [data, setData] = useState(defaultState);

  const [isFetching, setIsFetching] = useState(false);

  async function fetchData() {
    try {
      setIsFetching(true);
      const result = await apiCall();
      setData(result);
    } catch (error) {
      throw Error(error);
    } finally {
      setIsFetching(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, watchers);

  return { data, isFetching };
}
