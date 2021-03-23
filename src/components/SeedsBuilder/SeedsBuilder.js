import classes from "./SeedsBuilder.module.css";
import PizzaPreview from "./SeedsPreview/SeedsPreview";
import PizzaControls from "./SeedsControls/SeedsControls";

const SeedsBuilder = () => {
  return (
    <div className={classes.SeedsBuilder}>
      <SeedsPreview />
      <SeedsControls />
    </div>
  );
}

export default SeedsBuilder;