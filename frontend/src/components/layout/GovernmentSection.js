import React from "react";
import "../../styles/GovernmentSection.css"; // Make sure this is your CSS file path

function GovernmentSection() {
  const departments = [
    { id: 1, icon: "fa-users", name: "City Council" },
    { id: 2, icon: "fa-pen-to-square", name: "City Clerk" },
    { id: 3, icon: "fa-house-user", name: "Assessor" },
    { id: 4, icon: "fa-home", name: "Planning and Zoning" },
    { id: 5, icon: "fa-truck", name: "Public Works" },
    { id: 6, icon: "fa-shield-alt", name: "Williamston Police Department" },
  ];

  return (
    <div className="container">
      <div className="services-title">
        <h2>Government</h2>
      </div>
      <div className="options-container">
        {departments.map((dept) => (
          <div key={dept.id} className="option-card">
            <i className={`fa ${dept.icon} fa-3x icon-green`}></i>
            <div className="service-name">{dept.name}</div>
          </div>
        ))}
        <a href="#more-departments">More departments</a>
      </div>
    </div>
  );
}

export default GovernmentSection;
