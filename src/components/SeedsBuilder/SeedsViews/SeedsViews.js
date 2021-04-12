  
import React from "react";

import classes from "./SeedsViews.module.css";
import roseBackground from "../../../images/rose.svg";
import plumeriaBackground from "../../../images/plumeria.svg";
import lilyBackground from "../../../images/lily.svg";
import gerberaBackground from "../../../images/gerbera.svg";
// import chamomileBackground from "../../../images/chamomileBackground.svg";
// import orchidsBackground from "../../../images/orchids.svg";

const SeedsViews = ({ type }) => {
  const types = {
    rose: { backgroundImage: `url(${roseBackground})`, width: "45px", height: "45px" },
    plumeria: { backgroundImage: `url(${plumeriaBackground})`, width: "45px", height: "45px" },
    lily: { backgroundImage: `url(${lilyBackground})`, width: "45px", height: "45px" },
    gerbera: { backgroundImage: `url(${gerberaBackground})`, width: "35px", height: "35px" },
    // chamomile: { backgroundImage: `url(${chamomileBackground})`, width: "35px", height: "35px" },
    // orchids: { backgroundImage: `url(${orchidsBackground})`, width: "35px", height: "35px" },
  };
 
  return ( 
    <div className={classes.SeedsViews} style={types[type]}></div>
 );
}

export default SeedsViews;