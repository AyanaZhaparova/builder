import { useDispatch } from "react-redux";
import { add, remove } from "../../../../store/actions/builder";
import Button from "../../../UI/Button/Button";
import Seed from "../../Seed/Seed";
import classes from "./SeedsControl.module.css";

const SeedsControl = ({ type, count }) => {
  const dispatch = useDispatch();
  return (
    <div className={classes.SeedsControl}>
      <Button onClick={() => dispatch(add(type))}>+</Button>
      <div className={classes.flower}>
        <Seed type={type} fixed />
      </div>
      <Button onClick={() => dispatch(remove(type))} disabled={!count}>-</Button>
    </div>
  );
}

export default SeedsControl;