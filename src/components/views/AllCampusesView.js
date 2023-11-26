/*==================================================
AllCampusesView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display all campuses.
================================================== */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const AllCampusesView = (props) => {
  const {campus, deleteCampus,editCampus} = props;
  // If there is no campus, display a message.
  if (!props.allCampuses.length) {
    return(
    <div>
      <p>There are no campuses.</p>
      <Link to={`newcampus`}>
      <button>Add New Campus</button>
      </Link>
    </div>
    );
  }

  // If there is at least one campus, render All Campuses view 
  return (
    <div>
      <h1>All Campuses</h1>

      {props.allCampuses.map((campus) => (
        <div key={campus.id}>
          <Link to={`/campus/${campus.id}`}>
            <h2>{campus.name}</h2>
          </Link>



          <img src="https://images.unsplash.com/photo-1571113390215-0cdbbd0d0134?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbGxlZ2UlMjBjYW1wdXN8ZW58MHx8MHx8fDA%3D" alt="Campus" />

          <h4>campus id: {campus.id}</h4>
          <p>{campus.address}</p>
          <p>{campus.description}</p>
          <button onClick={() => deleteCampus(campus.id)}>Delete This Campus</button>
          <hr/>
        </div>
      ))}
      <br/>
      <Link to={`/newcampus`}>
        <button>Add New Campus</button>
      </Link>

      <br/><br/>
    </div>
  );
};

// Validate data type of the props passed to component.
AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;