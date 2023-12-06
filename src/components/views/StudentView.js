/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
import React from 'react';
import { Link } from "react-router-dom";
const StudentView = (props) => {
  const { student,deleteStudent } = props;

  
  const email = (student && student.firstname && student.lastname) ?
    `${student.firstname.toLowerCase()}${student.lastname.toLowerCase()}@gmail.com` :
    '';
    const gpa = student && student.gpa !== undefined ? student.gpa.toFixed(2) : 'N/A';

  return (
    <div>
      <h1>{student ? `${student.firstname} ${student.lastname}` : 'Student'}</h1>
      <div>
        <h3>Student Information:</h3>

        <img src="https://static.vecteezy.com/system/resources/thumbnails/000/511/962/small/57_Student.jpg" alt="Campus" />
        {student ? (
          <>
            <p>First Name: {student.firstname}</p>
            <p>Last Name: {student.lastname}</p>
            <p>Email: {email}</p>
            <p>GPA: {gpa}</p>
            <Link to={`/campus/${student.campus ? student.campus.id : ''}`}>
              <p>Attending: {student.campus ? student.campus.name : 'Unknown'}</p>
              </Link>
          </>
        ) : (
          <p>No student information available</p>
        )}
      </div>
      <div>
        <Link to={`/editstudent`}>
          <button>Edit Student Information</button>
        </Link>
      </div>

      <button onClick={() => deleteStudent(student.id)}>Delete Student</button>
    </div>
    
    

    
  );
};

export default StudentView;