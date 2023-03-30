import {
  PAYING,
  BOOKING
} from "./type";
export const actBooking = (customer) => {
  return {
    type: BOOKING,
    customer,
  };
};
export const actPaying = () => {
  return {
    type: PAYING,
  };
};
