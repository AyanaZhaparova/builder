import SeedsControl from "./SeedsControl/SeedsControl";
import classes from "./SeedsControls.module.css";

const SeedsControls = ({ flowers, addFlower, removeFlower }) => {
  const results = [];
  for (const flower in flowers) {
    results.push(<SeedsControl
        key={flower}
        add={addFlower}
        remove={removeFlower}
        type={flower} />)
  }

  return (
    <div className={classes.SeedsControls}>
      <strong>Flowers</strong>
      {results}
    </div>
  );
}

export default SeedsControls;