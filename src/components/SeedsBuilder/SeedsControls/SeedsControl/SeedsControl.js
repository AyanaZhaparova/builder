import Button from "../../../UI/Button/Button";
import SeedsViews from "../../SeedsViews/SeedsViews";
import classes from "./SeedsControl.module.css";

const SeedsControl = ({ type, add, remove }) => {
  return (
    <div className={classes.SeedsControl}>
      <Button onClick={() => add(type)}>+</Button>
      <div className={classes.flower}>
        <SeedsViews type={type} fixed />
      </div>
      <Button onClick={() => remove(type)}>-</Button>
    </div>
  );
}

export default SeedsControl;