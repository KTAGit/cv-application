import { useState } from "react";
import automationIcon from "./assets/icons/automation.png";
import { use } from "react";

export function Skills({ sendData }) {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleAddSkill() {
    if (!inputValue.trim()) return;

    // setTags([...tags, inputValue]);
    setInputValue("");
    setTags((prev) => {
      const updated = [...prev, inputValue];
      sendData("skills", updated);
      return updated;
    });
  }

  return (
    <div className="form-container">
      <div className="title-wrapper">
        <img src={automationIcon} alt="" />
        <h2>Skills</h2>
      </div>
      <form className="skills-form" action="#">
        <label htmlFor="skills">ADD A SKILL</label>
        <div className="input-button-wrapper">
          <input
            type="text"
            name="skills"
            id="skills"
            value={inputValue}
            placeholder="e.g. Python"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="button" onClick={handleAddSkill}>
            +
          </button>
        </div>
      </form>
      <div className="skill-tags-container">
        {tags.map((tag, index) => (
          <div key={index}>
            {tag}
            {
              <button
                className="delete-btn"
                onClick={() => {
                  const updated = tags.filter((item) => item !== tag);
                  setTags(updated);
                  sendData("skills", updated);
                }}
              >
                ╳
              </button>
            }
          </div>
        ))}
      </div>
    </div>
  );
}
