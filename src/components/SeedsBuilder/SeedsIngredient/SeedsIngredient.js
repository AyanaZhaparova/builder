import classes from "./SeedsIngredient.module.css";

const SeedsIngredient = ({ type }) => {
  return (
    <div className={classes.SeedsIngredient}>{type}</div>
  );
}

export default SeedsIngredient;