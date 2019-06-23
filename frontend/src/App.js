import React from "react";
import { BrowserRouter, Router, Link } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateAdmin from "./Components/Admin/createAdmin.component";
import ViewAdmin from "./Components/Admin/viewAdmin.component";
import CreateCourse from "./Components/Course/createCourse.component";
import ViewCourse from "./Components/Course/viewCourse.component";
import ViewExam from "./Components/exam/viewExam.component";
import StudentRegister from './Components/Students/studentRegister.component';
import ViewStudent from './Components/Students/viewStudents.component';
import AddSubmission from './Components/Students/addSubmission.component';
import ViewSubmissions from './Components/Students/viewSubmissions.component';
import SignUp from './Components/LogIn/login'; 

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h2 className="mbr-section-subtitle mbr-light pb-1 mbr-fonts-style display-2">
          SII SYSTEM
        </h2>
        <div className="row">
          {/* <CreateAdmin createAdmin/> */}
          {/* <ViewAdmin viewAdmin/> */}

          {/* <CreateCourse createCourse/> */}
          {/* <ViewCourse viewCourse/> */}
          {/* <ViewExam ViewExam /> */}
          {/* <ViewSubmissions ViewSubmissions /> */}
          <SignUp SignUp/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
