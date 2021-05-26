import SeedsPreview from "../SeedsBuilder/SeedsPreview/SeedsPreview";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import classes from "./Checkout.module.css";
import axios from "../../axios";
import { useSelector } from "react-redux";
import withAxios from "../withAxios";



const Checkout = ({ history }) => {
  const { token, id } = useSelector(state => state.auth);
  const flowers = useSelector(state => state.builder.flowers);
  const price = useSelector(state => state.builder.price);

  function cancelCallback() {
    history.replace('/');
  }

  function submitCallback(event) {
    const data = new FormData(event.target);
console.log(token);
    axios.post('/orders.json?auth=' + token, {
      name: data.get('name'),
      address: data.get('address'),
      phone: data.get('phone'),
      flowers: flowers,
      price: price,
      userId: id
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
 
export default withAxios(Checkout, axios);