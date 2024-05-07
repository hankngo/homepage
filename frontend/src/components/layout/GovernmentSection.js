import React from "react";
import "../../styles/GovernmentSection.css"; // Make sure this is your CSS file path

function GovernmentSection() {
  const departments = [
    { id: 1, icon: "fa-users", name: "City Council", url: "https://williamston-mi.us/departments/city-council/" },
    { id: 2, icon: "fa-pen-to-square", name: "City Clerk", url: "https://williamston-mi.us/departments/city-clerk/" },
    { id: 3, icon: "fa-house-user", name: "Assessor", url: "https://williamston-mi.us/departments/assessor/" },
    { id: 4, icon: "fa-home", name: "Planning and Zoning", url: "https://williamston-mi.us/departments/planning-and-zoning/" },
    { id: 5, icon: "fa-truck", name: "Public Works", url: "https://williamston-mi.us/departments/public-works/" },
    { id: 6, icon: "fa-shield-alt", name: "Williamston Police Department", url: "https://williamston-mi.us/departments/police/" }
  ];

  return (
    <div className="container">
      <div className="services-title">
        <h2>Government</h2>
      </div>
      <div className="options-container">
        {departments.map((dept) => (
          <a key={dept.id} href={dept.url} className="option-card" target="_blank" rel="noopener noreferrer">
            <i className={`fa ${dept.icon} fa-3x icon-green`}></i>
            <div className="service-name">{dept.name}</div>
          </a>
        ))}
        <a href="https://williamston-mi.us/government" className="more-departments-link">More departments</a>
      </div>
    </div>
  );
}

export default GovernmentSection;