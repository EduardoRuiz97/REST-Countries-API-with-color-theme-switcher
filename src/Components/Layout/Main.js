
import Sections from "./Sections";
import CountriesContext from "../Store/Countries-ctx";
import { useContext } from "react";

const Main = () => {
  const countriesCtx = useContext(CountriesContext);
  const darkModeValue = countriesCtx.darkMode;

  return (    
    <main className={`${darkModeValue ? 'dark-mode' : ''}`}>
      <Sections></Sections>
    </main>
    )
  
}


export default Main;