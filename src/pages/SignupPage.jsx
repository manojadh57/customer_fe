import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../services/api.js"; // ✅ your axios instance

const SignupPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
 
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
    console.log(e.target.value);
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fName, lName, email, password, confirmPassword } = formData;

    if (!fName || !lName || !email || !password || !confirmPassword) {
      return setError("All fields are required.");
    }

    if (password !== confirmPassword) {
      return setError("Passwords do not match.");
    }

    try {
      // ✅ Using API instance here
      const { data } = await API.post("/auth/signup", {
        fName,
        lName,
        email,
        password,
      });

      if (data.status === "success") {
        navigate("/verify-email");
      } else {
        setError(data.message || "Signup failed.");
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Server error.");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        {error && <div className="alert alert-danger">{error}</div>}

        <div className="row">
          <div className="col-md-6 mb-3">
            <label>First Name</label>
            <input
              type="text"
              name="fName"
              value={formData.fName}
              onChange={handleChange}
              className="form-control"
              placeholder="First name"
            />
          </div>
          <div className="col-md-6 mb-3">
            <label>Last Name</label>
            <input
              type="text"
              name="lName"
              value={formData.lName}
              onChange={handleChange}
              className="form-control"
              placeholder="Last name"
            />
          </div>
        </div>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="form-control"
            placeholder="Password"
          />
        </div>

        <div className="mb-3">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="form-control"
            placeholder="Confirm Password"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
