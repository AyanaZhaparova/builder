import SeedsViews from "../SeedsViews/SeedsViews";

import classes from "./SeedsPreview.module.css";


const SeedsPreview = ({ flowers, price }) => {
  const result = [];
  for (const flower in flowers) {
    for (let i = 0; i < flowers[flower]; i++) {
      result.push(<SeedsViews key={flower + i} type={flower} />)
    }
  }

  return (
    <div className={classes.SeedsPreview}>
      <div className={classes.pizza}>
        <div
          className={classes.flowers}>
          {result}
        </div>
      </div>
      <div className={classes.price}>{price} som</div>
    </div>
  );
}

export default SeedsPreview;