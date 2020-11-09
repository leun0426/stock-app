import isEmpty from 'lodash/isEmpty';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

import alphaVantage from 'resources/alphavantage-resource';
import {handleStockOverview} from 'actions/handle-stock-overview/handle-stock-overview';

import { toast } from 'react-toastify';

import './search-bar.scss';

function SearchBar(props) {
  
  const [onSearchResult, setOnSearchResult] = useState(false)
  const [showSearchResult, setShowSearchResult] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const dispatch = useDispatch();

  var controller = new AbortController();
  var signal = controller.signal;

  const closeSearchResult = () => {
    if (!onSearchResult) {
      setShowSearchResult(false);
    }
  }

  const getResultList = () => {
    return searchResult.map((item, index) => {
      return (
        <li 
          className="search-result-item" 
          key={`search-result-${index}`} 
          onClick={() => getStockOverview(item['1. symbol'])}
          onMouseEnter={() => handleOnSearchResult(true)}
          onMouseLeave={() => handleOnSearchResult(false)}>
          <span className="symbol" title={item['1. symbol']}>{item['1. symbol']}</span>
          <span className="name" title={item['2. name']}>{item['2. name']}</span>
        </li>
      );
    })
  }

  const getResult = () => {
    if (!isEmpty(searchResult) && showSearchResult) {
      return (
        <div className="search-result-wrapper">
          <ul>
            {getResultList()}
          </ul>
        </div>
      )
    }
  }

  const getStockOverview = (stock) => {
    setShowSearchResult(false);

    if (isEmpty(stock)) {
      return;
    }
    const url = `${alphaVantage.uri}${alphaVantage.param.overview}${stock}${alphaVantage.apiKey}`;
    fetch(url, {signal})
      .then(res => res.json())
      .then(data => {
        if (isEmpty(data.Note)) {
          if (isEmpty(data.Name)) {
            handleError('No data for this stock')
          }
          dispatch(handleStockOverview(data));
        } else {
         handleWarn(data.Note);
        }
      })
      .catch(error => {
        handleError(error);
      });
  }

  const handleError = (error) => {
    toast.error(`Error: ${error}`, {
      position: "top-center",
      toastId: 'toaster-error',
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
  }
  ;
  const handleOnChange = (event) => {
    setSearchValue(event.target.value);

    controller.abort();

    if (isEmpty(event.target.value)) {
      setShowSearchResult(false);
    }

    controller = new AbortController();
    signal = controller.signal;

    const uri = 
      `${alphaVantage.uri}${alphaVantage.param.symbolSearch}${event.target.value}${alphaVantage.apiKey}`;
    
    fetch(uri, {signal})
      .then(res => res.json())
      .then(data => {
        if (data.Note) {
          handleWarn(data.Note);
        }
        setSearchResult(data.bestMatches);
        setShowSearchResult(true);
      })
      .catch(error => {
        handleError(error);
      })
  }

  const handleOnSearchResult = onSearchResult => setOnSearchResult(onSearchResult);
  
  const handleWarn = warn => {
    toast.warn(warn, {
      position: "top-center",
      autoClose: false,
      toastId: 'toaster-warn',
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
  }
  return (
    <>
      <input
        className="search-input"
        data-id='search-input'
        onBlur={closeSearchResult}
        onChange={event => handleOnChange(event)}
      ></input>
      <label className="search-icon" data-id='search-icon' onClick={() => getStockOverview(searchValue)}>
        <i className="fas fa-search"></i>
      </label>
      {getResult()}
    </>
  );
}

export default SearchBar;