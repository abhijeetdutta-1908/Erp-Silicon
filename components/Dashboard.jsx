import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { FaArrowCircleRight } from "react-icons/fa";
import "./Dashboard.css";

const Card = ({ title, color, children }) => {
  return (
    <div className={`card ${color}`}>
      <div className="card-title">{title}</div>
      <div className="card-body">{children}</div>
    </div>
  );
};

// 🔹 Individual Cards
const FacultyCard = () => (
  <Card title="Faculty Advisor" color="card-red">
    <div className="card-content">
      <div className="card-top-bar">
        <div>NAME: Dr Samaleswari Prasad Nayak</div>
        <div>Contact: 9658663103</div>
        <br />
      </div>
      <div className="card-bottom-bar card-footer-red">
        <a>
          Interactions <FaArrowCircleRight />
        </a>
        <a>
          Raise an Issue
          <FaArrowCircleRight />
        </a>
        <a>
          SOP
          <FaArrowCircleRight />
        </a>
      </div>
    </div>
  </Card>
);

const AcademicsCard = () => (
  <Card title="Academics" color="card-blue">
    <div className="card-content">
      <div className="card-top-bar">
        <div>Regd no. -23BCSE93</div>
        <div>Program - B.TECH , Semester - 5</div>
        <div>Branch - CSE</div>
      </div>
      <div className="card-bottom-bar card-footer-blue">
        <a>
          More Info <FaArrowCircleRight />
        </a>
      </div>
    </div>
  </Card>
);

const TimeTableCard = () => (
  <Card title="Time Table" color="card-orange">
    <div className="card-content">
      <div className="card-btn">
        <button className="btn">CSE-C</button>
      </div>
      <br />
      <br />
      <br />
      <div className="card-bottom-bar card-footer-orange">
        <a>
          More Info <FaArrowCircleRight />
        </a>
      </div>
    </div>
  </Card>
);

const AttendanceCard = () => (
  <Card title="Attendance" color="card-purple">
    <div className="card-content">
      <div className="card-top-bar">
      <div>Subjects - 0</div>
      <div> 0 to 79% - 4</div>
      <div> 80% to 100% - 6</div>
      </div>
      <div className="card-bottom-bar card-footer-purple">
        <a>
          More Info <FaArrowCircleRight />
        </a>
      </div>
    </div>
  </Card>
);

const ExamScheduleCard = () => (
  <Card title="Exam Schedule" color="card-darkblue">
    <div className="card-content">
      <div className="card-top-bar">
      <div>Today - 0</div>
      <div> Tomorrow - 0</div>
      <br />
      </div>
      <div className="card-bottom-bar card-footer-darkblue">
        <a>
          Autonomous Exam <FaArrowCircleRight />
        </a>
        <a>
          Class Test Exam <FaArrowCircleRight />
        </a>
      </div>
    </div>
  </Card>
);

const ResultCard = () => (
  <Card title="Result" color="card-red">
    <div className="card-content">
      <div className="card-top-bar">
      <br />
      <br />
      <br />
    </div>
      <div className="card-bottom-bar card-footer-red">
        <a>
          More Info
          <FaArrowCircleRight />
        </a>
      </div>
    </div>
  </Card>
);

const LibraryCard = () => (
  <Card title="Library" color="card-orange">
    <div className="card-content">
      <div className="card-top-bar">
      <div>Books with me - 0</div>
      <div>To be returned today - 0</div>
      <div>To be returned this week - 0</div>
      </div>

      <div className="card-bottom-bar card-footer-orange">
        <a>
          More Info
          <FaArrowCircleRight />
        </a>
      </div>
    </div>
  </Card>
);

const HostelCard = () => (
  <Card title="Hostel" color="card-pink">
    <div className="card-content">
      <div className="card-top-bar">
      <div>Registered , Since - 07-Sep-2023</div>
      <div>Hostel - Boys Residence-I</div> 
      <div>Room No.- 414 , Bed No.- 1</div>
      </div>

      <div className="card-bottom-bar card-footer-pink">
        <a>
          Apply Leave <FaArrowCircleRight />
        </a>
      </div>
    </div>
  </Card>
);

const DuesCard = () => (
  <Card title="Dues" color="card-green">
    <div className="card-content">
      <div className="card-top-bar">
      <div>Total Dues - 0</div>
      <br />
      <br />
      </div>

      <div className="card-bottom-bar card-footer-green">
        <a>
          Pay Now
          <FaArrowCircleRight />
        </a>
        <a>
          Print Receipt
          <FaArrowCircleRight />
        </a>
      </div>
    </div>
  </Card>
);

