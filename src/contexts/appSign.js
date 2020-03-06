import React, { useState, createContext, useEffect } from 'react';
import useCompareSign from "../hooks/useCompareSign";

export const AppSignContext = createContext([{}, () => {}]);

export const AppSignProvider = ({ children }) => {
  const [{vkUserId, matchUrlParams}, setParams] = useCompareSign();
  const [state, setState] = useState({
    vkUserId: null,
    matchUrlParams: false
  });

  useEffect(()=>{
    setParams(window.location.search.slice(1));
  }, [setParams]);

  useEffect(() => {
    if (!vkUserId) return;
    setState({vkUserId, matchUrlParams});
  }, [vkUserId, matchUrlParams]);

  return (
    <AppSignContext.Provider value={[state, setState]}>
      {children}
    </AppSignContext.Provider>
  )
};