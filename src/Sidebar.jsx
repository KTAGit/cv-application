import defaultPersonalIcon from "./assets/icons/default-user-avatar.png";
import personalIcon from "./assets/icons/user-avatar.png";
import defaultEducationIcon from "./assets/icons/default-graduation-cap.png";
import educationIcon from "./assets/icons/graduation-cap.png";
import defaultWorkHistoryIcon from "./assets/icons/default-suit-case.png";
import workHistoryIcon from "./assets/icons/suit-case.png";
import defaultSkillsIcon from "./assets/icons/default-automation.png";
import skillsIcon from "./assets/icons/automation.png";
import { PersonalInfo } from "./PersonalInfo";
import { Education } from "./Education";
import { WorkHistory } from "./WorkHistory";
import { Skills } from "./Skills";
import { Resume } from "./Resume";
import { useState } from "react";

export function Sidebar({ data, showSidebar, downloadPDF, resumeRef }) {
  const [isActive, setIsActive] = useState(0);
  const [resumeData, setResumeData] = useState({
    personal: {},
    education: [
      {
        schoolName: "",
        degree: "",
        graduationDate: "",
        isExpanded: true,
      },
    ],
    workHistory: [
      {
        companyName: "",
        role: "",
        startDate: "",
        endDate: "",
        responsibilities: [],
        currentResponsibility: "",
        isExpanded: true,
      },
    ],
    skills: [],
  });

  function handleData(type, data) {
    setResumeData((prev) => ({
      ...prev,
      [type]: data,
    }));
  }

  function renderSection() {
    switch (isActive) {
      case 0:
        return (
          <PersonalInfo sendData={handleData} data={resumeData.personal} />
        );
      case 1:
        return <Education sendData={handleData} data={resumeData.education} />;
      case 2:
        return (
          <WorkHistory sendData={handleData} data={resumeData.workHistory} />
        );
      case 3:
        return <Skills sendData={handleData} data={resumeData.skills} />;
    }
  }

  return (
    <div className="main-wrapper">
      <div className={showSidebar ? "main-sidebar" : "hidden"}>
        <div className="category-section">
          <div className="section-info">
            <p>Resume Sections</p>
            <p className="complete-p">Complete your profile</p>
          </div>
          <div className="category-wrapper">
            <div
              className={
                isActive === 0
                  ? "personal-info-wrapper active"
                  : "personal-info-wrapper"
              }
              onClick={() => {
                setIsActive(0);
              }}
            >
              <img
                src={isActive === 0 ? personalIcon : defaultPersonalIcon}
                alt=""
              />
              <p>Personal Info</p>
            </div>
            <div
              className={
                isActive === 1
                  ? "education-wrapper active"
                  : "education-wrapper"
              }
              onClick={() => setIsActive(1)}
            >
              <img
                src={isActive === 1 ? educationIcon : defaultEducationIcon}
                alt=""
              />
              <p>Education</p>
            </div>
            <div
              className={
                isActive === 2
                  ? "work-history-wrapper active"
                  : "work-history-wrapper"
              }
              onClick={() => setIsActive(2)}
            >
              <img
                src={isActive === 2 ? workHistoryIcon : defaultWorkHistoryIcon}
                alt=""
              />
              <p>Work History</p>
            </div>
            <div
              className={
                isActive === 3 ? "skills-wrapper active" : "skills-wrapper"
              }
              onClick={() => setIsActive(3)}
            >
              <img
                src={isActive === 3 ? skillsIcon : defaultSkillsIcon}
                alt=""
              />
              <p>Skills</p>
            </div>
          </div>
        </div>
      </div>
      {showSidebar ? renderSection() : ""}
      {
        <Resume
          resumeRef={resumeRef}
          downloadPdf={downloadPDF}
          showSidebar={showSidebar}
          fullName={resumeData.personal.fullName}
          email={resumeData.personal.email}
          phone={resumeData.personal.phone}
          address={resumeData.personal.address}
          title={resumeData.personal.title}
          workHistory={resumeData.workHistory}
          education={resumeData.education}
          skills={resumeData.skills}
        />
      }
    </div>
  );
}
