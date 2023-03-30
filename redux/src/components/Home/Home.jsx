import React, { Component } from "react";
import Result from "../Result/Result";
import TicketList from "../Ticket/TicketList"
import "./../../css/style.css";
export class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="row">
          <div className="booking col-8">
            <h1>Ticket Booking</h1>
            <table>
              <TicketList />
            </table>
          </div>
          <div className="col-4">
            <Result />
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
