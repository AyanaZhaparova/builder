import { useDispatch } from "react-redux";
import { add, remove } from "../../../../store/actions/builder";
import Button from "../../../UI/Button/Button";

import classes from "./SeedsControl.module.css";

const SeedsControl = ({ type, count }) => {
  const dispatch = useDispatch();
  
  const views = {
    rose: "Roses",
    orchids: "Orchids",
    chamomile: "Сhamomiles",
    plumeria: "Plumerias",
    gerbera: "Gerberas",
    lily: "Lilyes",
  }

  return (
    <div className={classes.SeedsControl}>
      <Button onClick={() => dispatch(add(type))}>+</Button>
      <div className={classes.flower}>
      {views[type]}
      </div>
      <Button onClick={() => dispatch(remove(type))} disabled={!count}>-</Button>
      
    </div>
  );
}

export default SeedsControl;