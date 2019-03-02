import { useState } from 'react';

export default function useFetchingData(initialData) {
  const [data, setData] = useState(initialData);
  const [isFetching, setIsFetching] = useState(false);

  async function fetchData(apiCall) {
    setIsFetching(true);
    const { data } = await apiCall();
    setData(data);
    setIsFetching(true);
  }

  return { data, fetchData, isFetching };
}
