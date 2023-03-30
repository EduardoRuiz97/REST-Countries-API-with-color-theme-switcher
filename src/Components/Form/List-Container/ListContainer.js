import classes from './ListContainer.module.css';
import CountriesContext from '../../Store/Countries-ctx';
import { useContext } from 'react';

const ListContainer = (props) => {
  const countriesCtx = useContext(CountriesContext);

  const openModalHandler = () => {
    countriesCtx.modalOpener(props.onName);
    console.log(props.onName);
  }


  return (
    <li className={classes['list-item']} onClick={openModalHandler}>{props.onName}</li>
  )
}

export default ListContainer;