import SeedsIngredient from "../SeedsIngredient/SeedsIngredient";
import classes from "./SeedsPreview.module.css";

const SeedsPreview = ({ ingredients }) => {
  const result = [];
  for (const ingredient in ingredients) {
    for (let i = 0; i < ingredients[ingredient]; i++) {
      result.push(<SeedsIngredient type={ingredient} />)
    }
  }

  return (
    <div className={classes.SeedsPreview}>
      <div className={classes.sauce}>
        {result}
      </div>
    </div>
  );
}

export default SeedsPreview;