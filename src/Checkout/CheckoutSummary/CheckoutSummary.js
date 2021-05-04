import classes from "./CheckoutSummary.module.css";
import SeedsPreview from "../../components/SeedsBuilder/SeedsPreview/SeedsPreview"
import Button from "../../components/UI/Button/Button"

const CheckoutSummary = ({ cancelCallback }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <div>
        <SeedsPreview flowers={{
          rose: 5, 
          orchids: 10,
          gerbera: 50,
        }} price={150} />
      </div>
      <div>
        <Button>Checkout</Button>
        <Button onClick={cancelCallback}>Cancel</Button>
      </div>
    </div>
  );
}
 
export default CheckoutSummary;