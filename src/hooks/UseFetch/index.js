import { useState, useEffect } from 'react';
import client from '../../graphql/index';

const useFetch = ({ initialQuery, initialData }) => {
  const [data, setData] = useState(initialData);
  const [query, setQuery] = useState(initialQuery);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const { data } = await client.query({ query });
        setData(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [query]);

  return { data, isLoading, isError, doFetch: setQuery };
};

export default useFetch;
