import React from "react";
import "./Day.css";
import AppointmentInDay from "./AppointmentInDay";

const Day = ({ appointments }) => {
  const appointmentsJSX = appointments.map(
    ({ time, patient, dentist, assistent }, index) => (
      <AppointmentInDay time={time} patient={patient} dentist={dentist} assistant={assistent} key={index} />
    )
  );
  return <ul className="dayview">{appointmentsJSX}</ul>;
};

export default Day