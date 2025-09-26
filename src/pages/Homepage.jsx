import React from "react";
import { Link } from "react-router-dom";
import student1 from "../assets/101.jpg";
import student2 from "../assets/102.jpg";
import student3 from "../assets/103.jpg";
import student4 from "../assets/101.jpg"; // Reused for consistency
import "../styles/HomePage.css";

const students = [student1, student2, student3, student4];

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <header className="text-center py-5 hero-section">
        <div className="container">
          <h1 className="fw-bold display-4">
            Welcome to <span className="text-primary">Your Alumni Network</span>
          </h1>
          <p className="lead text-muted mt-3">
            Reconnect, Collaborate, and Celebrate Together.
          </p>

          {/* Join Now Button */}
          <div className="d-flex justify-content-center mt-4">
            <Link to="/login">
              <button className="btn btn-primary px-5 py-3 btn-lg shadow hero-btn">
                Join Now
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Students Showcase Section */}
      <section className="py-5 bg-light-student">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">Meet Our Alumni</h2>
          <div className="row justify-content-center text-center">
            {students.map((img, i) => (
              <div className="col-md-3 col-6 mb-4" key={i}>
                <div className={`student-box student-${i}`}>
                  <img src={img} alt={`Alumni Student ${i + 1}`} className="img-fluid" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Achievements Section */}
      <section className="py-5 achievements-section">
        <div className="container text-center">
          <h2 className="fw-bold mb-5">Alumni Achievements</h2>
          <div className="row">
            <div className="col-md-3 mb-4">
              <div className="achievement-card bg-yellow">
                <h3 className="fw-bold display-6 text-dark">60,000+</h3>
                <p className="text-muted">Alumni</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="achievement-card bg-green">
                <h3 className="fw-bold display-6 text-dark">150+</h3>
                <p className="text-muted">Global Chapters</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="achievement-card bg-blue">
                <h3 className="fw-bold display-6 text-dark">7,500+</h3>
                <p className="text-muted">Mentorships</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="achievement-card bg-pink">
                <h3 className="fw-bold display-6 text-dark">1,200+</h3>
                <p className="text-muted">Events & Reunions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5 bg-features">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">What We Provide</h2>
          <p className="text-center text-muted mb-5">
            Discover the core benefits of our Alumni Community
          </p>

          <div className="features-box p-4">
            <div className="row g-4">
              <div className="col-md-4">
                <ul className="features-list">
                  <li>🎓 Mentorship Hub</li>
                  <li>📰 News</li>
                  <li>🏆 Stories & Achievements</li>
                  <li>💼 Jobs / Internships</li>
                  <li>🤖 AI-based Profile Analysis</li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul className="features-list">
                  <li>🤝 Connection Requests & Messaging</li>
                  <li>🎉 Events</li>
                  <li>📷 Gallery</li>
                  <li>💖 Donations & Campaigns</li>
                  <li>🗺️ Alumni Map</li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul className="features-list">
                  <li>🔗 Referral Requests</li>
                  <li>💡 AI Recommendations → jobs, internships, mentors</li>
                  <li>🏫 Alumni-led Workshops</li>
                  <li>🏅 Points & Rewards System</li>
                  <li>🤖 AI Career Assistant (Chatbot)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-5 text-center bg-cta">
        <div className="container">
          <h2 className="fw-bold mb-3">Ready to Reconnect and Grow?</h2>
          <h4 className="mb-4">Join Our Alumni Network</h4>
          <p className="text-muted mb-4">
            Discover the power of your alumni community today!
          </p>
          <Link to="/login">
            <button className="btn btn-primary btn-lg hero-btn px-5 py-3">Join Now</button>
          </Link>
        </div>
      </section>

      {/* Alumni Testimonials Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">What Our Alumni Say</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm h-100 border-0 testimonial-card">
                <div className="card-body text-center">
                  <img src={student1} alt="Rahul Mehta" className="testimonial-img mb-3" />
                  <p className="fst-italic">
                    "The alumni community opened doors I never imagined. The support and networking opportunities have been incredible."
                  </p>
                  <h6 className="fw-bold mt-3">Rahul Mehta</h6>
                  <small className="text-muted">Class of 2012</small>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm h-100 border-0 testimonial-card">
                <div className="card-body text-center">
                  <img src={student2} alt="Priya Nair" className="testimonial-img mb-3" />
                  <p className="fst-italic">
                    "Through this platform, I reconnected with classmates and discovered valuable career opportunities in my field."
                  </p>
                  <h6 className="fw-bold mt-3">Priya Nair</h6>
                  <small className="text-muted">Class of 2016</small>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm h-100 border-0 testimonial-card">
                <div className="card-body text-center">
                  <img src={student3} alt="Arjun Patel" className="testimonial-img mb-3" />
                  <p className="fst-italic">
                    "The mentorship program gave me confidence and guidance during my career transition. It truly feels like a family."
                  </p>
                  <h6 className="fw-bold mt-3">Arjun Patel</h6>
                  <small className="text-muted">Class of 2019</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
