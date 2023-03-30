import { useCallback, useEffect, useState } from "react";
import CountriesContext from "./Countries-ctx";


const CountriesProvider = (props) => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [isModalActive, setIsModalActive] = useState(false);
  const [detailCountry, setDetailCountry] = useState();
  const [darkModeOn, setDarkModeOn] = useState(false);

  const fetchCountries = useCallback( async () => {

    try{
      const response = await fetch('https://restcountries.com/v3.1/all');

      if(!response.ok) {
        throw new Error('Something went wrong...')
      }

      const data = await response.json();

      let listOfCountries = data.map((countries, index) => {
        
        return {
          id: index,
          name: countries.name,
          flag: countries.flags,
          population: countries.population,
          region: countries.region,
          capital: countries.capital,
          continent: countries.continents,
        }
      });



      setCountries(listOfCountries);
      setFilteredCountries(listOfCountries);
      
    }
    catch (error) {
      console.log(error.message);
    }
  },[]);


  useEffect(()=> {
    fetchCountries();
  }, [fetchCountries]);


  const filterCountriesHandler = (option) => {


    const filterCountries = countries.filter(country => {
      if (country?.continent?.toString().includes('America') && option === 'America') {
        return country;
      } else if (country?.continent?.toString().trim() === option) {
        return country;
      }
    });

    setFilteredCountries(filterCountries);
  }

  const modalHandler = (name) => {
    fetchCountry(name);
  }


  const fetchCountry = async (name) => {

    try {
      const response = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`);

      if(!response.ok) {
        throw new Error ('No Country found');
      }

      const countryData = await response.json();
      setIsModalActive(true);

      let countryDetails = {
        name: countryData[0].name.common,
        flag: countryData[0].flags.svg,
        nativeName: countryData[0].name.official,
        population: countryData[0].population,
        region: countryData[0].region,
        subRegion: countryData[0].subregion,
        capital: countryData[0].capital,
        levelDomain: countryData[0].tld[0],
        currencies: Object.values(countryData[0].currencies),
        languages: Object.values(countryData[0].languages),
        borders: countryData[0].borders,
      }

      setDetailCountry(countryDetails);
            
    }
    catch (error) {

    }
  }

  const closeModal = () => {
    setIsModalActive(false);
  }

  const darkModeHandler = () =>{
    setDarkModeOn(!darkModeOn);
  }


  const context = {
    listCountries: filteredCountries,
    detailCountry: detailCountry,
    modalActive: isModalActive,
    filterCountries: filterCountriesHandler,
    modalOpener: modalHandler,
    modalClosed: closeModal,
    darkModeHandler,
    darkMode: darkModeOn,
  } 

  return (
    <CountriesContext.Provider value={context}>
      {props.children}
    </CountriesContext.Provider>
  )
} 


export default CountriesProvider;