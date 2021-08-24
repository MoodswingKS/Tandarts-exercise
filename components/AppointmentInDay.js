import React from "react";

const format_time = time => (time < 10 ? `0${time}:00u` : `${time}:00u`);

const AppointmentInDay = ({ time, patient, dentist, assistent }) => (
  <li>
    <div className="time">{format_time(time)}</div>
    <div className="patient +">Patiënt: {patient.name} {patient.lastname}</div>
    <div>Tandarts: {dentist.firstname} {dentist.lastname}</div>
    <div>Assistent: {assistent.firstname} {assistent.lastname}</div>
  </li>
);

export default AppointmentInDay
