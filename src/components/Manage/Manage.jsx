import React from "react";

import "./Manage.css";
import { Table } from "@mui/material";

const Manage = () => {
  return (
    <div>
      <br />
      <h1>Manage</h1>
      <div className="container">
        <div className="manage-events">
          <div className="manage-events-button">View All Complaints</div>
        </div>
        <div className="box">
          <input type="text" placeholder="Search here..."></input>
          <a href="#">
            <i class="fas fa-search"></i>
          </a>
        </div>
      </div>
      <Table />
    </div>
  );
};

export default Manage;