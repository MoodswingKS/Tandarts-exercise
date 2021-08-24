import React from "react";
import "./css/App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Calendar from "./components/Calendar";
import Day from "./components/Day";

const App = ({ addPatient, moveAppointment, patients, staff, addStaff,
  dentistIsSick, appointments, addAppointment, patientIsSick, removeAppointment, removePatient }) => (
  <Router>
    <div className="headDiv">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/calendar">Maand</Link>
          </li>
          <li>
            <Link to="/day">Vandaag</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Switch>
          <Route path="/calendar">
            <Calendar appointments={appointments}
              deleteAppointment={removeAppointment}
              changeAppointment={moveAppointment} />
          </Route>
          <Route path="/day">
            <Day appointments={appointments.filter(app => app.day === 1)} />
          </Route>
          <Route path="/">
            <Home
              moveAppointment={moveAppointment}
              removePatient={removePatient}
              removeAppointment={removeAppointment}
              addAppointment={addAppointment}
              appointments={appointments}
              patients={patients}
              staff={staff}
              addPatient={addPatient}
              addStaff={addStaff}
              dentistIsSick={dentistIsSick}
              patientIsSick={patientIsSick}
            />
          </Route>
        </Switch>
      </main>
      <span className="footer"> KASPER SIMONS</span>
    </div>
  </Router>
);

export default App;
