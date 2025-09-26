import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";

export default function Login() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    alert(`Logged in! Check console for details.`);
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Login</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "400px" }}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <div className="input-group">
            <span className="input-group-text"><FaUser /></span>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter email"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <div className="input-group">
            <span className="input-group-text"><FaLock /></span>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter password"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary w-100 mt-3">
          Login
        </button>
      </form>
    </div>
  );
}
