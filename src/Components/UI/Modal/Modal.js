import Button from "../Button/Button";
import { BsArrowLeft } from "react-icons/bs";
import DetailPage from "../../DetailPage/DetailPage";
import CountriesContext from "../../Store/Countries-ctx";
import { useContext } from "react";
import classes from './Modal.module.css';

const Modal = (props) => {
  const countriesCtx = useContext(CountriesContext);


  return (
    <section className={classes['modal-section']}>
      
      <Button onClick={countriesCtx.modalClosed} className={countriesCtx.darkMode ? `${classes['back-btn']} darkmodeElement` : classes['back-btn']}>
        <BsArrowLeft />
        <p>Back</p>
      </Button>

      <DetailPage></DetailPage>
    </section>
  )
}

export default Modal;