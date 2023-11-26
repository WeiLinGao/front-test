/*==================================================
HomePageView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the home page.
================================================== */
import React from 'react';
import { Link } from 'react-router-dom'; 

const HomePageView = () => {
  // Render Home page view
  return (
    <div>
      <h1>Home Page</h1>
      <div>
      <p>View Campuses</p>
        <p>
          <Link to="/all-campuses">
            <button>Click</button>
          </Link>
        </p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/University_of_Eastern_Finland_Kuopio.jpg/220px-University_of_Eastern_Finland_Kuopio.jpg"alt="Campus" />
        <p>View Students</p>
        <p>
          <Link to="/all-students">
            <button>Click</button>
          </Link>
        </p>
        <img src="https://img.freepik.com/free-vector/multi-ethnic-group-school-students-kids_3446-667.jpg"alt="Student" />
      </div>
    </div>
  );
};

export default HomePageView;

