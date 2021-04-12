import Button from "../../UI/Button/Button";
import SeedsControl from "./SeedsControl/SeedsControl";
import classes from "./SeedsControls.module.css";

const SeedsControls = ({
  flowers,
  addFlower,
  removeFlower,
  startOrdering,
}) => {
  const results = [];
  let total = 0;
  for (const flower in flowers) {
    total += flowers[flower];

    results.push(
       <SeedsControl
        key={flower}
        add={addFlower}
        remove={removeFlower}
        count={flowers[flower]}
        type={flower} />)
  }

  return (
    <div className={classes.SeedsControls}>
      <strong>Views</strong>
      {results}
      <Button
      disabled={!total}
      onClick={startOrdering}>
        Order
      </Button>
    </div>
  );
}

export default SeedsControls;