import React from "react";

const CountriesContext = React.createContext(
  {
    listCountries: [],
    detailCountry: {},
    modalActive: false,
    filterCountries: () => {},
    modalOpener: () => {},
    modalClosed: ()=> {},
    darkModeHandler: () => {},
    darkMode: false,
  }
)

export default CountriesContext;