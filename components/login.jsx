import React, { useState, useEffect } from "react";
import Dashboard from "./Dashboard";
import {
  BarChart,
  Users,
  BookOpen,
  DollarSign,
  ChevronLeft,
  ChevronRight,
  Menu,
  Mail,
  Lock,
  Building,
} from "lucide-react";
import "./login.css"; 
import slide1 from "../src/assets/slide1.jpg";
import slide2 from "../src/assets/slide2.jpg";
import slide3 from "../src/assets/slide3.jpg";
import slide4 from "../src/assets/slide4.jpg";
import slide5 from "../src/assets/slide5.jpg";
import slide6 from "../src/assets/slide6.jpg";
import slide7 from "../src/assets/slide7.jpg";
import slide8 from "../src/assets/slide8.jpg";
import slide9 from "../src/assets/slide9.jpg";
import slide10 from "../src/assets/slide10.jpg";
import slide11 from "../src/assets/slide11.jpg";
import slide12 from "../src/assets/slide12.jpg";
import logo from "../src/assets/SITBBS_logo.jpg";

const LoginInput = ({ icon, ...props }) => (
  <div className="input-wrapper">
    <span className="input-icon">{icon}</span>
    <input {...props} className="input-field" />
  </div>
);

const LoginPage = ({ onLoginSuccess }) => {
  const slides = [
    { src: slide1, desc: "" },
    { src: slide2, desc: "" },
    { src: slide3, desc: "" },
    { src: slide4, desc: "" },
    { src: slide5, desc: "" },
    { src: slide6, desc: "" },
    { src: slide7, desc: "Honourable Governor of Odisha" },
    { src: slide8, desc: "" },
    { src: slide9, desc: "Chief Guest Dr. Anand Despande" },
    { src: slide10, desc: "" },
    { src: slide11, desc: "Academic Procession for Convocation 2025" },
    { src: slide12, desc: "Pledge Administration to Graduands by Registrar" },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goPrev = () => {
    setCurrentImage((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goNext = () => {
    setCurrentImage((prev) => (prev + 1) % slides.length);
  };

  const institutes = [
    "SiliconTech is a Unit of Silicon University",
    "Silicon Institute of Technology, Sambalpur",
    "Silicon Institute Trust",
  ];

  return (
    <div className="login-container">
      <div className="login-navbar">
        <img
          src={logo}
          alt="Silicon University Logo"
          className="logo"
        />
        <p className="navbar-text">
          Silicon Tech is a unit of Silicon University
        </p>
      </div>
      <div className="login-box">
        {/* Left: Login Form */}
        <div className="login-form">
          <div className="login-header">
            <p>LOGIN</p>
          </div>

          <div className="login-form-body">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onLoginSuccess();
              }}
            >
              <LoginInput
                icon={<Mail size={20} />}
                type="email"
                placeholder="User Name / Email"
                required
              />
              <LoginInput
                icon={<Lock size={20} />}
                type="password"
                placeholder="Password"
                required
              />

              <div className="input-wrapper">
                <span className="input-icon">
                  <Building size={20} />
                </span>
                <select className="input-field">
                  {institutes.map((inst, index) => (
                    <option key={index} value={inst}>
                      {inst}
                    </option>
                  ))}
                </select>
              </div>

              <div className="login-options">
                <label className="remember-me">
                  <input type="checkbox" />
                  <span>Remember Me</span>
                </label>
                <a href="#" className="forgot-password">
                  Forgot Password?
                </a>
              </div>

              <button type="submit" className="login-button">
                Sign In
              </button>
            </form>
          </div>
        </div>

        {/* Right: Slideshow */}
        <div className="slideshow">
          {slides.map((slide, index) => (
            <img
              key={slide.src}
              src={slide.src}
              alt={`Slide ${index}`}
              className={`slideshow-image ${index === currentImage ? "active" : ""}`}
            />
          ))}

          <div className="slideshow-overlay">
            <p>{slides[currentImage].desc}</p>
          </div>
          {/* Navigation Arrows */}
          <button className="arrow left" onClick={goPrev}>
            <ChevronLeft size={32} />
          </button>
          <button className="arrow right" onClick={goNext}>
            <ChevronRight size={32} />
          </button>

          {/* Pagination Dots */}
          <div className="pagination-dots">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentImage ? "active" : ""}`}
                onClick={() => setCurrentImage(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main App Component ---
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (isLoggedIn) {
    return <Dashboard />;
  } else {
    return <LoginPage onLoginSuccess={() => setIsLoggedIn(true)} />;
  }
}
