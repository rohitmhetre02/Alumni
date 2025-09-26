// src/pages/StoryDetails.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
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

export default function StoryDetails() {
  const { id } = useParams();
  const story = stories.find((s) => s.id === parseInt(id));

  if (!story) return <p className="text-center mt-5">Story not found.</p>;

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <Link to="/stories" className="btn btn-outline-primary mb-4">
          ← Back to Stories
        </Link>

        <div className="card shadow-sm story-detail-card p-4">
          <img src={story.img} alt={story.title} className="card-img-top mb-3" />
          <h2 className="fw-bold mb-2">{story.title}</h2>
          <p className="text-muted mb-3">{story.author}</p>
          <p className="story-full-text">{story.full}</p>
        </div>
      </div>
    </section>
  );
}
