// src/pages/AlumniDirectory.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/AlumniDirectory.css";

import student1 from "../assets/101.jpg";
import student2 from "../assets/102.jpg";
import student3 from "../assets/103.jpg";

// Alumni data
const alumniData = [
  {
    id: 1,
    name: "Priya Sharma",
    img: student1,
    title: "Data Scientist",
    company: "Flipkart",
    location: "Bangalore, Karnataka",
    education: "Data Science, Class of 2019",
    industry: "E-commerce",
    skills: ["Python", "Machine Learning", "SQL", "Tableau", "Power BI"],
    achievement: "Developed an AI model that improved product recommendations by 30%.",
    match: 66,
    socials: { linkedin: "#", github: "#", twitter: "#" },
  },
  {
    id: 2,
    name: "Rahul Mehta",
    img: student2,
    title: "Lead Software Engineer",
    company: "Google",
    location: "Hyderabad, Telangana",
    education: "Computer Science, Class of 2015",
    industry: "Tech",
    skills: ["Java", "Kubernetes", "GCP", "Microservices"],
    achievement: "Led a team to launch a new feature for Google Maps, used by millions.",
    match: 58,
    socials: { linkedin: "#", github: "#", twitter: "#" },
  },
  {
    id: 3,
    name: "Aisha Khan",
    img: student3,
    title: "UX/UI Designer",
    company: "Swiggy",
    location: "Bangalore, Karnataka",
    education: "Design, Class of 2018",
    industry: "Food Tech",
    skills: ["Figma", "Adobe XD", "User Research", "Prototyping"],
    achievement: "Redesigned the checkout flow, resulting in a 15% increase in order conversion.",
    match: 45,
    socials: { linkedin: "#", github: "#", twitter: "#" },
  },
];

export default function AlumniDirectory() {
  const [search, setSearch] = useState("");

  // Filter alumni based on search
  const filteredAlumni = alumniData.filter((alumni) => {
    const term = search.toLowerCase();
    return (
      alumni.name.toLowerCase().includes(term) ||
      alumni.title.toLowerCase().includes(term) ||
      alumni.company.toLowerCase().includes(term) ||
      alumni.location.toLowerCase().includes(term) ||
      alumni.education.toLowerCase().includes(term) ||
      alumni.industry.toLowerCase().includes(term) ||
      alumni.skills.some((skill) => skill.toLowerCase().includes(term))
    );
  });

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">🎓 Alumni Directory</h2>
        <p className="text-center text-muted mb-5">
          Explore our alumni network. Search by name, profession, or graduation year.
        </p>

        {/* Search bar */}
        <div className="row justify-content-center mb-4">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control search-input"
              placeholder="Search alumni by name, skill, company, location..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Alumni Grid */}
        <div className="row g-4">
          {filteredAlumni.length > 0 ? (
            filteredAlumni.map((alumni) => (
              <div className="col-lg-4 col-md-6" key={alumni.id}>
                <div className="alumni-card-new">
                  {/* Card Header */}
                  <div className="card-header-new">
                    <div className="profile-image-container">
                      <img
                        src={alumni.img}
                        alt={alumni.name}
                        className="profile-image"
                      />
                    </div>
                    <div className="profile-info">
                      <h5 className="profile-name">{alumni.name}</h5>
                      <p className="profile-title">{alumni.title}</p>
                      <p className="profile-company">{alumni.company}</p>
                    </div>
                    <div className="match-badge">{alumni.match}% Match</div>
                  </div>

                  {/* Card Body */}
                  <div className="card-body-new">
                    <div className="detail-item">
                      <i className="bi bi-geo-alt-fill"></i>
                      <span>{alumni.location}</span>
                    </div>
                    <div className="detail-item">
                      <i className="bi bi-mortarboard-fill"></i>
                      <span>{alumni.education}</span>
                    </div>
                    <div className="detail-item">
                      <i className="bi bi-briefcase-fill"></i>
                      <span>{alumni.industry}</span>
                    </div>

                    <div className="skills-section">
                      <h6>Skills</h6>
                      <div className="skills-tags">
                        {alumni.skills.slice(0, 4).map((skill, i) => (
                          <span key={i} className="skill-tag">
                            {skill}
                          </span>
                        ))}
                        {alumni.skills.length > 4 && (
                          <span className="skill-tag more-tag">
                            +{alumni.skills.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="achievement-section">
                      <h6>Recent Achievement</h6>
                      <p>{alumni.achievement}</p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="card-footer-new d-flex justify-content-between align-items-center">
                    <div className="social-links">
                      <a
                        href={alumni.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="bi bi-linkedin"></i>
                      </a>
                      <a
                        href={alumni.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="bi bi-github"></i>
                      </a>
                      <a
                        href={alumni.socials.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="bi bi-twitter"></i>
                      </a>
                    </div>

                    {/* View Profile button */}
                    <Link
                      to={`/alumni/${alumni.id}`}
                      className="connect-button"
                    >
                      View Profile
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-muted col-12">No alumni found.</p>
          )}
        </div>
      </div>
    </section>
  );
}
