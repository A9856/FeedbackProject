import { useState } from "react";
import { validateForm } from "../validator/formValidator";

export default function Form() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", feedback: "" });
  const [formErrors, setFormErrors] = useState({});
  const [submittedData, setSubmittedData] = useState([]);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const API_URL=process.env.REACT_APP_BACKEND_SERVER;
  async function handleSubmit(e) {
    e.preventDefault();
    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      // const response = await fetch("http://localhost:7000/feed", {
         const response = await fetch(`${API_URL}/api/feed`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const savedData = await response.json();
      setSubmittedData([...submittedData, savedData]);

      // Clear form fields
      setFormData({ name: "", email: "", phone: "", feedback: "" });
      setFormErrors({});
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }

  return (
    <div className="form-container">
      <h2>User System Feedback Submit</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
        {formErrors.name && <div className="error">{formErrors.name}</div>}

        <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        {formErrors.email && <div className="error">{formErrors.email}</div>}

        <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
        {formErrors.phone && <div className="error">{formErrors.phone}</div>}

        <textarea name="feedback" placeholder="Feedback" value={formData.feedback} onChange={handleChange} />
        {formErrors.feedback && <div className="error">{formErrors.feedback}</div>}

        <button type="submit">Submit</button>
      </form>

      {/* Display submitted data below */}
      {submittedData.length > 0 && (
        <div className="submitted-data">
          <h3>Submitted Feedback</h3>
          {submittedData.map((data, index) => (
            <div key={index} className="feedback-entry">
              <p><strong>Name:</strong> {data.name}</p>
              <p><strong>Email:</strong> {data.email}</p>
              <p><strong>Phone:</strong> {data.phone}</p>
              <p><strong>Feedback:</strong> {data.feedback}</p>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
