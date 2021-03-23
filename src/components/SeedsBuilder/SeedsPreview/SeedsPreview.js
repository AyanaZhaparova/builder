import SeedsIngredient from "../SeedsIngredient/SeedsIngredient";
import classes from "./PizzaPreview.module.css";

const SeedsPreview = () => {
  return (
    <div className={classes.SeedsPreview}>
      <div className={classes.sauce}>
        <PizzaIngredient type="tomato" />
        <PizzaIngredient type="tomato" />
        <PizzaIngredient type="tomato" />
        <PizzaIngredient type="tomato" />
        <PizzaIngredient type="tomato" />
        <PizzaIngredient type="tomato" />
        <PizzaIngredient type="tomato" />
        <PizzaIngredient type="salami" />
        <PizzaIngredient type="olive" />
        <PizzaIngredient type="mushroom" />
      </div>
    </div>
  );
}

export default SeedsPreview;