import { useState } from "react";
import { useEffect } from "react";
import personIcon from "./assets/icons/user-avatar.png";

export function PersonalInfo({ sendData, data }) {
  const [personalData, setPersonalData] = useState(
    data || {
      fullName: "",
      email: "",
      phone: "",
      address: "",
    },
  );

  function handleChange(e) {
    const { name, value } = e.target;
    setPersonalData((prev) => ({ ...prev, [name]: value }));
    const updatedData = {
      ...personalData,
      [name]: value,
    };
    sendData("personal", updatedData);
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
            value={personalData.fullName}
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
            value={personalData.email}
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
            value={personalData.phone}
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
            value={personalData.address}
            placeholder="Springfield, IL"
            onChange={handleChange}
          />
        </div>
        <div className="wrapper">
          <label htmlFor="title">PROFESSIONAL TITLE</label>
          <input
            id="fullName"
            name="title"
            value={personalData.title}
            type="text"
            placeholder="eg. SENIOR PRODUCT DESIGNER"
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
}
