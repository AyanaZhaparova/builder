
import classes from "./OrderSummary.module.css";

const OrderSummary = ({ flowers, price }) => {
  const labels = {
    rose: "Roses",
    orchid: "Orchids",
    chamomile: "Сhamomiles",
    plumeria: "Plumerias",
    gerbera: "Gerberas",
    tulip: "Tulips",
  }
  const results = Object.keys(flowers)
    .map(type => <li key={type}>{labels[type]}: {flowers[type]}</li>);

  return (
    <div className={classes.OrderSummary}>
      <h3>Order summary</h3>
      <ul>
        {results}
      </ul>
      <strong>Total price: {price.toFixed(1)} som</strong>
    </div>
  );
}

export default OrderSummary;