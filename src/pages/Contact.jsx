//import React from "react";
import { useState } from "react";
import "./Contact.css"
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!formData.name.trim()) {
      validationErrors.name = "Name is required";
    }

    if (!formData.email.trim() || !validateEmail(formData.email)) {
      validationErrors.email = "Valid email is required";
    }

    if (!formData.message.trim()) {
      validationErrors.message = "Message is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccessMessage(""); 
    } else {
      setErrors({});
      setSuccessMessage("Thanks! We will be in contact.");
      setFormData({ name: "", email: "", message: "" }); 
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? "error" : ""}
          />
          {errors.name && <p className="error-message">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "error" : ""}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? "error" : ""}
          ></textarea>
          {errors.message && <p className="error-message">{errors.message}</p>}
        </div>

        <button type="submit">Submit</button>

        {successMessage && <p className="success-message">{successMessage}</p>}
      </form>
    </div>
  );
};

export default Contact;
