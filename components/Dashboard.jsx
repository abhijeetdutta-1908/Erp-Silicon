import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "./Dashboard.css";

// 🔹 Reusable Card Wrapper
const Card = ({ title, color, children }) => {
  return (
    <div className={`card ${color}`}>
      <h3 className="card-title">{title}</h3>
      <div className="card-body">{children}</div>
    </div>
  );
};

// 🔹 Individual Cards
const FacultyCard = () => (
  <Card title="Faculty Advisor" color="card-red">
    <p><strong>Dr Samaleswari Prasad Nayak</strong></p>
    <p>Contact: 9658663103</p>
  </Card>
);

const AcademicsCard = () => (
  <Card title="Academics" color="card-blue">
    <button className="btn">View Syllabus</button>
    <button className="btn">Assignments</button>
  </Card>
);

const TimeTableCard = () => (
  <Card title="Time Table" color="card-orange">
    <button className="btn">View Time Table</button>
  </Card>
);

const AttendanceCard = () => (
  <Card title="Attendance" color="card-purple">
    <p>Present: 85%</p>
    <button className="btn">Check Details</button>
  </Card>
);

const ExamScheduleCard = () => (
  <Card title="Exam Schedule" color="card-darkblue">
    <button className="btn">View Exam Dates</button>
  </Card>
);

const ResultCard = () => (
  <Card title="Result" color="card-red">
    <button className="btn">Check Results</button>
  </Card>
);

const LibraryCard = () => (
  <Card title="Library" color="card-orange">
    <button className="btn">Borrowed Books</button>
    <button className="btn">Search Catalog</button>
  </Card>
);

const HostelCard = () => (
  <Card title="Hostel" color="card-pink">
    <p>Room No: B-204</p>
    <button className="btn">Hostel Info</button>
  </Card>
);

const DuesCard = () => (
  <Card title="Dues" color="card-green">
    <p>Pending: ₹2,000</p>
    <button className="btn">Pay Now</button>
  </Card>
);

const CanteenCard = () => (
  <Card title="Canteen" color="card-orange">
    <button className="btn">Today’s Menu</button>
  </Card>
);

const OnlineQuizCard = () => (
  <Card title="Online Quiz Exam" color="card-blue">
    <button className="btn">Start Quiz</button>
  </Card>
);

const OnlineWrittenCard = () => (
  <Card title="Online Written Exam" color="card-blue">
    <button className="btn">Start Exam</button>
  </Card>
);

// 🔹 Main Dashboard Component
const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="dashboard-container">
      <Navbar onToggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      <div className="dashboard-main">
        <Sidebar isOpen={sidebarOpen} />
        <div
          className={`dashboard-content ${!sidebarOpen ? "sidebar-closed" : ""}`}
        >
          <div className="page-title">
            <span>Dashboard</span>
          </div>

          <div className="card-grid">
            <FacultyCard />
            <AcademicsCard />
            <TimeTableCard />
            <AttendanceCard />
            <ExamScheduleCard />
            <ResultCard />
            <LibraryCard />
            <HostelCard />
            <DuesCard />
            <CanteenCard />
            <OnlineQuizCard />
            <OnlineWrittenCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
