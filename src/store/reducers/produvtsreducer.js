export const productReducer = (state=[{id:1,title:'shincare'}], action) => {
  switch (action.type) {
    case "get_product":
      return [... action.payload];
    case "Add_product":
      return [...state,action.payload];
    default:
      return state;
  }
};