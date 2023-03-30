import { useContext } from "react";
import CountriesContext from "../Store/Countries-ctx";
import classes from './DetailPage.module.css';


const DetailPage = () => {

  const countriesCtx = useContext(CountriesContext);
  const countryData = countriesCtx.detailCountry;

  return (

    <article className={classes.details}>

      <img src={countryData.flag} alt={countryData.name} className={classes['details__img']}></img>


      <div className={classes['details__container']}>

        <div className={classes['details__container-info']}>
          <div className={classes['details__info']}>
            <h1>{countryData.name}</h1>
            <span><strong>Native Name: </strong>{countryData.nativeName}</span>
            <span><strong>Population: </strong>{countryData.population}</span>
            <span><strong>Region: </strong>{countryData.region}</span>
            <span><strong>Sub Region: </strong>{countryData.subRegion}</span>
            <span><strong>Capital: </strong>{countryData.capital}</span>
          </div>
          <div className={classes['details__info']}>
            <span><strong>Top Level Domain: </strong>{countryData.levelDomain}</span>
            <span><strong>Currencies: </strong>{countryData.currencies.map(curr => curr.name)}</span>
            <span><strong>Languages: </strong>{countryData.languages.map(lang => lang)}</span>
          </div>
        </div>

        <div className={classes['details__info']}>
          <strong>Border Countries: </strong>
        
          <div className={classes.border}>
            {countryData.borders ?  countryData.borders.map((item, index) =>
            <span key={index}>
              {item}
            </span>) : ''}
          </div>
        </div>
      </div>
        
    </article>
  )
}

export default DetailPage;