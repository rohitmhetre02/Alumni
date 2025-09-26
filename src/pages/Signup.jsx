import React, { useState } from "react";
import { FaUser, FaUserGraduate, FaChalkboardTeacher, FaBuilding, FaUserShield, FaLock, FaPhone, FaUniversity, FaCity } from "react-icons/fa";

export default function Signup() {
  const roles = [
    { name: "Alumni", icon: <FaUserGraduate /> },
    { name: "Student", icon: <FaUserGraduate /> },
    { name: "Faculty", icon: <FaChalkboardTeacher /> },
    { name: "Employer", icon: <FaBuilding /> },
    { name: "Institute", icon: <FaBuilding /> },
    { name: "Admin", icon: <FaUserShield /> },
  ];

  const [selectedRole, setSelectedRole] = useState("Alumni");
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", { ...formData, role: selectedRole });
    alert(`Signed up as ${selectedRole}! Check console for details.`);
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Sign Up</h2>

      {/* Role Selection */}
      <div className="d-flex flex-wrap justify-content-center mb-4 gap-3">
        {roles.map((role) => (
          <div
            key={role.name}
            className={`role-card p-3 text-center border rounded shadow-sm ${
              selectedRole === role.name ? "border-primary bg-light" : "border-secondary"
            }`}
            style={{ width: "120px", cursor: "pointer" }}
            onClick={() => setSelectedRole(role.name)}
          >
            <div className="fs-2 mb-2">{role.icon}</div>
            <div>{role.name}</div>
          </div>
        ))}
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "800px" }}>
        <div className="row g-3">
          {/* Full Name */}
          <div className="col-md-6">
            <label className="form-label">Full Name</label>
            <div className="input-group">
              <span className="input-group-text"><FaUser /></span>
              <input
                type="text"
                name="fullName"
                className="form-control"
                placeholder="Enter full name"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter email"
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div className="col-md-6">
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

          {/* Mobile Number */}
          <div className="col-md-6">
            <label className="form-label">Mobile Number</label>
            <div className="input-group">
              <span className="input-group-text"><FaPhone /></span>
              <input
                type="tel"
                name="mobile"
                className="form-control"
                placeholder="Enter mobile number"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Conditional Fields Based on Role */}
          {(selectedRole === "Alumni" || selectedRole === "Student") && (
            <>
              <div className="col-md-6">
                <label className="form-label">Graduation Year</label>
                <input
                  type="number"
                  name="gradYear"
                  className="form-control"
                  placeholder="Enter graduation year"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">College / University</label>
                <div className="input-group">
                  <span className="input-group-text"><FaUniversity /></span>
                  <input
                    type="text"
                    name="college"
                    className="form-control"
                    placeholder="Enter college/university"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </>
          )}

          {selectedRole === "Faculty" && (
            <>
              <div className="col-md-6">
                <label className="form-label">Department</label>
                <input
                  type="text"
                  name="department"
                  className="form-control"
                  placeholder="Enter department"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">College / University</label>
                <input
                  type="text"
                  name="college"
                  className="form-control"
                  placeholder="Enter college/university"
                  onChange={handleChange}
                  required
                />
              </div>
            </>
          )}

          {(selectedRole === "Employer" || selectedRole === "Institute") && (
            <>
              <div className="col-md-6">
                <label className="form-label">Organization Name</label>
                <input
                  type="text"
                  name="organization"
                  className="form-control"
                  placeholder="Enter organization"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Designation</label>
                <input
                  type="text"
                  name="designation"
                  className="form-control"
                  placeholder="Enter designation"
                  onChange={handleChange}
                />
              </div>
            </>
          )}

          {selectedRole === "Admin" && (
            <div className="col-12">
              <label className="form-label">Access Code</label>
              <input
                type="text"
                name="accessCode"
                className="form-control"
                placeholder="Enter admin access code"
                onChange={handleChange}
                required
              />
            </div>
          )}

          {/* City + Country */}
          {selectedRole !== "Admin" && (
            <>
              <div className="col-md-6">
                <label className="form-label">City</label>
                <div className="input-group">
                  <span className="input-group-text"><FaCity /></span>
                  <input
                    type="text"
                    name="city"
                    className="form-control"
                    placeholder="Enter city"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <label className="form-label">Country</label>
                <input
                  type="text"
                  name="country"
                  className="form-control"
                  placeholder="Enter country"
                  onChange={handleChange}
                  required
                />
              </div>
            </>
          )}
        </div>

        <button type="submit" className="btn btn-primary w-100 mt-4">
          Sign Up
        </button>
      </form>
    </div>
  );
}
