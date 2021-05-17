import Seed from "../Seed/Seed";
import classes from "./SeedsPreview.module.css";

const SeedsPreview = ({ flowers, price }) => {
  const result = [];
  for (const flower in flowers) {
    for (let i = 0; i < flowers[flower]; i++) {
      result.push(<Seed key={flower + i} type={flower} />)
    }
  }

  return (
    <div>
    <div className={classes.SeedsPreview}>
        <div className={classes.flowers}>
          {result}
        </div>
    </div> 
    <div> 
        <div className={classes.price}>{price.toFixed(1)} som</div>
    </div>
    </div>
  );
}

export default SeedsPreview;