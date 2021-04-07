import classes from "./SeedsViews.module.css";

import roseBackground from "../../../images/rose.svg";
import orchidsBackground from "../../../images/orchids.svg";
import chamomileBackground from "../../../images/chamomile.svg";
import plumeriaBackground from "../../../images/plumeria.svg";
import gerberaBackground from "../../../images/gerbera.svg";


const SeedsViews = ({ type }) => {
  const types = {
    rose: { backgroundImage: `url(${roseBackground})`, width: "35px", height: "35px" },
    orchids: { backgroundImage: `url(${orchidsBackground})`, width: "35px", height: "35px" },
    chamomile: { backgroundImage: `url(${chamomileBackground})`, width: "20px", height: "20px" },
    plumeria: { backgroundImage: `url(${plumeriaBackground})`, width: "20px", height: "20px" },
    gerbera: { backgroundImage: `url(${gerberaBackground})`, width: "20px", height: "20px" },
  };

  return (
    <div className={classes.SeedsFlower} style={types[type]}></div>
  );
}

export default SeedsViews;