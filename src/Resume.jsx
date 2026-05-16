import { useRef } from "react";
export function Resume(props) {
  function getYear(startDate) {
    return startDate.slice(0, 4);
  }
  return (
    <div
      ref={props.resumeRef}
      className={
        props.showSidebar
          ? "resume-container"
          : "resume-container show-mobile preview-mode"
      }
    >
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
                    {getYear(work.startDate) + " — " + work.endDate}
                  </p>
                </div>
                <div className="work-detail-wrapper">
                  <p className="role-prev">{work.role}</p>
                  <p className="company-name-prev">{work.companyName}</p>
                  <div className="responsibilities-wrapper">
                    <ul className="responsibilities-prev">
                      {work.responsibilities.map((item, index) => (
                        <li key={index}>{item}</li>
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
        {Array.isArray(props.education)
          ? props.education.map((edu, index) => (
              <div key={index} className="education-wrapper-prev">
                <div className="duration-wrapper">
                  <p className="duration-prev">
                    {(() => {
                      if (!edu.graduationDate || edu.graduationDate.length < 4)
                        return;
                      const year =
                        Number(edu.graduationDate - 4) +
                        " — " +
                        edu.graduationDate;
                      return year;
                    })()}
                  </p>
                </div>
                <div className="education-detail-wrapper">
                  <p className="degree-prev">{edu.degree}</p>
                  <p className="school-name-prev">{edu.schoolName}</p>
                </div>
              </div>
            ))
          : ""}
      </section>
      <section className="skills-sec">
        <h3 className="skills-title">Skills</h3>
        <div className="skills-wrapper-prev">
          {props.skills.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      </section>
    </div>
  );
}
