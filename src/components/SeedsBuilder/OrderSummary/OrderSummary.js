// import classes from "./OrderSummary.module.css";

// const OrderSummary = ({ flowers, price }) => {
//   const results = Object.keys(flowers)
//     .map(type => <li>{type}: {flowers[type]}</li>);

//   return (
//     <div className={classes.OrderSummary}>
//       <ul>
//         {results}
//       </ul>
//       <strong>Total price: {price.toFixed(1)} som</strong>
//     </div>
//   );
// }

// export default OrderSummary;



import classes from "./OrderSummary.module.css";

const OrderSummary = ({ flowers, price }) => {
  const labels = {
    rose: "Roses",
    orchid: "Orchids",
    ochamomile: "Ochamomiles",
    plumeria: "Plumerias",
    gerbera: "Gerberas",
    tulip: "Tulips",
  }
  const results = Object.keys(flowers)
    .map(type => <li>{labels[type]}: {flowers[type]}</li>);

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