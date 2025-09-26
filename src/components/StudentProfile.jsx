import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/StudentProfile.css";

// Import student images
import student1 from "../assets/101.jpg";
import student2 from "../assets/102.jpg";
import student3 from "../assets/103.jpg";
import student4 from "../assets/101.jpg";
// Placeholder cover images (add real ones to assets, e.g., campus photos)
import cover1 from "../assets/101.jpg";
import cover2 from "../assets/101.jpg";
import cover3 from "../assets/101.jpg";
import cover4 from "../assets/101.jpg";

const studentsData = [
  {
    id: "1",
    name: "Aman Sharma",
    img: student1,
    coverImg: cover1,
    headline: "Aspiring AI Engineer | Passionate about Machine Learning",
    department: "Computer Science",
    joiningYear: 2023,
    currentProgram: "B.Tech in Computer Science",
    expectedGraduation: "2027",
    gpa: "8.7/10",
    bio: "I'm a second-year Computer Science student with a keen interest in AI and web technologies. I enjoy building innovative projects and participating in hackathons. My goal is to work in AI research after graduation. Let's connect to discuss tech trends!",
    projects: [
      {
        title: "AI Chatbot for Campus Assistance",
        duration: "2024",
        description: "Developed a Python-based chatbot using NLP to help students with queries, integrated with Telegram API. Reduced response time by 50% in testing."
      },
      {
        title: "Personal Portfolio Website",
        duration: "2023",
        description: "Built a responsive website using React and Node.js, showcasing my projects and skills."
      }
    ],
    skills: [
      { name: "Python", level: "Advanced" },
      { name: "JavaScript", level: "Intermediate" },
      { name: "Machine Learning", level: "Beginner" },
      { name: "React", level: "Intermediate" },
      { name: "SQL", level: "Beginner" }
    ],
    interests: ["AI", "Web Development", "Cybersecurity"],
    clubs: ["Coding Club", "AI Society", "Hackathon Team"],
    aspirations: "Pursue a Master's in AI at a top university and contribute to ethical AI development.",
    contact: { email: "aman.sharma@university.edu", phone: "+91-9876543210" },
    socials: { linkedin: "https://linkedin.com/in/amansharma", github: "https://github.com/amansharma", twitter: "https://twitter.com/amansharma" },
  },
  {
    id: "2",
    name: "Neha Verma",
    img: student2,
    coverImg: cover2,
    headline: "Electronics Enthusiast | Innovating with IoT and Robotics",
    department: "Electronics",
    joiningYear: 2024,
    currentProgram: "B.Tech in Electronics Engineering",
    expectedGraduation: "2028",
    gpa: "8.9/10",
    bio: "First-year Electronics student fascinated by robotics and IoT. I tinker with Arduino projects in my free time and aim to design smart devices. Excited about collaborating on tech for social good!",
    projects: [
      {
        title: "Smart Home IoT System",
        duration: "2024",
        description: "Created an ESP32-based system for home automation, controlling lights and sensors via a mobile app. Used MQTT protocol for real-time communication."
      }
    ],
    skills: [
      { name: "Arduino", level: "Intermediate" },
      { name: "IoT Protocols", level: "Beginner" },
      { name: "Embedded C", level: "Advanced" },
      { name: "MATLAB", level: "Intermediate" },
      { name: "Robotics", level: "Beginner" }
    ],
    interests: ["Robotics", "IoT", "Embedded Systems"],
    clubs: ["Robotics Club", "Electronics Society"],
    aspirations: "Develop sustainable IoT solutions for agriculture and join a robotics startup.",
    contact: { email: "neha.verma@university.edu", phone: "+91-9123456789" },
    socials: { linkedin: "https://linkedin.com/in/nehaverma", github: "https://github.com/nehaverma", twitter: "https://twitter.com/nehaverma" },
  },
  {
    id: "3",
    name: "Rohit Singh",
    img: student3,
    coverImg: cover3,
    headline: "Mechanical Engineering Student | Designing the Future of Mobility",
    department: "Mechanical",
    joiningYear: 2022,
    currentProgram: "B.Tech in Mechanical Engineering",
    expectedGraduation: "2026",
    gpa: "8.2/10",
    bio: "Third-year Mechanical student with a love for automobile design and 3D printing. I prototype ideas using CAD software and participate in design challenges. Passionate about sustainable engineering!",
    projects: [
      {
        title: "Electric Vehicle Prototype",
        duration: "2023-2024",
        description: "Designed and 3D-printed a mini EV model using SolidWorks, focusing on aerodynamics and battery efficiency. Presented at university tech fest."
      },
      {
        title: "Thermodynamic Heat Exchanger",
        duration: "2022",
        description: "Simulated and built a compact heat exchanger for industrial applications using ANSYS."
      }
    ],
    skills: [
      { name: "SolidWorks", level: "Advanced" },
      { name: "3D Printing", level: "Intermediate" },
      { name: "ANSYS", level: "Beginner" },
      { name: "AutoCAD", level: "Intermediate" },
      { name: "Thermodynamics", level: "Advanced" }
    ],
    interests: ["Automobile Design", "3D Printing", "Thermodynamics"],
    clubs: ["Mechanical Design Club", "SAE Chapter", "Innovation Lab"],
    aspirations: "Work in automotive R&D at companies like Tesla or Tata Motors.",
    contact: { email: "rohit.singh@university.edu", phone: "+91-9988776655" },
    socials: { linkedin: "https://linkedin.com/in/rohitsingh", github: "https://github.com/rohitsingh", twitter: "https://twitter.com/rohitsingh" },
  },
  {
    id: "4",
    name: "Priya Singh",
    img: student4,
    coverImg: cover4,
    headline: "Biotechnology Student | Exploring Genetics and Research",
    department: "Biotechnology",
    joiningYear: 2025,
    currentProgram: "B.Tech in Biotechnology",
    expectedGraduation: "2029",
    gpa: "9.1/10",
    bio: "Incoming Biotechnology student eager to dive into genetics and bioinformatics. I volunteer in labs and read about CRISPR tech. Dreaming of a career in biotech research!",
    projects: [
      {
        title: "Basic DNA Sequencing Analysis",
        duration: "2025 (Planned)",
        description: "Will analyze genetic data using Python and bioinformatics tools like Biopython for a semester project."
      }
    ],
    skills: [
      { name: "Bioinformatics", level: "Beginner" },
      { name: "Microbiology", level: "Intermediate" },
      { name: "Python for Biology", level: "Beginner" },
      { name: "Lab Techniques", level: "Beginner" },
      { name: "Genetics", level: "Advanced" }
    ],
    interests: ["Genetics", "Bioinformatics", "Microbiology"],
    clubs: ["Biotech Society", "Research Club"],
    aspirations: "Pursue PhD in Genomics and contribute to personalized medicine.",
    contact: { email: "priya.singh@university.edu", phone: "+91-9765432109" },
    socials: { linkedin: "https://linkedin.com/in/priyasingh", github: "https://github.com/priyasingh", twitter: "https://twitter.com/priyasingh" },
  },
];

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

