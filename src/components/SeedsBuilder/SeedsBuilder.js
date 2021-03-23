import classes from "./SeedsBuilder.module.css";
import SeedsPreview from "./SeedsPreview/SeedsPreview";
import SeedsControls from "./SeedsControls/SeedsControls";

const SeedsBuilder = () => {
  const ingredients = {
    tomato: 10,
    salami: 20,
    olive: 10,
  };

  return (
    <div className={classes.SeedsBuilder}>
      <SeedsPreview ingredients={ingredients} />
      <SeedsControls />
    </div>
  );
}

export default SeedsBuilder;