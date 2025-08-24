import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "./Dashboard.css";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const cards = [
    { title: "Faculty Advisor", color: "card-red" },
    { title: "Academics", color: "card-blue" },
    { title: "Time Table", color: "card-orange" },
    { title: "Attendance", color: "card-purple" },
    { title: "Exam Schedule", color: "card-darkblue" },
    { title: "Result", color: "card-red" },
    { title: "Library", color: "card-orange" },
    { title: "Hostel", color: "card-pink" },
    { title: "Dues", color: "card-green" },
    { title: "Canteen", color: "card-orange" },
    { title: "Online Quiz Exam", color: "card-blue" },
    { title: "Online Written Exam", color: "card-blue" },
  ];

  return (
    <div className="dashboard-container">
      <Navbar onToggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      <div className="dashboard-main">
        <Sidebar isOpen={sidebarOpen} />
        <div className={`dashboard-content ${!sidebarOpen ? 'sidebar-closed' : ''}`}>
          <div className="page-title">
            <span >Dashboard</span>
          </div>
          <div className="card-grid">
            {cards.map((card, index) => (
              <div key={index} className={`card ${card.color}`}>
                {card.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
