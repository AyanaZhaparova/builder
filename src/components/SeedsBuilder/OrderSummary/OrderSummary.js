import classes from "./OrderSummary.module.css";

const OrderSummary = ({ flowers, price }) => {
  const results = Object.keys(flowers)
    .map(type => <li>{type}: {flowers[type]}</li>);

  return (
    <div className={classes.OrderSummary}>
      <ul>
        {results}
      </ul>
      <strong>Total price: {price.toFixed(1)} som</strong>
    </div>
  );
}

export default OrderSummary;