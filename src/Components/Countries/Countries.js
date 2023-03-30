import React, { useContext, useState } from "react";
import CountriesContext from "../Store/Countries-ctx";
import CountryItem from "./Country/CountryItem";
import classes from './Countries.module.css';
import Pagination from "../UI/Pagination/Pagination";

const Countries = () => {
  const countriesCtx = useContext(CountriesContext);
  const [initialIndex, setInitialIndex] = useState(0);
  const [countriesPerPage, setCountriesPerPage] = useState(21);

  const nextPageHandler = () => {
    setInitialIndex(initialIndex + 1);
  }

  const prevPageHandler = () => {
    setInitialIndex(initialIndex - 1)
  }

  const maxNumberOfPages = countriesCtx.listCountries.length / countriesPerPage;



  return (
    <React.Fragment>
    <ul className={classes['countries-list']}>
      {countriesCtx.listCountries
      .slice(initialIndex*countriesPerPage, initialIndex*countriesPerPage + countriesPerPage -1)
      .map((country, index) => 
      <CountryItem
      key={index}
      onId={country.id}
      onImg={country.flag.svg}
      onName={country.name.common}
      onPopulation={country.population}
      onRegion={country.region}
      onCapital={country.capital}
      ></CountryItem>)}
    </ul>

    <Pagination onNext={nextPageHandler} onPrev={prevPageHandler} current={initialIndex} max={maxNumberOfPages}></Pagination>

    </React.Fragment>
  )
}

export default Countries;