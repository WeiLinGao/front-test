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
      description: this.state.description,
      imageUrl: this.state.imageUrl
  };
  
  try {
    let newCampus = await this.props.editCampus(campus);

    if (newCampus && newCampus.id) {
      this.setState({
        name: "",
        address: "",
        description: null,
        redirect: true,
        redirectId: newCampus.id,
      });
    } else {
      console.error("Error: Campus ID not found in the response");
    }
  } catch (error) {
    console.error("Error editing campus:", error);
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
          name={this.state.name}
          address={this.state.address}
          description={this.state.description}
          imageUrl={this.state.imageUrl}
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