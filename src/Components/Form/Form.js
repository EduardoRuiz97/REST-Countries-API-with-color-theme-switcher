import { BsSearch } from "react-icons/bs";
import classes from './Form.module.css';
import { useContext, useState } from "react";
import CountriesContext from "../Store/Countries-ctx";
import ListContainer from "./List-Container/ListContainer";

const Form = () => {
  const countriesCtx = useContext(CountriesContext);
  const [displayList, setDisplayList] = useState(false);
  const [searchListFilter, setSearchListFilter] =  useState([]);



  const inputHandler = (event) => {
    if (event.target.value === 0) {
      setDisplayList(false);
      return;
    }

    setDisplayList(true);

    let filterList =  countriesCtx.listCountries.filter(countries => {
      if (countries.name.common.toString().toLowerCase().includes(event.target.value)) {
        return countries;
      }
    })

    setSearchListFilter(filterList);

  };


  return (
    <form className={`${countriesCtx.darkMode?  `${classes.form} darkmodeElement ` : classes.form}`}>

      <div className={classes['input-container']}>
        <BsSearch></BsSearch>
        <input type='text' placeholder='Search for a country' onChange={inputHandler}></input>
      </div>

      {displayList ?     

        <div className={countriesCtx.darkMode ? `${classes['list-container']} darkmodeElement` : classes['list-container']}>
          <ul>
            {searchListFilter.map((item, index) => <ListContainer onName={item.name.common} key={index}></ListContainer>)}
          </ul>
        </div> : ''
      }
    </form>
  )
}

export default Form;