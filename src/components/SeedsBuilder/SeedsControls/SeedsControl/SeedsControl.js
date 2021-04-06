
import SeedsViews from "../../SeedsViews/SeedsViews";
import classes from "./SeedsControl.module.css";

const SeedsControl = ({ type, add, remove }) => {
  return (
    <div className={classes.SeedsControl}>
      <button className={classes.more} onClick={() => add(type)}>+</button>
      <div className={classes.flowers}>
        <SeedsViews type={type} fixed />
      </div>
      <button className={classes.less} onClick={() => remove(type)}>-</button>
    </div>
  );
}

export default SeedsControl;
