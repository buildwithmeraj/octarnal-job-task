import React from "react";
import Sidebar from "../../dashboard/Sidebar";
import Navbar from "../../dashboard/Navbar";
import Content from "../../dashboard/Content";

const Dashboard = () => {
  return (
    <div className="min-h-screen grid grid-cols-13 ">
      <Sidebar />
      <div className="col-span-11 my-4 mr-4">
        <Navbar />
        <Content />
      </div>
    </div>
  );
};

export default Dashboard;
