import classes from "./SeedsBuilder.module.css";
import SeedsPreview from "./SeedsPreview/SeedsPreview";
import SeedsControls from "./SeedsControls/SeedsControls";

const SeedsBuilder = () => {
  const flowers = {
    rose: 10,
    orchids: 20,
    ochamomile: 10,
  };

  return (
    <div className={classes.SeedsBuilder}>
      <SeedsPreview flowers={flowers} />
      <SeedsControls />
    </div>
  );
}

export default SeedsBuilder;