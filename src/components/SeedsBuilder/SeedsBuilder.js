
import SeedsPreview from "./SeedsPreview/SeedsPreview";
import SeedsControls from "./SeedsControls/SeedsControls";

import classes from "./SeedsBuilder.module.css";
import { useState } from "react";
import axios from "axios";
import Button from "../UI/Button/Button";
import OrderSummary from "./OrderSummary/OrderSummary";
import Modal from "../UI/Modal/Modal";
import { useSelector } from "react-redux";

const SeedsBuilder = () => {
  const prices = {
    rose: 5,
    orchids: 5,
    ochamomile: 5,
    plumeria: 5,
    gerbera: 5,
    lily: 5,
  };
  
  const flowers = useSelector(state => state.flowers)
  const [price, setPrice] = useState(0);
  const [ordering, setOrdering] = useState(false);

  // useEffect(loadDefaults, []);

  // function loadDefaults() {
  //   axios
  //     .get('https://builder-400c1-default-rtdb.firebaseio.com/default.json')
  //     .then(response => {
  //       setPrice(response.data.price);

  //       setFlowers(response.data.flowers);
  //     }); 

  // }

function addFlower(type) {
  const newFlowers = {...flowers };
  newFlowers[type]++;
  setPrice(price + prices[type]);
  
}

function removeFlower(type){
  if (flowers[type]) {
    const newFlowers = {...flowers };
    newFlowers[type]--;
    setPrice(price - prices[type]);
    
  }
}
 function startOrdering() {
   setOrdering(true);
 }

 function finishOrdering() {
   axios
     .post('https://builder-a51d0-default-rtdb.firebaseio.com/orders.json', {
       flowers: flowers,
       price: price,
       address: "1234 Jusaevs str",
       phone: "0 703 774 608",
       name: "Ayana Zhaparova",
     })
     .then(() => {
       setOrdering(false);
      //  loadDefaults();
     });
 }

  return (
    <div className={classes.SeedsBuilder}>
    <SeedsPreview
    flowers={flowers}
    price={price} />
    <SeedsControls
    flowers={flowers}
    addFlower={addFlower}
    removeFlower={removeFlower}
    startOrdering={startOrdering}
    />

      <Modal 
      show={ordering} 
      // cancel={stopOrdering}
      >
      
      <OrderSummary 
      flowers={flowers} 
      price={price} />
      
      <Button onClick={finishOrdering} green>Checkout</Button>
      {/* <Button onClick={stopOrdering}>Cancel</Button> */}
      </Modal>
    </div>
  );
}

export default SeedsBuilder;