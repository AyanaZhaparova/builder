// import classes from "./SeedsBuilder.module.css";
// import SeedsPreview from "./SeedsPreview/SeedsPreview";
// import SeedsControls from "./SeedsControls/SeedsControls";

// const SeedsBuilder = () => {
//   const flowers = {
//     rose: 5,
//     orchids: 5,
//     ochamomile: 5,
//   };

//   return (
//     <div className={classes.SeedsBuilder}>
//       <SeedsPreview flowers={flowers} />
//       <SeedsControls />
//     </div>
//   );
// }

// export default SeedsBuilder;

import SeedsPreview from "./SeedsPreview/SeedsPreview";
import SeedsControls from "./SeedsControls/SeedsControls";

import classes from "./SeedsBuilder.module.css";
import { useState } from "react";
import OrderSummary from "./OrderSummary/OrderSummary";
import Modal from "../UI/Modal/Modal";

const SeedsBuilder = () => {
  const prices = {
    rose: 5,
    orchids: 5,
    ochamomile: 5,
  };

  const [flowers, setFlowers] = useState({
    rose: 0,
    orchids: 0,
    ochamomile: 0,
  });
  const [price, setPrice] = useState(150);
  const [canBuy, setCanBuy] = useState(true);
  const [isBuying, setIsBuying] = useState(false);

  function checkCanBuy(newFlowers) {
    const totalFlowers = Object.values(newFlowers)
      .reduce((total, current) => total + current);
    setCanBuy(totalFlowers > 0);
  }

  function addFlower(type) {
    const newFlowers = { ...flowers };
    newFlowers[type]++;
    checkCanBuy(newFlowers);
    setPrice(price + prices[type]);
    setFlowers(newFlowers);
  }

  function removeFlower(type) {
    if (flowers[type]) {
      const newFlowers = { ...flowers };
      newFlowers[type]--;
      checkCanBuy(newFlowers);
      setPrice(price - prices[type]);
      setFlowers(newFlowers);
    }
  }

  return (
    <div className={classes.SeedsBuilder}>
      <Modal show={isBuying} cancelCallback={() => setIsBuying(false)}>
        <OrderSummary flowers={flowers} price={price} />
      </Modal>

      <SeedsPreview
        flowers={flowers}
        price={price} />
      <SeedsControls
        canBuy={canBuy}
        setIsBuying={setIsBuying}
        flowers={flowers}
        addFlower={addFlower}
        removeFlower={removeFlower}
        />
    </div>
  );
}

export default SeedsBuilder;