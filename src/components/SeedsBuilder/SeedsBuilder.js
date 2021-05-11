
import SeedsPreview from "./SeedsPreview/SeedsPreview";
import SeedsControls from "./SeedsControls/SeedsControls";
import withAxios from '../withAxios';
import axios from '../../axios';
import classes from "./SeedsBuilder.module.css";
import { useEffect, useState } from "react";
import Modal from "../UI/Modal/Modal";
import OrderSummary from "./OrderSummary/OrderSummary";
import Button from "../UI/Button/Button";
import { useDispatch, useSelector } from 'react-redux';
import { load } from '../../store/actions/builder';


const SeedsBuilder = ({ history }) => {
  const dispatch = useDispatch();
  const flowers = useSelector(state => state.builder.flowers);
  const price = useSelector(state => state.builder.price);
  const [ordering, setOrdering] = useState(false);
  
  useEffect(() => dispatch(load()), [dispatch]);

  function startOrdering() {
    setOrdering(true);
  }

  function stopOrdering() {
    setOrdering(false);
  }

  function finishOrdering() {
    setOrdering(false);
    history.push('/checkout');
  }

  return (
    <div className={classes.SeedsBuilder}>
      <SeedsPreview
        flowers={flowers}
        price={price} />
      <SeedsControls
        flowers={flowers}
        startOrdering={startOrdering}
        />
      <Modal
        show={ordering}
        cancel={stopOrdering}>
          <OrderSummary
            flowers={flowers}
            price={price}
            />
          <Button onClick={finishOrdering} green="green">Checkout</Button>
          <Button onClick={stopOrdering}>Cancel</Button>
        </Modal>
    </div>
  );
}
  

export default withAxios(SeedsBuilder, axios);