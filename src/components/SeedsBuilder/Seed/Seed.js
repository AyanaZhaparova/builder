  
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
    rose: { backgroundImage: `url(${roseBackground})`, width: "60px", height: "60px" },
    plumeria: { backgroundImage: `url(${plumeriaBackground})`, width: "60px", height: "60px" },
    lily: { backgroundImage: `url(${lilyBackground})`, width: "55px", height: "55px" },
    gerbera: { backgroundImage: `url(${gerberaBackground})`, width: "55px", height: "55px" },
    chamomile: { backgroundImage: `url(${chamomileBackground})`, width: "55px", height: "55px" },
    orchids: { backgroundImage: `url(${orchidsBackground})`, width: "55px", height: "55px" },
  };
 
  return ( 
    <div className={classes.Seed} style={types[type]}></div>
 );
}

export default Seed;