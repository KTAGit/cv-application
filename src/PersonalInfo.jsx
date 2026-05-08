import { useState } from "react";
import { useEffect } from "react";
import personIcon from "./assets/icons/user-avatar.png";

export function PersonalInfo({ sendData }) {
  const [personalData, setPersonalData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
  });

  function handleChange(e) {
    console.log(e.target.name);
    const { name, value } = e.target;
    setPersonalData((prev) => ({ ...prev, [name]: value }));
    const updatedData = {
      ...personalData,
      [name]: value,
    };
    sendData(updatedData);
  }

  return (
    <div className="personal-info-container form-container">
      <div className="title-wrapper">
        <img src={personIcon} alt="" />
        <h2>Personal Details</h2>
      </div>

      <form className="personal-info-form form" action="#">
        <div className="fullName wrapper">
          <label htmlFor="fullName">FULL NAME</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Full Name"
            onChange={handleChange}
          />
        </div>
        <div className="email wrapper">
          <label htmlFor="email">EMAIL</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="eg. name@example.com"
            onChange={handleChange}
          />
        </div>
        <div className="phoneNumber wrapper">
          <label htmlFor="phoneNumber">PHONE NUMBER</label>
          <input
            id="phoneNumber"
            type="tel"
            name="phone"
            placeholder="+1 (555) 123-4567"
            onChange={handleChange}
          />
        </div>
        <div className="address wrapper">
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            type="text"
            name="address"
            placeholder="Springfield, IL"
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
}
