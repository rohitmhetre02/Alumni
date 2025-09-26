// src/pages/JobDetails.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";

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

export default function JobDetails() {
  const { id } = useParams();
  const job = jobs.find((j) => j.id === parseInt(id));

  if (!job) return <p className="text-center mt-5">Job not found.</p>;

  return (
    <div className="container py-5">
      <Link to="/jobs" className="btn btn-outline-primary mb-4">
        ← Back to Jobs
      </Link>

      <div className="card shadow-sm p-4">
        <div className="d-flex align-items-center mb-4">
          <img
            src={job.image}
            alt={job.company}
            className="me-3 rounded"
            style={{ width: "80px", height: "80px", objectFit: "cover" }}
          />
          <div>
            <h2>{job.title}</h2>
            <h5 className="text-muted">{job.company}</h5>
            <p>
              <strong>Location:</strong> {job.location}
            </p>
            <p>
              <strong>Domain:</strong> {job.domain}
            </p>
          </div>
        </div>

        <div className="mb-3">
          <h5>Description</h5>
          <p>{job.description}</p>
        </div>

        <div className="mb-3">
          <h5>Skills Required</h5>
          <ul>
            {job.skills.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="mb-3">
          <h5>Selection Process</h5>
          <p>{job.selectionProcess}</p>
        </div>

        <a
          href={job.link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
}
