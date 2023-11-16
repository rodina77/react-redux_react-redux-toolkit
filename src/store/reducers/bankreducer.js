import { deposite_case,withdraw_case } from "../actions/bankaction";

export const bankreducer = (state = 1000, action) => {
  switch (action.type) {
    case withdraw_case:
      return state + action.payload;
    case deposite_case:
      return  state - action.payload;
    default:
      return state;
  }
};