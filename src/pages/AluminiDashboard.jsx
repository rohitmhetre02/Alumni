import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  PieChart, Pie, Cell,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from "recharts";
import { FaCircleArrowLeft } from "react-icons/fa6";

function AlumniDashboard() {
  const [showConnections, setShowConnections] = useState(false);
  const [selectedConnection, setSelectedConnection] = useState(null);

  // New state for stats modal
  const [selectedStat, setSelectedStat] = useState(null);

  // Alumni Info
  const alumni = {
    name: "Rahul Sharma",
    email: "rahul.sharma@example.com",
    education: "B.Tech in Computer Science, IIT Bombay (2018)",
    currentJob: "Software Engineer at Google",
    salary: "₹35 LPA",
    connections: 3,
  };

  // Connections List
  const connectionsList = [
    {
      id: 1,
      name: "Amit Verma",
      job: "Data Scientist at Amazon",
      email: "amit.verma@amazon.com",
      education: "M.Tech in Data Science, IISc Bangalore",
      skills: ["Python", "AI", "Big Data"],
    },
    {
      id: 2,
      name: "Sneha Kapoor",
      job: "UI/UX Designer at Microsoft",
      email: "sneha.kapoor@microsoft.com",
      education: "B.Des in Interaction Design, NID Ahmedabad",
      skills: ["Figma", "UI Design", "Prototyping"],
    },
    {
      id: 3,
      name: "Rohit Mhetre",
      job: "Product Manager at Flipkart",
      email: "rohit.mehra@flipkart.com",
      education: "MBA, IIM Bangalore",
      skills: ["Strategy", "Agile", "Leadership"],
    },
  ];

  // Skills Data
  const skills = [
    { name: "React.js", value: 80 },
    { name: "Node.js", value: 70 },
    { name: "Machine Learning", value: 60 },
    { name: "Cloud Computing", value: 50 },
  ];

  // Stats
  const stats = {
    eventsAttended: 12,
    mentees: 25,
    projects: 8,
    publications: 5,
  };

  // Details for each stat
  const details = {
    eventsAttended: [
      "IIT Bombay Alumni Meet 2023",
      "Tech Conference on AI 2024",
      "Google I/O 2023 Speaker",
    ],
    mentees: [
      "Priya Singh – Software Engineer at TCS",
      "Arjun Mehta – Data Analyst at Infosys",
      "Kavya Rao – UI Designer at Wipro",
    ],
    projects: [
      "AI Chatbot for Healthcare",
      "E-commerce Recommendation System",
      "Cloud-based Expense Tracker",
    ],
    publications: [
      "Research on AI in Healthcare (2022)",
      "Cloud Computing Trends (2023)",
      "React Performance Optimization (2024)",
    ],
  };

  // Badges
  const badges = ["Top Mentor 2023", "AI Specialist", "Cloud Certified"];

  // Activity Timeline
  const activities = [
    "Spoke at Google I/O 2023",
    "Published research paper on AI",
    "Mentored 10 students this month",
    "Attended IIT Bombay Alumni Meet",
  ];

  // Recommended Connections
  const suggestions = [
    "Anjali Singh (Data Analyst, Accenture)",
    "Karan Patel (Software Dev, Adobe)",
    "Megha Nair (AI Researcher, IBM)",
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="container mt-4">
      <h2 className="bg-primary text-white text-center p-5">Alumni Dashboard</h2>

      {/* Profile Card */}
      <div className="card shadow-lg p-3 mb-4">
        <div className="row align-items-center">
          <div className="col-md-3 text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="alumni"
              className="rounded-circle img-fluid"
            />
          </div>
          <div className="col-md-9">
            <h4>{alumni.name}</h4>
            <p><b>Email:</b> {alumni.email}</p>
            <p><b>Education:</b> {alumni.education}</p>
            <p><b>Current Job:</b> {alumni.currentJob}</p>
            <p><b>Salary Package:</b> {alumni.salary}</p>
            <p>
              <b>Connections:</b>{" "}
              <span
                className="text-primary"
                style={{ cursor: "pointer" }}
                onClick={() => setShowConnections(true)}
              >
                {alumni.connections}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="row text-center mb-4">
        {Object.entries(stats).map(([key, value], index) => (
          <div key={index} className="col-md-3">
            <div
              className="card p-3 shadow-sm"
              style={{ cursor: "pointer" }}
              onClick={() => setSelectedStat(key)}
            >
              <h5>{key.replace(/([A-Z])/g, " $1")}</h5>
              <h3>{value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <div className="row">
        {/* Pie Chart */}
        <div className="col-md-6 mb-4">
          <div className="card p-3 shadow-lg">
            <h5 className="text-center">Skill Distribution</h5>
            <PieChart width={480} height={300}>
              <Pie
                data={skills}
                cx={200}
                cy={150}
                labelLine={false}
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {skills.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="col-md-6 mb-4">
          <div className="card p-3 shadow-lg">
            <h5 className="text-center">Skill Proficiency</h5>
            <BarChart width={400} height={300} data={skills}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#82ca9d" />
            </BarChart>
          </div>
        </div>
      </div>

      {/* Extra Sections */}
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card p-3 shadow-lg">
            <h5>Recent Achievements</h5>
            <ul>
              {activities.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card p-3 shadow-lg">
            <h5>Certifications & Badges</h5>
            <ul>
              {badges.map((b, i) => (
                <li key={i}>🏅 {b}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Suggestions & Events */}
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card p-3 shadow-lg">
            <h5>Networking Suggestions</h5>
            <ul>
              {suggestions.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card p-3 shadow-lg">
            <h5>Upcoming Events</h5>
            <ul>
              <li>IIT Bombay Alumni Meet 2025 – Dec 20</li>
              <li>Tech Talk on AI – Nov 15</li>
              <li>Networking Mixer – Oct 30</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Connections Modal */}
      {showConnections && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Connections</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowConnections(false)}
                ></button>
              </div>
              <div className="modal-body">
                <ul className="list-group">
                  {connectionsList.map((conn) => (
                    <li
                      key={conn.id}
                      className="list-group-item"
                      style={{ cursor: "pointer" }}
                      onClick={() => setSelectedConnection(conn)}
                    >
                      <b>{conn.name}</b> — {conn.job}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setShowConnections(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Individual Connection Modal */}
      {selectedConnection && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedConnection.name}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setSelectedConnection(null)}
                ></button>
              </div>
              <div className="modal-body">
                <p><b>Job:</b> {selectedConnection.job}</p>
                <p><b>Email:</b> {selectedConnection.email}</p>
                <p><b>Education:</b> {selectedConnection.education}</p>
                <p><b>Skills:</b> {selectedConnection.skills.join(", ")}</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setSelectedConnection(null)}
                >
                  <FaCircleArrowLeft className="color-white"></FaCircleArrowLeft>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stats Modal */}
      {selectedStat && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {selectedStat.replace(/([A-Z])/g, " $1")}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setSelectedStat(null)}
                ></button>
              </div>
              <div className="modal-body">
                <ul className="list-group">
                  {details[selectedStat]?.map((item, i) => (
                    <li key={i} className="list-group-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setSelectedStat(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AlumniDashboard;
