import classes from "./Order.module.css";

const Order = ({ name, phone, address, flowers, price }) => {
  
    const outputFlowers = Object.keys(flowers).map((flower) => (
   
      <li>{flower} - {flowers[flower]}</li>
    
  ));
  console.log(outputFlowers);

  return (
    <div className={classes.Order}>
      <div>{name}, {phone}, {address}</div>
      <div>{outputFlowers}</div>
      <strong>{price}</strong>
    </div>
  );
}

export default Order;