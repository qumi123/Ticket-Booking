import React, { Component } from "react";
import { connect } from "react-redux";
import Ticket from "./Ticket";
export class TicketList extends Component {
  render() {
    const { ticketList } = this.props;
    return (
      <tbody>
        {ticketList.map((item) => (
          <tr key={item.hang}>
            <td>{item.hang}</td>
            {item.danhSachGhe.map((ticket) => {
              let cellContent;
              if (item.hang) {
                cellContent = <Ticket ticket={ticket} />;
              } else {
                cellContent = <>{ticket.soGhe}</>;
              }
              return <td key={ticket.soGhe}>{cellContent}</td>;
            })}
          </tr>
        ))}
      </tbody>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ticketList: state.ticketReducer.ticketList,
  };
};
export default connect(mapStateToProps)(TicketList);
