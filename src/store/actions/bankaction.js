export const withdraw_case="withdraw";
export const deposite_case="deposite";


export const withdraw = (amount) => {
  return {
    type: withdraw_case,
    payload: amount,
  };
};
export const deposite = (amount) => {
  return {
    type: deposite_case,
    payload: amount,
  };
};