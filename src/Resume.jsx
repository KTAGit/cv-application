export function Resume(props) {
  return (
    <div className="resume-container">
      <section className="personal-info-sec">
        <div className="name-role-wrapper">
          <h3 className="fullname-prev">{props.fullName || "Full Name"}</h3>
          <h3 className="title-prev">{props.title || "PROFESSIONAL TITLE"}</h3>
        </div>
        <div className="email-phone-wrapper">
          <p className="email-prev">{props.email || "Email"}</p>
          <p className="phone-prev">{props.phone || "Phone"}</p>
          <p className="address-prev">{props.address || "Address"}</p>
        </div>
      </section>
      <section className="work-history-sec">
        <h3 className="work-experience-title">Work Experience</h3>
        {Array.isArray(props.workHistory)
          ? props.workHistory.map((work, index) => (
              <div key={index} className="work-wrapper">
                <div className="duration-wrapper">
                  <p className="duration-prev">
                    {work.startDate + " — " + work.endDate}
                  </p>
                </div>
                <div className="work-detail-wrapper">
                  <p className="role-prev">{work.role}</p>
                  <p className="company-name-prev">{work.companyName}</p>
                  <div className="responsibilities-wrapper">
                    <ul className="responsibilities-prev">
                      {work.responsibilities.map((item) => (
                        <li>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))
          : ""}
      </section>
      <section className="education-sec">
        <h3 className="education-title">Education</h3>
      </section>
    </div>
  );
}
