import "./App.css";

//Router
import { Switch, Route } from "react-router-dom";

//Components
import {
  HomePageContainer,
  CampusContainer,
  StudentContainer,
  AllCampusesContainer,
  AllStudentsContainer,
  NewStudentContainer,
  
} from './components/containers';

// if you create separate components for adding/editing 
// a student or campus, make sure you add routes to those
// components here
import CampusView from './components/views/CampusView'; 
import NewCampusContainer from './components/containers/NewCampusContainer';
import EditCampusContainer from './components/containers/EditCampusContainer';
import EditStudentContainer from './components/containers/EditStudentContainer';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePageContainer} />
        <Route exact path="/campuses" component={AllCampusesContainer} />
        <Route exact path="/campus/:id" component={CampusContainer} />
        <Route exact path="/students" component={AllStudentsContainer} />
        <Route exact path="/newstudent" component={NewStudentContainer} />
        <Route exact path="/newcampus" component={NewCampusContainer} />
        <Route exact path="/student/:id" component={StudentContainer} />
        <Route exact path="/all-campuses" component={AllCampusesContainer} />
        <Route exact path="/all-students" component={AllStudentsContainer} />
        <Route exact path="/campus/:id" component={CampusView} />
        <Route exact path="/editcampus/:id" component={EditCampusContainer} />
        <Route exact path="/editstudent" component={EditStudentContainer} />
        
      </Switch>        
    </div>
  );
}

export default App;
