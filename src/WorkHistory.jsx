import { useState } from "react";
import suitCase from "./assets/icons/suit-case.png";
import dropDownIcon from "./assets/icons/down-arrow.png";

export function WorkHistory({ sendData }) {
  const [items, setItems] = useState([
    {
      companyName: "",
      role: "",
      startDate: "",
      endDate: "",
      responsibilities: [],
      currentResponsibility: "",
      isExpanded: true,
    },
  ]);

  function handleChange(index, value, type) {
    type === "startDate" ? (value = value.slice(0, 4)) : value;

    if (type === "endDate") {
      if (value.includes("/") || value.includes("-")) {
        value = value.slice(-4);
      }
    }
    const updated = [...items];
    updated[index][type] = value;
    setItems(updated);
    sendData("workHistory", updated);
  }
  return (
    <div className="work-history form-container">
      <div className="title-btn-wrapper">
        <div className="title-wrapper">
          <img src={suitCase} alt="" />
          <h2>Work Experience</h2>
        </div>
        <button
          className="add-work-btn"
          onClick={() =>
            setItems([
              ...items,
              {
                companyName: "",
                role: "",
                startDate: "",
                endDate: "",
                responsibilities: [],
                currentResponsibility: "",
                isExpanded: true,
              },
            ])
          }
        >
          + Add Work
        </button>
      </div>
      {items.map((item, index) => (
        <form key={index} className="work-info-form form" action="#">
          <div className="subtitle-wrapper">
            <h3>{item.companyName || "CloudNexus Systems"}</h3>
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
          <div className={item.isExpanded ? "wrapper" : "collapse"}>
            <label htmlFor="companyName">COMPANY</label>
            <input
              type="text"
              name="companyName"
              placeholder="CloudNexus Systems"
              onChange={(e) => {
                handleChange(index, e.target.value, "companyName");
              }}
            />
          </div>
          <div className={item.isExpanded ? "wrapper" : "collapse"}>
            <label htmlFor="role">ROLE</label>
            <input
              type="text"
              name="role"
              placeholder="Senior Software Engineer"
              onChange={(e) => handleChange(index, e.target.value, "role")}
            />
          </div>
          <div className={item.isExpanded ? "wrapper" : "collapse"}>
            <label htmlFor="startDate">START DATE</label>
            <input
              className="start-date"
              type="date"
              name="startDate"
              onChange={(e) => handleChange(index, e.target.value, "startDate")}
            />
          </div>
          <div className={item.isExpanded ? "wrapper" : "collapse"}>
            <label htmlFor="endDate">END DATE</label>
            <input
              type="text"
              name="endDate"
              placeholder="MM/DD/YYYY or Present"
              onChange={(e) => handleChange(index, e.target.value, "endDate")}
            />
          </div>
          <div className={item.isExpanded ? "wrapper" : "collapse"}>
            <div className="label-btn-wrapper">
              <label htmlFor="responsibilities">RESPONSIBILITIES</label>
              <button
                type="button"
                className="more-responsibility-btn"
                disabled={!item.currentResponsibility.trim()}
                onClick={() => {
                  const updated = items.map((itm, idx) =>
                    idx === index
                      ? {
                          ...itm,
                          responsibilities: [
                            ...itm.responsibilities,
                            itm.currentResponsibility,
                          ],
                          currentResponsibility: "",
                        }
                      : itm,
                  );

                  setItems(updated);

                  sendData("workHistory", updated);
                }}
              >
                + Add responsibility
              </button>
            </div>
            <textarea
              id="responsibilities"
              type="text"
              name="responsibilities"
              value={item.currentResponsibility}
              placeholder="Established and maintained a comprehensive design system in Figma, reducing front-end development time by 25%."
              onChange={(e) => {
                handleChange(index, e.target.value, "currentResponsibility");
              }}
            />
            <div className="responsibility-storage">
              {item.responsibilities.map((resp, respIndex) => (
                <div key={respIndex}>
                  {resp.split(" ").slice(0, 4).join(" ") + "..."}

                  <button
                    type="button"
                    className="delete-btn"
                    onClick={() => {
                      const updated = items.map((itm, idx) => {
                        return idx === index
                          ? {
                              ...itm,
                              responsibilities: itm.responsibilities.filter(
                                (_, i) => i !== respIndex,
                              ),
                            }
                          : itm;
                      });

                      setItems(updated);

                      sendData("workHistory", updated);
                    }}
                  >
                    ╳
                  </button>
                </div>
              ))}
            </div>
          </div>
        </form>
      ))}
    </div>
  );
}
