  
import React from "react";

import classes from "./Seed.module.css";
import roseBackground from "../../../images/rose.svg";
import plumeriaBackground from "../../../images/plumeria.svg";
import lilyBackground from "../../../images/lily.svg";
import gerberaBackground from "../../../images/gerbera.svg";
import chamomileBackground from "../../../images/chamomile.svg";
import orchidsBackground from "../../../images/orchids.svg";

const Seed = ({ type }) => {
  const types = {
    rose: { backgroundImage: `url(${roseBackground})`, width: "53px", height: "53px" },
    plumeria: { backgroundImage: `url(${plumeriaBackground})`, width: "50px", height: "50px" },
    lily: { backgroundImage: `url(${lilyBackground})`, width: "45px", height: "45px" },
    gerbera: { backgroundImage: `url(${gerberaBackground})`, width: "45px", height: "45px" },
    chamomile: { backgroundImage: `url(${chamomileBackground})`, width: "45px", height: "45px" },
    orchids: { backgroundImage: `url(${orchidsBackground})`, width: "45px", height: "45px" },
  };
 
  return ( 
    <div className={classes.Seed} style={types[type]}></div>
 );
}

export default Seed;