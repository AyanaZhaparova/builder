import classes from "./SeedsIngredient.module.css";

import roseBackground from "../../../images/rose.svg";
import orchidsBackground from "../../../images/orchids.svg";
import chamomileBackground from "../../../images/chamomile.svg";


const SeedsIngredient = ({ type }) => {
  const types = {
    rose: { backgroundImage: `url(${roseBackground})`, width: "35px", height: "35px" },
    orchids: { backgroundImage: `url(${orchidsBackground})`, width: "35px", height: "35px" },
    chamomile: { backgroundImage: `url(${chamomileBackground})`, width: "20px", height: "20px" },
  };

  return (
    <div className={classes.SeedsIngredient} style={types[type]}></div>
  );
}

export default SeedsIngredient;