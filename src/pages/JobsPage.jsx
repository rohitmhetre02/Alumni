// src/pages/JobsPage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Tech Solutions",
    location: "Mumbai, India",
    domain: "Web Development",
    description: "Work on React.js projects and build scalable UI.",
    skills: ["React.js", "JavaScript", "CSS", "HTML", "Bootstrap"],
    selectionProcess: "Online test → Technical interview → HR interview",
    link: "https://example.com/apply/frontend",
    image: "https://via.placeholder.com/100?text=Tech+Solutions",
  },
  {
    id: 2,
    title: "Data Analyst",
    company: "DataCorp",
    location: "Remote",
    domain: "Data Analytics",
    description: "Analyze business data and prepare insights.",
    skills: ["SQL", "Python", "Excel", "Tableau"],
    selectionProcess: "Resume screening → Case study → Manager round",
    link: "https://example.com/apply/analyst",
    image: "https://via.placeholder.com/100?text=DataCorp",
  },
  {
    id: 3,
    title: "Backend Engineer",
    company: "CloudWorks",
    location: "Bengaluru, India",
    domain: "Backend Development",
    description: "Build APIs and manage scalable backend systems.",
    skills: ["Node.js", "Express", "MongoDB", "AWS", "Docker"],
    selectionProcess: "Coding round → System design → HR interview",
    link: "https://example.com/apply/backend",
    image: "https://via.placeholder.com/100?text=CloudWorks",
  },
  {
    id: 4,
    title: "UI/UX Designer",
    company: "DesignHub",
    location: "Delhi, India",
    domain: "Design",
    description: "Create wireframes, prototypes, and improve UX flows.",
    skills: ["Figma", "Adobe XD", "User Research", "Prototyping"],
    selectionProcess: "Portfolio review → Design challenge → HR round",
    link: "https://example.com/apply/uiux",
    image: "https://via.placeholder.com/100?text=DesignHub",
  },
];

export default function JobsPage() {
  const [search, setSearch] = useState("");
  const [filterDomain, setFilterDomain] = useState("All");
  const [filterLocation, setFilterLocation] = useState("All");

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase());
    const matchesDomain = filterDomain === "All" || job.domain === filterDomain;
    const matchesLocation =
      filterLocation === "All" || job.location === filterLocation;
    return matchesSearch && matchesDomain && matchesLocation;
  });

  // First 3 jobs as recommendations
  const recommendedJobs = filteredJobs.slice(0, 3);

  return (
    <div className="container py-5">
      <h2 className="fw-bold text-center mb-5">💼 Explore Opportunities</h2>

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
            <option value="Data Analytics">Data Analytics</option>
            <option value="Backend Development">Backend Development</option>
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
            <option value="Mumbai, India">Mumbai, India</option>
            <option value="Remote">Remote</option>
            <option value="Bengaluru, India">Bengaluru, India</option>
            <option value="Delhi, India">Delhi, India</option>
          </select>
        </div>
      </div>

      {/* Recommended Section */}
      {recommendedJobs.length > 0 && (
        <>
          <h3 className="mb-4 text-primary fw-bold">✨ Recommended for You</h3>
          <div className="row g-4 mb-5">
            {recommendedJobs.map((job) => (
              <div className="col-md-4" key={job.id}>
                <div className="card shadow-lg border-0 h-100 job-card hover-card">
                  <div className="card-body text-center">
                    <img
                      src={job.image}
                      alt={job.company}
                      className="rounded-circle mb-3"
                      style={{ width: "80px", height: "80px" }}
                    />
                    <h5 className="fw-bold">{job.title}</h5>
                    <p className="text-muted">{job.company}</p>
                    <span className="badge bg-info text-dark me-2">
                      {job.domain}
                    </span>
                    <span className="badge bg-secondary">{job.location}</span>
                    <p className="mt-3 small">{job.description}</p>
                    <Link to={`/jobs/${job.id}`} className="btn btn-primary btn-sm mt-2">
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* All Jobs */}
      <h3 className="mb-4 fw-bold">📋 All Jobs</h3>
      <div className="row g-4">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div className="col-md-6" key={job.id}>
              <Link
                to={`/jobs/${job.id}`}
                className="text-decoration-none text-dark"
              >
                <div className="card shadow-sm h-100 hover-card border-0">
                  <div className="d-flex align-items-center p-3">
                    <img
                      src={job.image}
                      alt={job.company}
                      className="me-3 rounded"
                      style={{
                        width: "60px",
                        height: "60px",
                        objectFit: "cover",
                      }}
                    />
                    <div>
                      <h5 className="fw-bold">{job.title}</h5>
                      <h6 className="text-muted">{job.company}</h6>
                    </div>
                  </div>
                  <div className="card-body pt-0">
                    <p className="mb-1">
                      <strong>📍 Location:</strong> {job.location}
                    </p>
                    <p className="mb-1">
                      <strong>🌐 Domain:</strong> {job.domain}
                    </p>
                    <p className="small text-muted">{job.description}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center text-muted col-12">No jobs found.</p>
        )}
      </div>
    </div>
  );
}
