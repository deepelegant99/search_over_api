import React from "react";

const DisplayList = () => {
  const topJobs = [
    "Jave Developer",
    "Data Scientist",
    "Product Manager",
    "Enterprise Architech",
    "Devops Engineer",
    "Information Security Engineer",
    "Business Development Manager",
    "Mobile Engineer",
    "Software Engineer",
    "Dentist",
    "Front End Engineer",
  ];

  return (
    <div>
      {topJobs.map((item) => {
         return <div>{item}</div>
      })}
    </div>
  );
};

export default DisplayList;
