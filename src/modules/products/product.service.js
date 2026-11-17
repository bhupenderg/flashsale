const products = [
  {
    id: 1,
    name: "iPhone 17",
    price: 79999,
    availableQuantity: 10
  },
  {
    id: 2,
    name: "Samsung Galaxy S25",
    price: 69999,
    availableQuantity: 15
  }
];

export const getAllProducts = () => {
  return products;
};