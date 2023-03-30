import classes from './Filter.module.css';
import CountriesContext from '../Store/Countries-ctx';
import { useContext } from 'react';

const Filter = () => {
  const countriesCtx = useContext(CountriesContext);

  const filterHandler = (event) => {
    countriesCtx.filterCountries(event.target.value);
  }
  
  return (
    <div className={`${countriesCtx.darkMode ? `${classes.container} darkmodeElement` : classes.container}`}>
      <select onChange={filterHandler}>
        <option selected disabled>Filter by Region</option>
        <option value='Africa'>Africa</option>
        <option value='America'>America</option>
        <option value='Asia'>Asia</option>
        <option value='Europe'>Europe</option>
        <option value='Oceania'>Oceania</option>
      </select>
    </div>
  )
}

export default Filter;