const CanteenCard = () => (
  <Card title="Canteen" color="card-red">
    <div className="card-content">
      <div className="card-top-bar">
      <br />
      <br />
      <br />
      </div>

      <div className="card-bottom-bar card-footer-red">
        <a>
          Registration
          <FaArrowCircleRight />
        </a>
      </div>
    </div>
  </Card>
);

const OnlineQuizCard = () => (
  <Card title="Online Quiz Exam" color="card-blue">
    <div className="card-content">
      <div className="card-top-bar">
      <br />
      <br />
      <br />
      </div>
      <div className="card-bottom-bar card-footer-blue">
        <a>
          More Info
          <FaArrowCircleRight />
        </a>
      </div>
    </div>
  </Card>
);

const OnlineWrittenCard = () => (
  <Card title="Online Written Exam" color="card-blue">
    <div className="card-content">
      <div className="card-top-bar">
      <br />
      <br />
      <br />
      </div>
      <div className="card-bottom-bar card-footer-blue">
        <a>
          More Info
          <FaArrowCircleRight />
        </a>
      </div>
    </div>
  </Card>
);
const ProfileCard = () => (
  <Card title="Profile" color="card-green">
    <div className="card-content">
      <div className="card-top-bar">
        <div>Name - Abhijeet Dutta</div>
        <div>Mobile No. - 9777337032</div>
        <div>Email Id - abhijeetduttaam@gmail.com</div>
      </div>
      <div className="card-bottom-bar card-footer-green">
        <a>
          More Info <FaArrowCircleRight />
        </a>
      </div>
    </div>
  </Card>
);
const HolidaysCard = () => (
  <Card title="Holidays" color="card-green">
    <div className="card-content">
      <div className="card-top-bar">
        <div>Leave Year - 2025-26</div>
        <div>Total Holiday - 21</div>
        <br/>
      </div>
      <div className="card-bottom-bar card-footer-green">
        <a>
          View List <FaArrowCircleRight />
        </a>
      </div>
    </div>
  </Card>
);
const CourseFeedbackCard = () => (
  <Card title="Course Feedback" color="card-purple">
    <div className="card-content">
      <div className="card-top-bar">
        <div>Start:</div>
        <div>End:</div>
        <br/>
      </div>
      <div className="card-bottom-bar card-footer-purple">
        <a>
          Course Feedback <FaArrowCircleRight />
        </a>
      </div>
    </div>
  </Card>
);
const FeedbackCard = () => (
  <Card title="Feedback" color="card-purple">
    <div className="card-content">
      <div className="card-top-bar">
        <br/>
        <br/>
        <br/>
      </div>
      <div className="card-bottom-bar card-footer-purple">
        <a>
          Feedback <FaArrowCircleRight />
        </a>
         <a>
          FA Feedback <FaArrowCircleRight />
        </a>
      </div>
    </div>
  </Card>
);
const StudentSatisfactionSurveyFeedbackCard = () => (
  <Card title="Student Satisfaction Survey Feedback" color="card-purple">
    <div className="card-content">
      <div className="card-top-bar">
        <div>Start:</div>
        <div>End:</div>
        <br/>
      </div>
      <div className="card-bottom-bar card-footer-purple">
        <a>
          SSS Feedback <FaArrowCircleRight />
        </a>
      </div>
    </div>
  </Card>
);
const PracticeSchoolCard = () => (
  <Card title="Practice School" color="card-pink">
    <div className="card-content">
      <div className="card-top-bar">
        <br/>
        <br/>
        <br/>
      </div>
      <div className="card-bottom-bar card-footer-pink">
        <a>
          More Info <FaArrowCircleRight />
        </a>
      </div>
    </div>
  </Card>
);
const OfficialMailCard = () => (
  <Card title="Official Mail" color="card-darkblue">
    <div className="card-content">
      <div className="card-top-bar">
        <div>Email Id:-cse.23bcse93@silicon.ac.in</div>
        <div>Password:- idontknow</div>
        <br/>
      </div>
      <div className="card-bottom-bar card-footer-darkblue">
        <a>
          View List <FaArrowCircleRight />
        </a>
      </div>
    </div>
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
            <ProfileCard />
            <HolidaysCard />
            <CourseFeedbackCard />
            <FeedbackCard/>
            <StudentSatisfactionSurveyFeedbackCard/>
            <PracticeSchoolCard/>
            <OfficialMailCard/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
