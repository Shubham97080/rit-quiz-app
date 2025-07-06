import React from 'react';

function Courses() {
  const courseList = [
    { name: "B.Tech in CSE", duration: "4 Years" },
    { name: "B.Tech in Mechanical", duration: "4 Years" },
    { name: "BBA", duration: "3 Years" },
    { name: "BCA", duration: "3 Years" }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Our Courses</h2>
      <ul>
        {courseList.map((course, index) => (
          <li key={index}>
            <strong>{course.name}</strong> - {course.duration}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Courses;
