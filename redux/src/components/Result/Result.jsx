import React, { Component } from "react";
import { connect } from "react-redux";
import {
  actPaying,
  actBooking
} from "../duck/action";
export class Result extends Component {
  render() {
    const { ticketBookingList, payment, remove } = this.props;
    return (
      <div className="mt-4">
        <h1>Result</h1>
        <div className="mt-3">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Seat Number</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {ticketBookingList.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.soGhe}</td>
                  <td>{item.gia} VND</td>
                  <td>
                    <button className="btn btn-danger" onClick={() => remove(item)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          Total:{" "}{ticketBookingList.reduce((total, item) => total + item.gia, 0)} VND
        </div>
        <button className="btn btn-primary" onClick={payment}>Payment</button>
      </div>
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
    payment: () => {
      dispatch(actPaying());
    },
    remove: (customer) => {
      dispatch(actBooking(customer))
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Result);
