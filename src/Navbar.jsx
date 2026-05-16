import { useState } from "react";
import userIcon from "./assets/icons/user.png";
import previewBtn from "./assets/icons/Preview-icon.png";

export function Navbar({ showSidebar, setShowSidebar, downloadPDF }) {
  const isMobile = window.innerWidth <= 660;
  return (
    <div className="navbar">
      <p className={isMobile ? "cv-logo-mobile" : "cv-logo"}>CV Builder</p>
      <div className={isMobile ? "profile-wrapper-mobile" : "profile-wrapper"}>
        <button
          className="preview-btn"
          onClick={() => setShowSidebar((prev) => !prev)}
        >
          {showSidebar ? "PREVIEW" : "EDIT"}
        </button>

        <button
          onClick={downloadPDF}
          className={isMobile ? "download-btn-mobile" : "download-btn"}
        >
          Download PDF
        </button>
        <img className="profile-icon" src={userIcon} alt="" />
      </div>
    </div>
  );
}
