import React from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/AlumniProfile.css";
import student1 from "../assets/101.jpg";
import student2 from "../assets/102.jpg";
import student3 from "../assets/103.jpg";
// Placeholder cover images (add real ones to assets)
import cover1 from "../assets/101.jpg"; 
import cover2 from "../assets/102.jpg";
import cover3 from "../assets/103.jpg";

const alumniData = [
  {
    id: 1,
    name: "Priya Sharma",
    img: student1,
    coverImg: cover1,
    headline: "Data Scientist passionate about AI and machine learning | Driving data-driven decisions",
    title: "Data Scientist",
    company: "Flipkart",
    location: "Bangalore, Karnataka, India",
    about: "With a strong background in data science and AI, I specialize in building predictive models that enhance business outcomes. At Flipkart, I've led initiatives that optimize e-commerce experiences. Outside work, I enjoy mentoring aspiring data professionals and contributing to open-source ML projects. Let's connect to discuss innovative tech solutions!",
    yearsExperience: 5,
    connections: 500,
    contact: { email: "priya.sharma@email.com", phone: "+91-9876543210" },
    education: [
      { degree: "M.Tech in Data Science", year: "2019", institution: "IIT Delhi", gpa: "8.5/10", field: "AI & ML" }
    ],
    experience: [
      {
        role: "Data Scientist",
        company: "Flipkart",
        duration: "2020 - Present",
        location: "Bangalore",
        description: "Develop AI models for product recommendations, resulting in 30% uplift in user engagement. Collaborate with cross-functional teams on big data analytics using Python and Spark."
      },
      {
        role: "Data Analyst",
        company: "Infosys",
        duration: "2019 - 2020",
        location: "Hyderabad",
        description: "Analyzed customer data to inform business strategies, creating dashboards with Tableau that reduced reporting time by 40%."
      }
    ],
    skills: [
      { name: "Python", endorsements: 25 },
      { name: "Machine Learning", endorsements: 20 },
      { name: "SQL", endorsements: 18 },
      { name: "Tableau", endorsements: 15 },
      { name: "Power BI", endorsements: 12 }
    ],
    achievements: [
      "Developed an AI model that improved product recommendations by 30%.",
      "Published paper on 'Ethical AI in E-commerce' in IEEE Conference 2022.",
      "Won Kaggle Competition for Predictive Modeling (Top 5%)."
    ],
    interests: ["AI Ethics", "Open Source Contributions", "Mentoring", "Hiking"],
    socials: { linkedin: "https://linkedin.com/in/priyasharma", github: "https://github.com/priyasharma", twitter: "https://twitter.com/priyasharma" },
  },
  {
    id: 2,
    name: "Rahul Mehta",
    img: student2,
    coverImg: cover2,
    headline: "Lead Software Engineer | Building scalable cloud solutions | Tech enthusiast",
    title: "Lead Software Engineer",
    company: "Google",
    location: "Hyderabad, Telangana, India",
    about: "Seasoned software engineer with expertise in cloud architecture and microservices. At Google, I lead teams in developing features for global products like Google Maps. Passionate about DevOps and sustainable tech. Eager to collaborate on innovative projects—reach out!",
    yearsExperience: 9,
    connections: 1200,
    contact: { email: "rahul.mehta@email.com", phone: "+91-9123456789" },
    education: [
      { degree: "B.E. in Computer Science", year: "2015", institution: "BITS Pilani", gpa: "9.2/10", field: "Software Engineering" }
    ],
    experience: [
      {
        role: "Lead Software Engineer",
        company: "Google",
        duration: "2020 - Present",
        location: "Hyderabad",
        description: "Led a 10-member team to launch a new Google Maps feature, serving millions of users daily. Implemented Kubernetes for scalable deployments, reducing latency by 25%."
      },
      {
        role: "Software Engineer",
        company: "Microsoft",
        duration: "2015 - 2020",
        location: "Bangalore",
        description: "Developed backend services for Azure cloud platform, focusing on security and performance optimization."
      }
    ],
    skills: [
      { name: "Java", endorsements: 35 },
      { name: "Kubernetes", endorsements: 28 },
      { name: "GCP", endorsements: 22 },
      { name: "Microservices", endorsements: 20 },
      { name: "Docker", endorsements: 18 }
    ],
    achievements: [
      "Led team to launch Google Maps feature used by millions.",
      "Contributed to open-source Kubernetes project (100+ stars).",
      "Received Google Innovation Award 2023."
    ],
    interests: ["Cloud Computing", "DevOps", "Travel", "Photography"],
    socials: { linkedin: "https://linkedin.com/in/rahulmehta", github: "https://github.com/rahulmehta", twitter: "https://twitter.com/rahulmehta" },
  },
  {
    id: 3,
    name: "Aisha Khan",
    img: student3,
    coverImg: cover3,
    headline: "UX/UI Designer | Creating intuitive digital experiences | Design thinker",
    title: "UX/UI Designer",
    company: "Swiggy",
    location: "Bangalore, Karnataka, India",
    about: "Creative UX/UI designer focused on user-centered design for food-tech apps. At Swiggy, I've redesigned interfaces to boost user satisfaction. I believe in empathy-driven design and continuous learning. Let's design the future together!",
    yearsExperience: 6,
    connections: 800,
    contact: { email: "aisha.khan@email.com", phone: "+91-9988776655" },
    education: [
      { degree: "B.Des in UX/UI", year: "2018", institution: "NID Ahmedabad", gpa: "8.8/10", field: "Interaction Design" }
    ],
    experience: [
      {
        role: "UX/UI Designer",
        company: "Swiggy",
        duration: "2018 - Present",
        location: "Bangalore",
        description: "Redesigned checkout flow, increasing order conversion by 15%. Conducted user research and prototyping with Figma for app updates."
      }
    ],
    skills: [
      { name: "Figma", endorsements: 30 },
      { name: "Adobe XD", endorsements: 25 },
      { name: "User  Research", endorsements: 20 },
      { name: "Prototyping", endorsements: 18 },
      { name: "Sketch", endorsements: 15 }
    ],
    achievements: [
      "Redesigned Swiggy checkout, boosting conversions by 15%.",
      "Awarded 'Best UI Design' at UX India Conference 2021.",
      "Collaborated on 5+ app redesigns with 4.8+ user ratings."
    ],
    interests: ["User  Experience", "Graphic Design", "Yoga", "Reading"],
    socials: { linkedin: "https://linkedin.com/in/aishakhan", github: "https://github.com/aishakhan", twitter: "https://twitter.com/aishakhan" },
  },
];

