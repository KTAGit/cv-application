import personIcon from "./assets/icons/user-avatar.png";

export function PersonalInfo() {
  return (
    <div className="personal-info-container form-container">
      <div className="title-wrapper">
        <img src={personIcon} alt="" />
        <h2>Personal Details</h2>
      </div>

      <form className="personal-info-form form" action="#">
        <div className="fullName wrapper">
          <label htmlFor="fullName">FULL NAME</label>
          <input id="fullName" type="text" placeholder="Full Name" />
        </div>
        <div className="email wrapper">
          <label htmlFor="email">EMAIL</label>
          <input id="email" type="email" placeholder="eg. name@example.com" />
        </div>
        <div className="phoneNumber wrapper">
          <label htmlFor="phoneNumber">PHONE NUMBER</label>
          <input id="phoneNumber" type="number" placeholder="(123) 456 7890" />
        </div>
        <div className="address wrapper">
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            type="text"
            placeholder="1234 Main St, Springfield, IL 62704"
          />
        </div>
      </form>
    </div>
  );
}
