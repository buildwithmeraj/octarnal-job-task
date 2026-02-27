import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen grid grid-cols-14 ">
      <div className="bg-base-300 col-span-3 m-4 rounded-3xl"></div>
      <div className="col-span-11 my-4 mr-4">
        <div className="h-28 bg-base-300 rounded-3xl"></div>
        <div className="h-[calc(100vh-10rem)] bg-base-300 rounded-3xl mt-4"></div>
      </div>
    </div>
  );
};

export default Dashboard;
