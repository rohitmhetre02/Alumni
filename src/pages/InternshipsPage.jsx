// src/pages/InternshipsPage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const internships = [
  {
    id: 1,
    title: "Web Development Intern",
    company: "CodeCrafters",
    location: "Pune, India",
    domain: "Web Development",
    duration: "3 Months",
    stipend: "₹10,000/month",
    description: "Work on HTML, CSS, JavaScript, and React projects.",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap"],
    selectionProcess: "Resume → Technical Task → Interview",
    link: "https://example.com/apply/webdev",
    image: "https://via.placeholder.com/100?text=CodeCrafters",
  },
  {
    id: 2,
    title: "Marketing Intern",
    company: "BrandBoost",
    location: "Remote",
    domain: "Marketing",
    duration: "2 Months",
    stipend: "₹8,000/month",
    description: "Assist with social media campaigns and digital marketing.",
    skills: ["Social Media", "Content Creation", "SEO", "Analytics"],
    selectionProcess: "Resume → Interview",
    link: "https://example.com/apply/marketing",
    image: "https://via.placeholder.com/100?text=BrandBoost",
  },
  {
    id: 3,
    title: "Machine Learning Intern",
    company: "AI Labs",
    location: "Bengaluru, India",
    domain: "Machine Learning",
    duration: "6 Months",
    stipend: "₹15,000/month",
    description: "Work on Python, ML models, and data analysis.",
    skills: ["Python", "ML", "Data Analysis", "TensorFlow", "Pandas"],
    selectionProcess: "Resume → Coding Test → Interview",
    link: "https://example.com/apply/ml",
    image: "https://via.placeholder.com/100?text=AI+Labs",
  },
  {
    id: 4,
    title: "UI/UX Design Intern",
    company: "DesignHub",
    location: "Delhi, India",
    domain: "Design",
    duration: "4 Months",
    stipend: "₹12,000/month",
    description: "Design wireframes, prototypes, and improve user experience.",
    skills: ["Figma", "Adobe XD", "Wireframing", "Prototyping"],
    selectionProcess: "Portfolio → Design Challenge → Interview",
    link: "https://example.com/apply/uiux",
    image: "https://via.placeholder.com/100?text=DesignHub",
  },
];

export default function InternshipsPage() {
  const [search, setSearch] = useState("");
  const [filterDomain, setFilterDomain] = useState("All");
  const [filterLocation, setFilterLocation] = useState("All");

  const filteredInternships = internships.filter((intern) => {
    const matchesSearch =
      intern.title.toLowerCase().includes(search.toLowerCase()) ||
      intern.company.toLowerCase().includes(search.toLowerCase());
    const matchesDomain =
      filterDomain === "All" || intern.domain === filterDomain;
    const matchesLocation =
      filterLocation === "All" || intern.location === filterLocation;
    return matchesSearch && matchesDomain && matchesLocation;
  });

  const recommendedInternships = filteredInternships.slice(0, 2);

  return (
    <div className="container py-5">
      <h2 className="fw-bold text-center mb-5">🎯 Explore Internships</h2>

      {/* Search & Filters */}
      <div className="row mb-5 g-3 justify-content-center">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control shadow-sm"
            placeholder="🔍 Search by title or company..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <select
            className="form-select shadow-sm"
            value={filterDomain}
            onChange={(e) => setFilterDomain(e.target.value)}
          >
            <option value="All">🌐 All Domains</option>
            <option value="Web Development">Web Development</option>
            <option value="Marketing">Marketing</option>
            <option value="Machine Learning">Machine Learning</option>
            <option value="Design">Design</option>
          </select>
        </div>
        <div className="col-md-3">
          <select
            className="form-select shadow-sm"
            value={filterLocation}
            onChange={(e) => setFilterLocation(e.target.value)}
          >
            <option value="All">📍 All Locations</option>
            <option value="Pune, India">Pune, India</option>
            <option value="Remote">Remote</option>
            <option value="Bengaluru, India">Bengaluru, India</option>
            <option value="Delhi, India">Delhi, India</option>
          </select>
        </div>
      </div>

      {/* Recommended Internships */}
      {recommendedInternships.length > 0 && (
        <>
          <h3 className="mb-4 text-success fw-bold">🌟 Recommended Internships</h3>
          <div className="row g-4 mb-5">
            {recommendedInternships.map((intern) => (
              <div className="col-md-6" key={intern.id}>
                <div className="card shadow-lg border-0 h-100 hover-card">
                  <div className="card-body text-center">
                    <img
                      src={intern.image}
                      alt={intern.company}
                      className="rounded-circle mb-3"
                      style={{ width: "80px", height: "80px" }}
                    />
                    <h5 className="fw-bold">{intern.title}</h5>
                    <p className="text-muted">{intern.company}</p>
                    <span className="badge bg-info text-dark me-2">
                      {intern.domain}
                    </span>
                    <span className="badge bg-warning text-dark me-2">
                      {intern.duration}
                    </span>
                    <span className="badge bg-success">{intern.stipend}</span>
                    <p className="mt-3 small">{intern.description}</p>
                    <Link
                      to={`/internships/${intern.id}`}
                      className="btn btn-success btn-sm mt-2"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* All Internships */}
      <h3 className="mb-4 fw-bold">📋 All Internships</h3>
      <div className="row g-4">
        {filteredInternships.length > 0 ? (
          filteredInternships.map((intern) => (
            <div className="col-md-6" key={intern.id}>
              <Link
                to={`/internships/${intern.id}`}
                className="text-decoration-none text-dark"
              >
                <div className="card shadow-sm h-100 hover-card border-0">
                  <div className="d-flex align-items-center p-3">
                    <img
                      src={intern.image}
                      alt={intern.company}
                      className="me-3 rounded"
                      style={{
                        width: "60px",
                        height: "60px",
                        objectFit: "cover",
                      }}
                    />
                    <div>
                      <h5 className="fw-bold">{intern.title}</h5>
                      <h6 className="text-muted">{intern.company}</h6>
                    </div>
                  </div>
                  <div className="card-body pt-0">
                    <p className="mb-1">
                      <strong>📍 Location:</strong> {intern.location}
                    </p>
                    <p className="mb-1">
                      <strong>🌐 Domain:</strong> {intern.domain}
                    </p>
                    <p className="mb-1">
                      <strong>⏳ Duration:</strong> {intern.duration}
                    </p>
                    <p className="mb-1">
                      <strong>💰 Stipend:</strong> {intern.stipend}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center text-muted col-12">No internships found.</p>
        )}
      </div>
    </div>
  );
}
