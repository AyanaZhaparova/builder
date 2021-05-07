import SeedsPreview from "../components/SeedsBuilder/SeedsPreview/SeedsPreview";
import CheckoutForm from "./CheckoutSummary/CheckoutForm/CheckoutForm";
import axios from "axios";
import { useSelector } from "react-redux";

import classes from "./Checkout.module.css";


const Checkout = ({ history }) => {
  const flowers = useSelector(state => state.flowers);
  const price = useSelector(state => state.price);

  function cancelCallback() {
    history.replace('/');
  }

  function submitCallback(event) {
    const data = new FormData(event.target);

    axios.post('https://builder-a51d0-default-rtdb.firebaseio.com/orders.json', {
      name: data.get('name'),
      address: data.get('address'),
      phone: data.get('phone'),
      flowers: flowers,
      price: price,
    }).then(response => {
      history.replace('/');
    });

    event.preventDefault();
  }

  return (
    <div className={classes.Checkout}>
      <SeedsPreview flowers={flowers} price={price} />
      <CheckoutForm
        cancelCallback={cancelCallback}
        submitCallback={submitCallback} />
    </div>
  );
}
 
export default Checkout;