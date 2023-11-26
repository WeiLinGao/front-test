/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";


const CampusView = (props) => {
  const { campus, deleteCampus, editCampus, deleteStudent,students } = props;
  const [totalStudents, setTotalStudents] = useState(0);

  useEffect(() => {
    
    if (campus && campus.students) {
      setTotalStudents(campus.students.length);
    }
  }, [campus]);

  const handleDelete = () => {
    deleteCampus(campus.id);
    console.log("Campus deleted");
  };
  const handleEdit = () => {
    editCampus(campus.id);
    console.log("Campus Edited");
  };

  const handleEnrollStudent = () => {
   
    setTotalStudents(totalStudents + 1);
    
  };
  return (
    <div>
      <h1>{campus.name}</h1>
      <p>{campus.address}</p>
      <p>{campus.description}</p>
      
      <img src="https://static01.nyt.com/images/2020/03/14/upshot/14up-colleges-remote/14up-colleges-remote-videoSixteenByNineJumbo1600.jpg" alt="Campus" />

      <div>
        <Link to={`/editcampus/:id`}>
          <button>Edit campus</button>
        </Link>
      </div>
      <div>
      <button onClick={() => deleteCampus(campus.id)}>Delete Campus</button>
      </div>

      <Link to={`/newstudent`}>
        <button>Enroll New Student</button>
      </Link>

      {totalStudents === 0 ? (
      <p>No student available</p>
    ) : (
      <>
      <p>Total Students: {totalStudents}</p>
      {campus.students.map((student) => {
        let name = student.firstname + " " + student.lastname;
        return (
          <div key={student.id}>
            <Link to={`/student/${student.id}`}>
              <h2>{name}</h2>
            </Link>
            <button onClick={() => deleteStudent(student.id)}>Delete Stduent</button>
            <hr/>
          </div>
        );
      })}
      </>
    )}
    </div>
  );
};

CampusView.propTypes = {
  campus: PropTypes.object.isRequired,
  deleteCampus: PropTypes.func.isRequired,
  editCampus: PropTypes.func.isRequired,
  deleteStudent: PropTypes.func.isRequired,
};

export default CampusView;
