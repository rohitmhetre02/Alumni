// src/pages/StoriesAchievements.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/StoriesAchievements.css";

import story1 from "../assets/101.jpg";
import story2 from "../assets/102.jpg";
import story3 from "../assets/103.jpg";

const stories = [
  {
    id: 1,
    title: "Placed at Google 🚀",
    author: "Rohit Sharma, CSE 2022",
    full: "Secured a role as Software Engineer at Google after completing the mentorship program and coding workshops. The alumni network provided mock interviews, technical prep sessions, and career advice that made a big difference in cracking Google’s selection process.",
    img: story1,
  },
  {
    id: 2,
    title: "Startup Success 💡",
    author: "Neha Gupta, MBA 2020",
    full: "Founded a fintech startup that recently raised $2M in seed funding. The Alumni Community helped Neha find co-founders, connect with angel investors, and gain insights on building a strong product-market fit. Today, her startup employs 50+ people.",
    img: story2,
  },
  {
    id: 3,
    title: "Research Publication 📚",
    author: "Aman Verma, Biotechnology 2023",
    full: "Published groundbreaking research on genetic sequencing in an international journal. The project started as a collaboration with senior alumni in biotech research labs, and later gained recognition from global institutes for its innovation in medical genetics.",
    img: story3,
  },
];

export default function StoriesAchievements() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">🏆 Stories & Achievements</h2>
        <p className="text-center text-muted mb-5">
          Inspiring stories and remarkable achievements from our alumni and students.
        </p>

        <div className="row g-4">
          {stories.map((story) => (
            <div className="col-md-4" key={story.id}>
              <Link to={`/story/${story.id}`} className="text-decoration-none">
                <div className="card story-card shadow-sm h-100">
                  <img src={story.img} alt={story.title} className="card-img-top" />
                  <div className="card-body d-flex flex-column">
                    <h5 className="fw-bold">{story.title}</h5>
                    <p className="text-muted small mb-2">{story.author}</p>
                    <p className="card-text text-truncate">{story.full}</p>
                    <div className="mt-auto">
                      <button className="btn btn-success btn-sm w-100">
                        Read Story
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
