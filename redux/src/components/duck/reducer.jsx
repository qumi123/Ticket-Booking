import tickets from "../danhSachGhe.json";
import {
  BOOKING,
  PAYING
} from "./type";
const initialState = {
  ticketList: tickets,
  ticketBookingList: [],
};
export const ticketReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOKING: {
      let data = [...state.ticketBookingList];
      let index = data.findIndex(
        (ticket) => ticket === action.customer
      );
      if (index !== -1) {
        data.splice(index, 1);
      } else {
        data.push(action.customer);
      }
      return { ...state, ticketBookingList: data };
    }
    case PAYING: {
      let ls = state.ticketBookingList.map((item) => item);
      let data = state.ticketList.map((item) => {
        let seatLs = item.danhSachGhe.map((ticket) => {
          if (ls.includes(ticket)) {
            ticket.booked = true;
          }
          return ticket;
        });
        return { ...item, ls: seatLs };
      });
      return { ...state, ticketBookingList: [], ticketList: data };
    }
    default:
      return state;
  }
};
export default ticketReducer;
