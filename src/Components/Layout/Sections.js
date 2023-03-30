import React, { useContext } from "react";
import Form from '../Form/Form';
import Filter from '../Filter/Filter';
import Countries from '../Countries/Countries';
import CountriesContext from "../Store/Countries-ctx";
import Modal from "../UI/Modal/Modal";


const Sections = () => {
  const countriesCtx = useContext(CountriesContext);
  const modalStatus = countriesCtx.modalActive
  

  return (
    <React.Fragment>
    {!modalStatus && 
      <React.Fragment>
        <section className="actions-section">
          <Form></Form>
          <Filter></Filter>
        </section>

        <section className="countries-section">
          <Countries></Countries>
        </section>
      </React.Fragment>
      }

      {modalStatus && <Modal></Modal>}

    </React.Fragment>
  )
}

export default Sections;