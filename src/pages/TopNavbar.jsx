import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Dropdown,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import fallbackAvatar from "../assets/101.jpg";

export default function TopNavbar({ user }) {
  const [messages] = useState([
    { user: "John Doe", text: "Hi, can you join the alumni program?" },
    { user: "Alice Smith", text: "Invitation: Networking event tomorrow." },
  ]);

  const [notifications] = useState([
    { user: "Campus Admin", text: "New job opportunity posted." },
    { user: "Event Team", text: "Upcoming Alumni Reunion." },
    { user: "Career Cell", text: "New internship available." },
  ]);

  return (
    <Navbar bg="white" expand="lg" sticky="top" className="shadow-sm py-3">
      <Container className="d-flex justify-content-between align-items-center">
        {/* Brand */}
        <Navbar.Brand as={Link} to="/" className="fw-bold text-primary">
          Ikroop
        </Navbar.Brand>

        {/* Center Navigation */}
        <Nav className="align-items-center">
          <Nav.Link as={Link} to="/">Home</Nav.Link>

          {/* Mega Dropdown */}
          <Dropdown className="mega-dropdown">
            <Dropdown.Toggle as={Nav.Link} id="community-dropdown">
              Community Hub
            </Dropdown.Toggle>
            <Dropdown.Menu className="mega-menu p-3">
              <div className="d-flex flex-wrap justify-content-between">
                <div className="mega-menu-column">
                  <h6>Directories</h6>
                  <Dropdown.Item as={Link} to="/directory">Alumni Directory</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/students">Student Directory</Dropdown.Item>
                </div>
                <div className="mega-menu-column">
                  <h6>Stories & Media</h6>
                  <Dropdown.Item as={Link} to="/stories">Stories & Achievements</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/gallery">Gallery</Dropdown.Item>
                </div>
              </div>
            </Dropdown.Menu>
          </Dropdown>

          {/* Other Dropdowns */}
          <NavDropdown title="Careers & Mentorship" id="careers-dropdown">
            <NavDropdown.Item as={Link} to="/Jobs">Job Opportunities</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/internships">Internships</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/mentorship">Mentorship Programs</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Events & Campaigns" id="events-dropdown">
            <NavDropdown.Item as={Link} to="/events">Events & Reunions</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/Aluminicampaign">Campaigns & Donations</NavDropdown.Item>
          </NavDropdown>

           <Nav.Link as={Link} to="/dashbord">Dashboard</Nav.Link>
        </Nav>

        {/* Right side */}
        <Nav className="d-flex align-items-center">

          {/* Messages */}
          <Dropdown align="end" className="me-3 nav-icon">
            <Dropdown.Toggle variant="light" id="dropdown-messages" className="position-relative">
              <i className="fa-solid fa-message fs-5"></i>
              {messages.length > 0 && <span className="notification-badge bg-success">{messages.length}</span>}
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ minWidth: "300px", padding: "10px" }}>
              {messages.length > 0 ? messages.map((msg, idx) => (
                <div key={idx} className="p-2 mb-2 rounded shadow-sm message-item">
                  <strong>{msg.user}</strong>
                  <p className="mb-0">{msg.text}</p>
                </div>
              )) : <Dropdown.Item>No messages</Dropdown.Item>}
            </Dropdown.Menu>
          </Dropdown>

          {/* Notifications */}
          <Dropdown align="end" className="me-3 nav-icon">
            <Dropdown.Toggle variant="light" id="dropdown-notifications" className="position-relative">
              <i className="fa-solid fa-bell fs-5"></i>
              {notifications.length > 0 && <span className="notification-badge">{notifications.length}</span>}
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ minWidth: "300px", padding: "10px" }}>
              {notifications.length > 0 ? notifications.map((note, idx) => (
                <div key={idx} className="p-2 mb-2 rounded shadow-sm notification-item">
                  <strong>{note.user}</strong>
                  <p className="mb-0">{note.text}</p>
                </div>
              )) : <Dropdown.Item>No notifications</Dropdown.Item>}
            </Dropdown.Menu>
          </Dropdown>

          {/* Login / Signup */}
          {!user && (
            <>
              <Button as={Link} to="/login" variant="outline-primary" className="me-2">
                Login
              </Button>
              <Button as={Link} to="/signup" variant="primary" className="me-3">
                Sign Up
              </Button>
            </>
          )}

          {/* Profile */}
          <Dropdown align="end" className="me-0">
            <Dropdown.Toggle variant="light" id="dropdown-profile" className="position-relative profile-toggle">
              <img src={user?.avatarUrl || fallbackAvatar} alt="Profile" className="profile-avatar" />
            </Dropdown.Toggle>
            <Dropdown.Menu align="end">
              <Dropdown.Item as={Link} to="/profile">Profile</Dropdown.Item>
              <Dropdown.Item as={Link} to="/settings">Settings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item as={Link} to="/logout">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

        </Nav>
      </Container>
    </Navbar>
  );
}
