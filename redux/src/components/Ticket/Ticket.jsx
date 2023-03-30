import React, { Component } from "react";
import { connect } from "react-redux";
import { actBooking } from "../duck/action";
export class Ticket extends Component {
  render() {
    const { ticket, ticketBookingList, bookingTicket } = this.props;
    return (
      <input className="checkbox" type="checkbox" value={ticket.soGhe} disabled={ticket.booked}
        checked={ticketBookingList.find((item) => item.soGhe === ticket.soGhe)}
        onClick={() => bookingTicket(ticket)}
      />
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ticketBookingList: state.ticketReducer.ticketBookingList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    bookingTicket: (customer) => {
      dispatch(actBooking(customer));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Ticket);