export default function StudentProfile() {
  const { id } = useParams();
  const navigate = useNavigate();

  const student = studentsData.find((s) => s.id === id);

  if (!student) {
    return <div className="container py-5">Student not found.</div>;
  }

  const currentYear = calculateCurrentYear(student.joiningYear);

  return (
    <div className="student-profile-page py-4">
      <div className="container">
        <button className="btn btn-link mb-3" onClick={() => navigate(-1)}>
          ← Go Back
        </button>
        <div className="row">
          {/* Main Content */}
          <div className="col-lg-8">
            {/* Profile Header */}
            <div className="profile-header mb-4">
              <div className="cover-photo" style={{ backgroundImage: `url(${student.coverImg})` }}>
                <div className="profile-overlay">
                  <img src={student.img} alt={student.name} className="profile-avatar" />
                </div>
              </div>
              <div className="profile-info p-4">
                <h1 className="mb-1">{student.name}</h1>
                <p className="headline mb-2">{student.headline}</p>
                <p className="current-role mb-1">
                  <i className="bi bi-mortarboard me-2"></i>{student.department} | {currentYear} {student.currentProgram}
                </p>
                <p className="location mb-3">
                  <i className="bi bi-geo-alt me-2"></i>Expected Graduation: {student.expectedGraduation}
                </p>
                <div className="social-links mb-3">
                  <a href={student.socials.linkedin} target="_blank" rel="noopener noreferrer" className="me-3">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href={student.socials.github} target="_blank" rel="noopener noreferrer" className="me-3">
                    <i className="bi bi-github"></i>
                  </a>
                  <a href={student.socials.twitter} target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-twitter"></i>
                  </a>
                </div>
                <div className="action-buttons">
                  <button className="btn btn-primary me-2">Connect</button>
                  <button className="btn btn-outline-success">Mentor Request</button>
                </div>
              </div>
            </div>

            {/* About Section */}
            <div className="profile-section mb-4">
              <h3 className="section-title mb-3">
                <i className="bi bi-person me-2"></i>About
              </h3>
              <p className="about-text">{student.bio}</p>
            </div>

            {/* Projects Section */}
            <div className="profile-section mb-4">
              <h3 className="section-title mb-3">
                <i className="bi bi-code-slash me-2"></i>Projects
              </h3>
              <div className="projects-timeline">
                {student.projects.map((proj, idx) => (
                  <div className="project-card mb-4" key={idx}>
                    <div className="d-flex justify-content-between align-items-start">
                      <div>
                        <h5 className="title">{proj.title}</h5>
                        <p className="duration mb-2">{proj.duration}</p>
                        <p className="description">{proj.description}</p>
                      </div>
                      <div className="timeline-dot"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div className="profile-section mb-4">
              <h3 className="section-title mb-3">
                <i className="bi bi-mortarboard me-2"></i>Education
              </h3>
              <div className="education-card p-4">
                <h5>{student.currentProgram}</h5>
                <p className="institution mb-1"><strong>{student.department} Department</strong> &middot; {currentYear}</p>
                <p className="gpa">GPA: {student.gpa} &middot; Expected Graduation: {student.expectedGraduation}</p>
              </div>
            </div>

            {/* Skills Section */}
            <div className="profile-section mb-4">
              <h3 className="section-title mb-3">
                <i className="bi bi-stars me-2"></i>Skills
              </h3>
              <div className="skills-tags">
                {student.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">
                    {skill.name} <small className="level">({skill.level})</small>
                  </span>
                ))}
              </div>
            </div>

            {/* Interests & Clubs Section */}
            <div className="profile-section mb-4">
              <h3 className="section-title mb-3">
                <i className="bi bi-heart me-2"></i>Interests & Extracurriculars
              </h3>
              <div className="interests-section">
                <div className="interests-tags mb-3">
                  {student.interests.map((interest, idx) => (
                    <span key={idx} className="interest-tag">{interest}</span>
                  ))}
                </div>
                <div className="clubs-list">
                  <strong>Clubs:</strong> {student.clubs.join(", ")}
                </div>
              </div>
            </div>

            {/* Aspirations Section */}
            <div className="profile-section">
              <h3 className="section-title mb-3">
                <i className="bi bi-rocket-takeoff me-2"></i>Career Aspirations
              </h3>
              <p className="aspirations-text">{student.aspirations}</p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            <div className="sidebar-card p-4 mb-4">
              <h5>Quick Stats</h5>
              <ul className="list-unstyled">
                <li><i className="bi bi-calendar me-2"></i>{currentYear}</li>
                <li><i className="bi bi-trophy me-2"></i>GPA: {student.gpa}</li>
                <li><i className="bi bi-people me-2"></i>Clubs: {student.clubs.length}</li>
              </ul>
            </div>

            <div className="sidebar-card p-4 mb-4">
              <h5>Contact Info</h5>
              <p><i className="bi bi-envelope me-2"></i>{student.contact.email}</p>
              <p><i className="bi bi-telephone me-2"></i>{student.contact.phone}</p>
            </div>

            <div className="sidebar-card p-4">
              <h5>Recommendations</h5>
              <p className="text-muted small">No recommendations yet. Recommend this student!</p>
              <button className="btn btn-outline-primary btn-sm">Recommend</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
