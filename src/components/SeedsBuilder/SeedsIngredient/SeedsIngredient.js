import classes from "./SeedsIngredient.module.css";

import salamiBackground from "../../../images/carrot.svg";
import tomatoBackground from "../../../images/peaper.svg";
import oliveBackground from "../../../images/tomato.svg";

const SeedsIngredient = ({ type }) => {
  const types = {
    salami: { backgroundImage: `url(${salamiBackground})`, width: "35px", height: "35px" },
    tomato: { backgroundImage: `url(${tomatoBackground})`, width: "35px", height: "35px" },
    olive: { backgroundImage: `url(${oliveBackground})`, width: "10px", height: "10px" },
  };

  return (
    <div className={classes.SeedsIngredient} style={types[type]}></div>
  );
}

export default SeedsIngredient;