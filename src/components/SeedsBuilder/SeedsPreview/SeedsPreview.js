import SeedsFlower from "../SeedsFlower/SeedsFlower";

import classes from "./SeedsPreview.module.css";


const SeedsPreview = ({ flowers }) => {
  const result = [];
  for (const flower in flowers) {
    for (let i = 0; i < flowers[flower]; i++) {
      result.push(<SeedsFlower key={flower + i} type={flower} />)
    }
  }

  return (
    <div className={classes.SeedsPreview}>
      <div
        className={classes.flowers}
        >
        {result}
      </div>
    </div>
  );
}

export default SeedsPreview;