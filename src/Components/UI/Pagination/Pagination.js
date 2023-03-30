import Button from "../Button/Button";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import classes from './Pagination.module.css';

const Pagination = (props) => {

  return (
    <div className={classes.pagination}>

      <Button onClick={props.onPrev} disabled={props.current === 0}>
        <AiOutlineArrowLeft />
      </Button>

      <Button onClick={props.onNext} disabled={props.current === Math.floor(props.max)}>
        <AiOutlineArrowRight />
      </Button>
    </div>
  )
}

export default Pagination;