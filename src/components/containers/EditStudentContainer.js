import Header from './Header';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import EditStudentView from '../views/EditStudentView';
import { editStudentThunk } from '../../store/thunks';

class EditStudentContainer extends Component {
  // Initialize state
  constructor(props){
    super(props);
    this.state = {
      name: "", 
      address: "", 
      description: null, 
      redirect: false, 
      redirectId: null
    };


  }

  // Capture input data when it is entered
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleSubmit = async event => {
    event.preventDefault();  

  let student= {
    name: this.state.name,
    address: this.state.address,
    description: this.state.description
  };

  try {
 
    let updatedStudent = await this.props.editStudent(student);

    this.setState({
      name: "", 
      address: "", 
      description: "",
      redirect: true,  
      redirectId: updatedStudent.id
    });
  } catch (error) {
    
    console.error('Error editing student:', error);
  }
  };


  // Unmount when the component is being removed from the DOM:
  componentWillUnmount() {
      this.setState({redirect: false, redirectId: null});
  }

  // Render new student input form
  render() {
    // Redirect to new student's page after submit
    if(this.state.redirect) {
      return (<Redirect to={`/student/${this.state.redirectId}`}/>)
    }

    // Display the input form via the corresponding View component
    return (
      <div>
        <Header />
        <EditStudentView 
          handleChange = {this.handleChange} 
          handleSubmit={this.handleSubmit}
          student={this.props.student} 
          editStudent={this.props.editStudent}
          name={this.state.name}
          address={this.state.address}
          description={this.state.description}      
        />
      </div>          
    );
  }
}

// The following input argument is passed to the "connect" function used by "NewStudentContainer" component to connect to Redux Store.
// The "mapDispatch" argument is used to dispatch Action (Redux Thunk) to Redux Store.
// The "mapDispatch" calls the specific Thunk to dispatch its action. The "dispatch" is a function of Redux Store.
const mapDispatch = (dispatch) => {
    return({
        editStudent: (student) => dispatch(editStudentThunk(student))
    })
}

// Export store-connected container by default
// NewStudentContainer uses "connect" function to connect to Redux Store and to read values from the Store 
// (and re-read the values when the Store State updates).
export default connect(null, mapDispatch)(EditStudentContainer);