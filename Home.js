import React from "react";
import "./css/App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Patients from "./components/Patients"
import Staff from "./components/Staff"
import Appointments from "./components/Appointments"


const Home = ({ appointments,
  patients,
  staff,
  dentistIsSick,
  addStaff,
  addPatient,
  addAppointment,
  patientIsSick,
  removePatient,
}) => {
  return (
    <Router>
      <div >
        <nav>
          <ul>
            <li>
              <Link to="/Appointments">Nieuwe afspraak maken</Link>
            </li>
            <li>
              <Link to="/Patients">Patienten</Link>
            </li>
            <li>
              <Link to="/Staff">Personeel</Link>
            </li>
          </ul>
        </nav>
        <main>
          <Switch>
            <Route path="/Appointments">
              <Appointments
                appointments={appointments}
                staff={staff}
                patients={patients}
                addAppointment={addAppointment} />
            </Route>
            <Route path="/Patients">
              <Patients
                removePatient={removePatient}
                patients={patients}
                addPatient={addPatient}
                patientIsSick={patientIsSick} />
            </Route>
            <Route path="/Staff">
              <Staff
                staff={staff}
                dentistIsSick={dentistIsSick}
                addStaff={addStaff} />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default Home