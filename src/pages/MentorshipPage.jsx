import React, { useState } from "react";

const MentorshipPage = () => {
  const mentors = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Software Engineer",
      domain: "Frontend Development",
      image: "https://via.placeholder.com/150",
      price: "₹2000",
      services: ["Resume Check", "Mock Interview", "Career Guidance", "Query Solving"],
    },
    {
      id: 2,
      name: "Sneha Kapoor",
      role: "Data Scientist",
      domain: "Machine Learning",
      image: "https://via.placeholder.com/150",
      price: "₹2500",
      services: ["Resume Review", "Project Guidance", "Interview Prep", "Career Counseling"],
    },
    {
      id: 3,
      name: "Ankit Verma",
      role: "Full Stack Developer",
      domain: "Web Development",
      image: "https://via.placeholder.com/150",
      price: "₹1500",
      services: ["Code Review", "Portfolio Review", "Job Guidance", "Query Support"],
    },
    {
      id: 4,
      name: "Priya Nair",
      role: "UI/UX Designer",
      domain: "Design",
      image: "https://via.placeholder.com/150",
      price: "₹1800",
      services: ["Portfolio Review", "Design Feedback", "Resume Check"],
    },
    {
      id: 5,
      name: "Karan Mehta",
      role: "Backend Developer",
      domain: "Node.js",
      image: "https://via.placeholder.com/150",
      price: "₹2000",
      services: ["Code Review", "Project Guidance", "Interview Prep"],
    },
    {
      id: 6,
      name: "Ananya Singh",
      role: "Data Analyst",
      domain: "Data Analytics",
      image: "https://via.placeholder.com/150",
      price: "₹2200",
      services: ["Resume Check", "Portfolio Review", "Career Guidance"],
    },
  ];

  const [selectedMentor, setSelectedMentor] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("All");

  const domains = ["All", ...new Set(mentors.map((m) => m.domain))];

  const filteredMentors = mentors.filter(
    (mentor) =>
      (mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mentor.role.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (selectedDomain === "All" || mentor.domain === selectedDomain)
  );

  const recommendedMentors = mentors.slice(0, 3); // first 3 recommended

  if (selectedMentor) {
    return (
      <div className="container mt-5">
        <button
          className="btn btn-outline-primary mb-4 shadow-sm"
          onClick={() => setSelectedMentor(null)}
        >
          ← Back to Mentors
        </button>
        <div className="card shadow-lg rounded-4 p-4 border-0">
          <div className="row align-items-center">
            <div className="col-md-4 text-center">
              <img
                src={selectedMentor.image}
                alt={selectedMentor.name}
                className="img-fluid rounded-circle shadow mb-3"
                style={{ width: "160px", height: "160px", objectFit: "cover" }}
              />
              <h4 className="fw-bold">{selectedMentor.name}</h4>
              <p className="text-muted">{selectedMentor.role}</p>
              <span className="badge bg-gradient rounded-pill bg-primary mb-2">
                {selectedMentor.domain}
              </span>
              <h5 className="text-success mt-3">{selectedMentor.price}</h5>
            </div>
            <div className="col-md-8">
              <h5 className="fw-bold mb-3">Services Offered</h5>
              <ul className="list-group list-group-flush mb-3">
                {selectedMentor.services.map((service, idx) => (
                  <li key={idx} className="list-group-item border-0 p-2">
                    ✅ {service}
                  </li>
                ))}
              </ul>
              <button className="btn btn-success btn-lg w-100 shadow-sm">
                Book Session
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center text-white rounded-3 shadow-sm p-4 mb-4 bg-primary">
        Mentorships
      </h2>

      {/* Recommended Mentors */}
      <h4 className="mb-3 fw-bold">✨ Recommended Mentors</h4>
      <div className="row mb-5">
        {recommendedMentors.map((mentor) => (
          <div key={mentor.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm rounded-4 border-0 mentor-card hover-scale">
              <img
                src={mentor.image}
                className="card-img-top rounded-top"
                alt={mentor.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="fw-bold">{mentor.name}</h5>
                <p className="text-muted">{mentor.role}</p>
                <span className="badge bg-gradient rounded-pill bg-info text-dark mb-2">
                  {mentor.domain}
                </span>
                <h6 className="text-success">{mentor.price}</h6>
                <button
                  className="btn btn-warning w-100 mt-2 shadow-sm"
                  onClick={() => setSelectedMentor(mentor)}
                >
                  View Profile
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Search & Filter */}
      <div className="d-flex justify-content-center mb-4 gap-3 flex-wrap">
        <input
          type="text"
          className="form-control w-50 shadow-sm"
          placeholder="🔍 Search by name or role..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <select
          className="form-select w-auto shadow-sm"
          value={selectedDomain}
          onChange={(e) => setSelectedDomain(e.target.value)}
        >
          {domains.map((domain, idx) => (
            <option key={idx} value={domain}>
              {domain}
            </option>
          ))}
        </select>
      </div>

      {/* All Mentors */}
      <h4 className="mb-3 fw-bold">📌 All Mentors</h4>
      <div className="row">
        {filteredMentors.length > 0 ? (
          filteredMentors.map((mentor) => (
            <div key={mentor.id} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm rounded-4 border-0 mentor-card hover-scale">
                <img
                  src={mentor.image}
                  className="card-img-top rounded-top"
                  alt={mentor.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="fw-bold">{mentor.name}</h5>
                  <p className="text-muted">{mentor.role}</p>
                  <span className="badge bg-gradient rounded-pill bg-info text-dark mb-2">
                    {mentor.domain}
                  </span>
                  <h6 className="text-success">{mentor.price}</h6>
                  <button
                    className="btn btn-primary w-100 mt-2 shadow-sm"
                    onClick={() => setSelectedMentor(mentor)}
                  >
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center mt-4 text-muted">No mentors found.</p>
        )}
      </div>

      {/* Hover scale effect CSS */}
      <style>{`
        .hover-scale:hover {
          transform: scale(1.05);
          transition: transform 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default MentorshipPage;
