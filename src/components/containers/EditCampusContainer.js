/*==================================================
NewStudentContainer.js

The Container component is responsible for stateful logic and data fetching, and
passes data (if any) as props to the corresponding View component.
If needed, it also defines the component's "connect" function.
================================================== */
import Header from './Header';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import EditCampus from '../views/EditCampus';
import { editCampusThunk } from '../../store/thunks';

class EditCampusContainer extends Component {
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


  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleSubmit = async event => {
    event.preventDefault();  

  let campus = {
    name: this.state.name,
    address: this.state.address,
    description: this.state.description
  };

  try {
 
    let updatedCampus = await this.props.editCampus(campus);

    this.setState({
      name: "", 
      address: "", 
      description: null,
      redirect: true,  
      redirectId: updatedCampus.id
    });
  } catch (error) {
    
    console.error('Error editing campus:', error);
  }
  };


  
  componentWillUnmount() {
      this.setState({redirect: false, redirectId: null});
  }


  render() {
   
    if(this.state.redirect) {
      return (<Redirect to={`/campus/${this.state.redirectId}`}/>)
    }


    return (
      <div>
        <Header />
        <EditCampus 
          handleChange = {this.handleChange} 
          handleSubmit={this.handleSubmit}
          campus={this.props.campus}    
          editCampus={this.props.editCampus}
        />
      </div>          
    );
  }
}


const mapDispatch = (dispatch) => {
    return({
        editCampus: (campus) => dispatch(editCampusThunk(campus))
    })
}

export default connect(null, mapDispatch)(EditCampusContainer);