export default function AlumniProfile() {
  const { id } = useParams();
  const alumni = alumniData.find(a => a.id === parseInt(id));

  if (!alumni) return <p className="text-center mt-5">Alumni not found</p>;

  return (
    <section className="alumni-profile py-4">
      <div className="container">
        <div className="row">
          {/* Main Content */}
          <div className="col-lg-8">
            {/* Profile Header */}
            <div className="profile-header mb-4">
              <div className="cover-photo" style={{ backgroundImage: `url(${alumni.coverImg})` }}>
                <div className="profile-overlay">
                  <img src={alumni.img} alt={alumni.name} className="profile-avatar" />
                </div>
              </div>
              <div className="profile-info p-4">
                <h1 className="mb-1">{alumni.name}</h1>
                <p className="headline mb-2">{alumni.headline}</p>
                <p className="current-role mb-1">
                  <i className="bi bi-briefcase me-2"></i>{alumni.title} at <strong>{alumni.company}</strong>
                </p>
                <p className="location mb-3">
                  <i className="bi bi-geo-alt me-2"></i>{alumni.location}
                </p>
                <div className="social-links mb-3">
                  <a href={alumni.socials.linkedin} target="_blank" rel="noopener noreferrer" className="me-3">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href={alumni.socials.github} target="_blank" rel="noopener noreferrer" className="me-3">
                    <i className="bi bi-github"></i>
                  </a>
                  <a href={alumni.socials.twitter} target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-twitter"></i>
                  </a>
                </div>
                <div className="action-buttons">
                  <Link to="/messages" className="btn btn-primary me-2">Message</Link>
                  <button className="btn btn-outline-secondary">Connect</button>
                </div>
              </div>
            </div>

            {/* About Section */}
            <div className="profile-section mb-4">
              <h3 className="section-title mb-3">
                <i className="bi bi-person me-2"></i>About
              </h3>
              <p className="about-text">{alumni.about}</p>
            </div>

            {/* Experience Section */}
            <div className="profile-section mb-4">
              <h3 className="section-title mb-3">
                <i className="bi bi-briefcase me-2"></i>Experience
              </h3>
              <div className="experience-timeline">
                {alumni.experience.map((exp, idx) => (
                  <div className="experience-card mb-4" key={idx}>
                    <div className="d-flex justify-content-between align-items-start">
                      <div>
                        <h5 className="role">{exp.role}</h5>
                        <p className="company mb-1"><strong>{exp.company}</strong> &middot; {exp.duration}</p>
                        <p className="location mb-2"><i className="bi bi-geo-alt me-1"></i>{exp.location}</p>
                        <p className="description">{exp.description}</p>
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
              {alumni.education.map((edu, idx) => (
                <div className="education-card mb-3" key={idx}>
                  <h5>{edu.degree}</h5>
                  <p className="institution mb-1"><strong>{edu.institution}</strong> &middot; {edu.year}</p>
                  <p className="field">{edu.field} &middot; GPA: {edu.gpa}</p>
                </div>
              ))}
            </div>

            {/* Skills Section */}
            <div className="profile-section mb-4">
              <h3 className="section-title mb-3">
                <i className="bi bi-stars me-2"></i>Skills
              </h3>
              <div className="skills-tags">
                {alumni.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">
                    {skill.name} <small className="endorsements">({skill.endorsements})</small>
                  </span>
                ))}
              </div>
            </div>

            {/* Achievements Section */}
            <div className="profile-section mb-4">
              <h3 className="section-title mb-3">
                <i className="bi bi-trophy me-2"></i>Achievements
              </h3>
              <div className="achievements-list">
                {alumni.achievements.map((ach, idx) => (
                  <div className="achievement-item mb-2" key={idx}>
                    <i className="bi bi-check-circle-fill text-success me-2"></i>{ach}
                  </div>
                ))}
              </div>
            </div>

            {/* Interests Section */}
            <div className="profile-section mb-4">
              <h3 className="section-title mb-3">
                <i className="bi bi-heart me-2"></i>Interests
              </h3>
              <div className="interests-tags">
                {alumni.interests.map((interest, idx) => (
                  <span key={idx} className="interest-tag">{interest}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            <div className="sidebar-card p-4 mb-4">
              <h5>Quick Stats</h5>
              <ul className="list-unstyled">
                <li><i className="bi bi-people me-2"></i>{alumni.connections}+ Connections</li>
                <li><i className="bi bi-clock me-2"></i>{alumni.yearsExperience} Years Experience</li>
              </ul>
            </div>

            <div className="sidebar-card p-4 mb-4">
              <h5>Contact Info</h5>
              <p><i className="bi bi-envelope me-2"></i>{alumni.contact.email}</p>
              <p><i className="bi bi-telephone me-2"></i>{alumni.contact.phone}</p>
            </div>

            <div className="sidebar-card p-4">
              <h5>Recommendations</h5>
              <p className="text-muted small">No recommendations yet. Be the first to recommend {alumni.name}!</p>
              <button className="btn btn-outline-primary btn-sm">Recommend</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
