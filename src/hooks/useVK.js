import { useState, useEffect } from 'react';
import connect from '@vkontakte/vk-connect';

export default method => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false)
  const [options, setOptions] = useState({})

  const doVKFetch = (options = {}) => {
    setOptions(options);
    setIsLoading(true);
  }

  useEffect(() => {
    if (!isLoading) {
      return
    }
    async function fetchData() {
			await connect.send(method, options)
        .then(res => {
          setResponse(res.data);
          setIsLoading(false);
        })
        .catch(err => {
          setError(err.data);
          setIsLoading(false)
        });    
		}
    fetchData();
  }, [isLoading]);

  return [{response, error, isLoading}, doVKFetch];
}
