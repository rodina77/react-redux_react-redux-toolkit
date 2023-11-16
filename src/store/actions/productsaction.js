export const Add_product = (product) => {
  return {
    type: "Add_product",
    payload: product,
  };
};
export const get_product = (product) => {
  return {
    type: "get_product",
    payload: product,
  };
};
export const fetch_product = () => {
  return async (dispatch) => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    dispatch(get_product(data));
  };
};