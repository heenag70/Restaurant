import React, { useState } from "react";
import "./form.css";

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    person: "1",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="reservation-container">
      <form onSubmit={handleSubmit} className="reservation-form">
        <p className="heading"> Book a Table</p>
        <div className="container-service">
          <p className="heading1">Make Reservation</p>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">
                <strong>Name</strong>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">
                <strong>Email</strong>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">
                <strong>Phone</strong>
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="date">
                <strong>Date</strong>
              </label>
              <input
                type="text"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                placeholder="Date"
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="time">
                <strong>Time</strong>
              </label>
              <input
                type="text"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                placeholder="Time"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="person">
                <strong>Person</strong>
              </label>
              <select
                id="person"
                name="person"
                value={formData.person}
                onChange={handleChange}
                required
              >
                <option value="1">Person 1</option>
                <option value="2">Person 2</option>
                <option value="3">Person 3</option>
                <option value="4">Person 4</option>
                <option value="5">Person 5</option>
              </select>
            </div>
          </div>

          <button type="submit">Make a Reservation</button>
        </div>
      </form>
    </div>
  );
};

export default ReservationForm;
