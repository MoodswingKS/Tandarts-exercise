import React from "react";

const format_time = time => (time < 10 ? `0${time}:00u` : `${time}:00u`);

const AppointmentInMonth = ({ time, patient, dentist, assistent, id, removeAppointment, moveAppointment }) => (
  <div className="appointment">
    <span className="patient"> Patient: {patient.firstname} {patient.lastname}</span>
    <span className="time">{format_time(time)}</span>

    
    <span id={id} onClick={moveAppointment}><button>Move</button></span><br />
    <span>Tandarts: {dentist.firstname} {dentist.lastname}</span><br />
    <span>Assistent: {assistent.firstname} {assistent.lastname}</span><br />
    <span id={id} onClick={removeAppointment}><button>Remove</button></span>
    <hr />
  </div>
);

export default AppointmentInMonth