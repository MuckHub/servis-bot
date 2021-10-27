import { useState, useEffect } from 'react';
import axios from 'axios';
import configData from '../config.json';

export default function useFetch(url, isSingleDocument) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const { HEADER } = configData;

  const getData = async () => {
    setLoading(true);

    try {
      const response = await axios.get(url, {
        headers: { 'app-id': HEADER },
      });

      setLoading(false);

      if (isSingleDocument) {
        const formatedDate = new Date(Date.parse(response.data.dateOfBirth))
          .toISOString()
          .slice(0, 10);
        response.data.dateOfBirthFormated = formatedDate;
        setData(response.data);
      } else {
        setData(response.data.data);
      }
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { data, loading, error };
}
