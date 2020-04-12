import { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';

export default method => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState({});

  const doVKFetch = (options = {}) => {
    setOptions(options);
    setIsLoading(true);
  };

  useEffect(() => {
    if (!isLoading) {
      return
    }
    async function fetchData() {
			await bridge.send(method, options)
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
  }, [isLoading, method, options]);

  return [{response, error, isLoading}, doVKFetch];
}
