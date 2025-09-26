// src/pages/StudentDirectory.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/StudentDirectory.css";

import student1 from "../assets/101.jpg";
import student2 from "../assets/102.jpg";
import student3 from "../assets/103.jpg";
import student4 from "../assets/101.jpg";

const calculateCurrentYear = (joiningYear) => {
  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();
  const academicYear = currentMonth < 7 ? currentYear - 1 : currentYear;
  const yearOfStudy = academicYear - joiningYear + 1;
  if (yearOfStudy > 4) return "Graduated";
  if (yearOfStudy <= 0) return "Incoming";
  const suffixes = { 1: "st", 2: "nd", 3: "rd" };
  return `${yearOfStudy}${suffixes[yearOfStudy] || "th"} Year`;
};

const studentsData = [
  {
    id: 1,
    name: "Aman Sharma",
    joiningYear: 2023,
    department: "Computer Science",
    interests: ["AI", "Web Development", "Cybersecurity"],
    img: student1,
  },
  {
    id: 2,
    name: "Neha Verma",
    joiningYear: 2024,
    department: "Electronics",
    interests: ["Robotics", "IoT", "Embedded Systems"],
    img: student2,
  },
  {
    id: 3,
    name: "Rohit Singh",
    joiningYear: 2022,
    department: "Mechanical",
    interests: ["Automobile Design", "3D Printing", "Thermodynamics"],
    img: student3,
  },
  {
    id: 4,
    name: "Priya Singh",
    joiningYear: 2025,
    department: "Biotechnology",
    interests: ["Genetics", "Bioinformatics", "Microbiology"],
    img: student4,
  },
  {
    id: 5,
    name: "Vikram Rathore",
    joiningYear: 2023,
    department: "Civil Engineering",
    interests: ["Structural Analysis", "Urban Planning", "AutoCAD"],
    img: student1,
  },
  {
    id: 6,
    name: "Anjali Deshpande",
    joiningYear: 2024,
    department: "Information Technology",
    interests: ["Cloud Computing", "Data Structures", "DevOps"],
    img: student2,
  },
  {
    id: 7,
    name: "Karan Malhotra",
    joiningYear: 2022,
    department: "Electrical Engineering",
    interests: ["Power Systems", "VHDL", "Control Systems"],
    img: student3,
  },
];

export default function StudentDirectory() {
  const [search, setSearch] = useState("");

  const filteredStudents = studentsData.filter((student) => {
    const searchTerm = search.toLowerCase();
    return (
      student.name.toLowerCase().includes(searchTerm) ||
      student.department.toLowerCase().includes(searchTerm) ||
      calculateCurrentYear(student.joiningYear)
        .toLowerCase()
        .includes(searchTerm) ||
      student.interests.some((interest) =>
        interest.toLowerCase().includes(searchTerm)
      )
    );
  });

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">🎓 Student Directory</h2>
        <div className="row justify-content-center mb-4">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control search-input"
              placeholder="Search by name, department, interest..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="row g-4">
          {filteredStudents.length > 0 ? (
            filteredStudents.map((student) => (
              <div className="col-lg-4 col-md-6" key={student.id}>
                <div className="student-card-modern">
                  <div className="card-header-modern">
                    <img
                      src={student.img}
                      alt={student.name}
                      className="student-image-modern"
                    />
                    <div className="student-info-modern">
                      <h5 className="student-name">{student.name}</h5>
                      <p className="student-department">{student.department}</p>
                    </div>
                  </div>
                  <div className="card-body-modern">
                    <div className="detail-item-modern">
                      <i className="bi bi-calendar-check"></i>
                      <span>
                        {calculateCurrentYear(student.joiningYear)}
                      </span>
                    </div>
                    <div className="interests-section">
                      <h6>Interests</h6>
                      <div className="interests-tags">
                        {student.interests.map((interest, index) => (
                          <span key={index} className="interest-tag">
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="card-footer-modern">
                    <Link to={`/student/${student.id}`}>
                      <button className="profile-button">View Profile</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-muted col-12">No students found.</p>
          )}
        </div>
      </div>
    </section>
  );
}
