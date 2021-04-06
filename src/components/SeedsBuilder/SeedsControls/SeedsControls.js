import Button from "../../UI/Button/Button";
import SeedsControl from "./SeedsControl/SeedsControl";
import classes from "./SeedsControls.module.css";

const SeedsControls = ({
  flowers,
  addFlower,
  removeFlower,
  canBuy,
  setIsBuying
}) => {
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
      <strong>Views</strong>
      {results}
      <Button
        onClick={() => setIsBuying(true)}
        disabled={!canBuy}>
          Order
      </Button>
    </div>
  );
}

export default SeedsControls;