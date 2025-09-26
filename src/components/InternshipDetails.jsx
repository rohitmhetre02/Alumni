// src/pages/InternshipDetails.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";

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

export default function InternshipDetails() {
  const { id } = useParams();
  const intern = internships.find((i) => i.id === parseInt(id));

  if (!intern) return <p className="text-center mt-5">Internship not found.</p>;

  return (
    <div className="container py-5">
      <Link to="/internships" className="btn btn-outline-primary mb-4">
        ← Back to Internships
      </Link>

      <div className="card shadow-sm p-4">
        <div className="d-flex align-items-center mb-4">
          <img
            src={intern.image}
            alt={intern.company}
            className="me-3 rounded"
            style={{ width: "80px", height: "80px", objectFit: "cover" }}
          />
          <div>
            <h2>{intern.title}</h2>
            <h5 className="text-muted">{intern.company}</h5>
            <p><strong>Location:</strong> {intern.location}</p>
            <p><strong>Domain:</strong> {intern.domain}</p>
            <p><strong>Duration:</strong> {intern.duration}</p>
            <p><strong>Stipend:</strong> {intern.stipend}</p>
          </div>
        </div>

        <div className="mb-3">
          <h5>Description</h5>
          <p>{intern.description}</p>
        </div>

        <div className="mb-3">
          <h5>Skills Required</h5>
          <ul>
            {intern.skills.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="mb-3">
          <h5>Selection Process</h5>
          <p>{intern.selectionProcess}</p>
        </div>

        <a
          href={intern.link}
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
