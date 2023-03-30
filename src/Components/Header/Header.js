import Button from "../UI/Button/Button";
import { CiDark } from "react-icons/ci";
import classes from './Header.module.css';
import CountriesContext from "../Store/Countries-ctx";
import { useContext } from "react";

const Header  = () => {

  const countriesCtx = useContext(CountriesContext);
  
  const darkModeChanger = () => {
    countriesCtx.darkModeHandler();
  }


  return (
    <header className={`${countriesCtx.darkMode? `${classes.header} darkmodeElement` : classes.header}`}>
      <h1>Where in the world?</h1>

      <Button onClick={darkModeChanger}>
        <CiDark></CiDark>
        <span>Dark Mode</span>
      </Button>
    </header>
  )
}

export default Header;