import React, { useState } from "react";
import {
  FaBed,
  FaCubes,
  FaBook,
  FaHdd,
  FaShieldAlt,
  FaChevronRight,
  FaChevronDown,
  FaFileAlt,
  FaClipboardList,
  FaMoneyBill,
  FaListUl,
  FaCheckCircle,
  FaChartLine,
  FaSearch,
  FaShoppingCart,
  FaUpload,
  FaShareAlt,
  FaPhoneAlt,
  FaExclamationTriangle,
} from "react-icons/fa";
import { PiForkKnifeFill } from "react-icons/pi";
import "./Sidebar.css";

const Sidebar = ({ isOpen }) => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const menuItems = [
    {
      id: "hostel",
      icon: <FaBed />,
      label: "Hostel",
      submenus: [
        { label: "Room Allotment", icon: <FaClipboardList /> },
        { label: "Complaints", icon: <FaExclamationTriangle /> },
        { label: "Fees", icon: <FaMoneyBill /> },
      ],
    },
    {
      id: "academics",
      icon: <FaCubes />,
      label: "Academics",
      submenus: [
        { label: "Courses", icon: <FaListUl /> },
        { label: "Results", icon: <FaCheckCircle /> },
        { label: "Attendance", icon: <FaChartLine /> },
      ],
    },
    {
      id: "dms",
      icon: <FaBook />,
      label: "DMS",
      submenus: [
        { label: "Documents", icon: <FaFileAlt /> },
        { label: "Certificates", icon: <FaClipboardList /> },
      ],
    },
    {
      id: "library",
      icon: <FaBook />,
      label: "Library",
      submenus: [
        { label: "Search Books", icon: <FaSearch /> },
        { label: "Borrowed Books", icon: <FaBook /> },
      ],
    },
    {
      id: "canteen",
      icon: <PiForkKnifeFill />,
      label: "Canteen",
      submenus: [
        { label: "Menu", icon: <FaListUl /> },
        { label: "Orders", icon: <FaShoppingCart /> },
      ],
    },
    {
      id: "repository",
      icon: <FaHdd />,
      label: "Repository",
      submenus: [
        { label: "Upload Files", icon: <FaUpload /> },
        { label: "Shared Files", icon: <FaShareAlt /> },
      ],
    },
    {
      id: "antiRagging",
      icon: <FaShieldAlt />,
      label: "Anti Ragging",
      submenus: [
        { label: "Report Case", icon: <FaExclamationTriangle /> },
        { label: "Helpline", icon: <FaPhoneAlt /> },
      ],
    },
  ];

  return (
    <div className={`sidebar ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      {menuItems.map((item) => (
        <div key={item.id}>
          {/* Main menu row */}
          <div
            className="sidebar-item"
            onClick={() => toggleMenu(item.id)}
          >
            <div className="sidebar-left">
              <span className="sidebar-icon">{item.icon}</span>
              <span className="sidebar-text">{item.label}</span>
            </div>
            <div className="sidebar-arrow">
              {openMenu === item.id ? <FaChevronDown /> : <FaChevronRight />}
            </div>
          </div>

          {/* Submenus */}
          {openMenu === item.id && (
            <div className="submenu">
              {item.submenus.map((sub, i) => (
                <div key={i} className="submenu-item">
                  <span className="submenu-icon">{sub.icon}</span>
                  <span>{sub.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
