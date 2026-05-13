import { useState } from "react";
import educationIcon from "./assets/icons/graduation-cap.png";
import dropDownIcon from "./assets/icons/down-arrow.png";

export function Education({ sendData, data }) {
  const [items, setItems] = useState(data);

  function handleChange(index, value, type) {
    if (type === "graduationDate") {
      if (!Number(value)) {
        return;
      }
    }
    const updated = [...items];
    updated[index][type] = value;
    setItems(updated);
    sendData("education", updated);
  }

  return (
    <div className="education-section form-container">
      <div className="title-btn-wrapper">
        <div className="title-wrapper">
          <img src={educationIcon} alt="" />
          <h2>Education</h2>
        </div>
        <button
          className="add-education-btn"
          onClick={() => setItems([...items, { isExpanded: true }])}
        >
          + Add Education
        </button>
      </div>
      {items.map((item, index) => (
        <form key={index} className="education-info-form form" action="#">
          <div className="subtitle-wrapper">
            <h3>{item.schoolName || "Stanford University"}</h3>
            <button
              type="button"
              onClick={() =>
                setItems((prev) =>
                  prev.map((item, i) =>
                    i === index
                      ? { ...item, isExpanded: !item.isExpanded }
                      : item,
                  ),
                )
              }
            >
              <img
                className={item.isExpanded ? "rotate" : ""}
                src={dropDownIcon}
                alt=""
              />
            </button>
          </div>
          <div className={item.isExpanded ? "school-name wrapper" : "collapse"}>
            <label htmlFor="schoolName">SCHOOL NAME</label>
            <input
              type="text"
              name="schoolName"
              value={item.schoolName}
              placeholder="Stanford University"
              onChange={(e) =>
                handleChange(index, e.target.value, "schoolName")
              }
            />
          </div>
          <div className={item.isExpanded ? "degree wrapper" : "collapse"}>
            <label htmlFor="degree">DEGREE</label>
            <input
              type="text"
              name="degree"
              value={item.degree}
              placeholder="B.S Computer Science"
              onChange={(e) => handleChange(index, e.target.value, "degree")}
            />
          </div>
          <div
            className={item.isExpanded ? "graduation-date wrapper" : "collapse"}
          >
            <label htmlFor="graduationDate">GRADUATION YEAR</label>
            <input
              type="text"
              name="graduationDate"
              value={item.graduationDate}
              placeholder="eg. 2020"
              onChange={(e) => {
                const value = e.target.value.slice(0, 4);
                handleChange(index, value, "graduationDate");
              }}
            />
          </div>
        </form>
      ))}
    </div>
  );
}
