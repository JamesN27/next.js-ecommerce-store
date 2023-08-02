export default function getTotalPrice(order) {
  if (order.length > 0) {
    const eachJerseyPrice = order.map((obj) => {
      return obj.price * obj.quantity;
    });
    return eachJerseyPrice.reduce((acc, currentValue) => {
      return acc + currentValue;
    });
  } else {
    return '0';
  }
}
