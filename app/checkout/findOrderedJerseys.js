export default function findOrderedJerseys(order, cookieArray, jerseysFromDB) {
  for (let i = 0; i < cookieArray.length; i++) {
    const orderedJersey = jerseysFromDB.find(
      (cake) => cake.id === cookieArray[i]['id'],
    );
    if (orderedJersey.id === cookieArray[i]['id']) {
      order.push({ ...orderedJersey, quantity: cookieArray[i]['quantity'] });
    }
  }
  return order;
}
