import userIcon from "./assets/icons/user.png";

export function Navbar() {
  return (
    <div className="navbar">
      <p className="cv-logo">CV Builder</p>
      <div className="profile-wrapper">
        <button className="download-btn">Download PDF</button>
        <img className="profile-icon" src={userIcon} alt="" />
      </div>
    </div>
  );
}
