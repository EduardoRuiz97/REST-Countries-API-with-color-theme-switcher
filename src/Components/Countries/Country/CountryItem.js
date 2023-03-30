import classes from './CountryItem.module.css';
import CountriesContext from '../../Store/Countries-ctx';
import { useContext } from 'react';

const CountryItem = (props) => {

  const countriesCtx = useContext(CountriesContext);

  const openModalHandler = () => {
  
    countriesCtx.modalOpener(props.onName);
  }


  return (
    <li className={countriesCtx.darkMode ? `${classes.country} darkmodeElement` : classes.country} onClick={openModalHandler}>
      <img src={props.onImg} alt={props.onName}></img>

      <div className={classes.info}>
        <h1>{props.onName}</h1>
        <span><strong>Population: </strong>{props.onPopulation}</span>
        <span><strong>Region: </strong>{props.onRegion}</span>
        <span><strong>Capital: </strong>{props.onCapital}</span>
      </div>

    </li>
  )
};

export default CountryItem;