import React, {Fragment, useState, useEffect} from 'react';
import {Search} from "@vkontakte/vkui";
import Receipt from "../../panels/Receipt";

const SearchComponent = ({ receipts }) => {
  const [search, setSearch] = useState('');
  const [searchTarget, setSearchTarget] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  const onSearchChange = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  useEffect(() => {
    if (!receipts) return;
    let arr = [];
    const tmp = receipts.map((receipt) => {
      return receipt.items;
    });
    tmp.forEach((item) => {
      arr.push(...item);
    });
    setSearchTarget(arr);
  }, [receipts]);

  useEffect(() => {
    if (!search) {
      setSearchResult([]);
      return;
    }
    setSearchResult(searchTarget.filter(({name}) => name.toLowerCase().indexOf(search) > -1));
  }, [search, searchTarget]);

  return (
    <Fragment>
      <Search value={search} onChange={onSearchChange}/>
      {
        searchResult.length > 0 && <Receipt id={searchResult._id} dateTime={searchResult.dateTime} items={searchResult}/>
      }
    </Fragment>
  )
};

export default SearchComponent;
