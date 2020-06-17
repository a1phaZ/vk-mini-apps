import { useContext, useEffect } from 'react';
import useCompareSign from "../hooks/useCompareSign";
import {RouterContext} from "./routerContext";

export const AppSign = ({ children }) => {
  const [, dispatch] = useContext(RouterContext);
  const [{vkUserId, matchUrlParams}, setParams] = useCompareSign();

  useEffect(()=>{
    setParams(window.location.search.slice(1));
  }, [setParams]);

  useEffect(() => {
    if (!vkUserId) return;
    dispatch({type: 'SET_VK_USER', payload: { id: vkUserId, match: matchUrlParams }});
  }, [vkUserId, matchUrlParams, dispatch]);

  return children;
};