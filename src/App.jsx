// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components & Pages
import TopNavbar from "./pages/TopNavbar.jsx";
import HomePage from "./pages/HomePage";
import Footer from "./pages/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ChatBot from "./components/ChatBot.jsx";
import Gallery from "./pages/Gallery";
import AlumniDirectory from "./pages/AlumniDirectory";
import StudentDirectory from "./pages/StudentDirectory";
import StoriesAchievements from "./pages/StoriesAchievements";
import StudentProfile from "./components/StudentProfile.jsx";
import Profile from "./pages/ProfilePage.jsx";
import AlmaCard from './components/AlmaCard';
import MentorshipPage from "./pages/MentorshipPage.jsx";
import InternshipsPage from "./pages/InternshipsPage.jsx";
import Event from "./pages/AluminiEvent.jsx";
import JobsPage from "./pages/JobsPage.jsx";
import Aluminicampaign from "./pages/AluminiCampaign.jsx";
import AlumniProfile from "./components/AlumniProfile.jsx";
import StoryDetails from "./components/StoryDetails.jsx";
import JobDetails from "./components/JobDetails.jsx";
import InternshipDetails from "./components/InternshipDetails.jsx";
import AlumniDashboard from "./pages/AluminiDashboard.jsx";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Navbar.css";

function App() {
  return (
    <Router>
      <TopNavbar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<HomePage />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Pages */}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/directory" element={<AlumniDirectory />} />
        <Route path="/students" element={<StudentDirectory />} />
        <Route path="/stories" element={<StoriesAchievements />} />
        <Route path="/digital-card" element={<AlmaCard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/mentorship" element={<MentorshipPage />} />
        <Route path="/internships" element={<InternshipsPage />} />
        <Route path="/events" element={<Event />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/aluminicampaign" element={<Aluminicampaign />} />
        <Route path="/dashbord" element={<AlumniDashboard />} />

        {/* Detail Pages */}
        <Route path="/story/:id" element={<StoryDetails />} />
        <Route path="/alumni/:id" element={<AlumniProfile />} />
        <Route path="/student/:id" element={<StudentProfile />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="/internships/:id" element={<InternshipDetails />} />
      </Routes>

      <Footer />

      {/* ChatBot globally */}
      <ChatBot />
    </Router>
  );
}

export default App;
