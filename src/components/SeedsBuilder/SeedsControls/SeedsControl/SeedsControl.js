import SeedsFlower from "../../SeedsFlower/SeedsFlower";
import classes from "./SeedsControl.module.css";

const SeedsControl = ({ type, add, remove }) => {
  return (
    <div className={classes.SeedsControl}>
      <button className={classes.more} onClick={() => add(type)}>+</button>
      <div className={classes.flowers}>
        <SeedsFlower type={type} fixed />
      </div>
      <button className={classes.less} onClick={() => remove(type)}>-</button>
    </div>
  );
}

export default SeedsControl;