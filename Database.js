import React, { Component } from 'react'
import App from "./App"
import generateRandomAppointments from "./utils"
import { v4 as uuidv4 } from 'uuid'

class Database extends Component {
    constructor() {
        super();
        const appointments = generateRandomAppointments(50);
        const assistents = [...new Set(appointments.map(item => item.assistent))];
        const dentists = [...new Set(appointments.map(item => item.dentist))];
        const patients = [...new Set(appointments.map(item => item.patient))];
        const staff = [...dentists, ...assistents];
        this.state = {
            patients: patients,
            staff: staff,
            dentists: dentists,
            assistents: assistents,
            appointments: appointments
        }
    }

    addPatient = event => {
        const firstname = event.target.firstname.value
        const lastname = event.target.lastname.value
        const yearOfBirth = event.target.yearOfBirth.value
        const mobile = event.target.mobile.value
        const email = event.target.email.value

        if (firstname !== "") {
            if (lastname !== "") {
                const newPatient = {
                    id: uuidv4(),
                    firstname: firstname,
                    lastname: lastname,
                    mobile: mobile,
                    email: email,
                    yearOfBirth: yearOfBirth,
                    sick: false
                };
                const newList = [newPatient, ...this.state.patients]
                this.setState({ patients: newList })
            };
        };
    };

    addStaff = event => {
        const firstname = event.target.firstname.value
        const lastname = event.target.lastname.value
        const mobile = event.target.phone.value
        const occupation = event.target.occupation.value
        const email = event.target.email.value
        if (firstname !== "") {
            if (lastname !== "") {
                const newStaff = {
                    id: uuidv4(),
                    firstname: firstname,
                    lastname: lastname,
                    mobile: mobile,
                    email: email,
                    occupation: occupation,
                    sick: false
                };
                const newStaffList = [newStaff, ...this.state.staff]
                this.setState({ employees: newStaffList })
            };
        };
        event.preventDefault();
    };

    removeAppointment = event => {
        event.preventDefault()
        const name = event.target.parentElement.parentElement.id
        const removeList = [...this.state.appointments].find(ap => ap.id === name);
        const newAppointmentList = [...this.state.appointments].filter(ap => ap !== removeList)
        this.setState({ appointments: newAppointmentList })
    }

    dentistIsSick = event => {
        const sickStaff = event.target.parentElement.parentElement.id;
        const newSickStaff = [...this.state.staff].find(s => s.id === sickStaff)
        const newList = [...this.state.staff].map(s => {
            if (s === newSickStaff) {
                s.sick = !s.sick
            };
            return s
        });
        this.setState({ staff: newList });
    }

    patientIsSick = event => {
        const id = event.target.parentElement.parentElement.id;
        const sickPatient = [this.state.patients].find(patient => patient.id === id)
        const newList = [...this.state.patients].map(patient => {
            if (patient === sickPatient) {
                patient.sick = !patient.sick;
            };
            return patient;
        });
        this.setState({ patients: newList });
    };

    removePatient = event => {
        const id = event.target.parentElement.parentElement.id;
        const sickPatient = [...this.state.patients].find(patient => patient.id === id)
        const newList = [...this.state.patients].filter(patient => patient !== sickPatient)
        this.setState({ patients: newList })
    };

    moveAppointment = event => {
        // no clue yet
    };    

    addAppointment = event => {
        const dentist = [...this.state.staff].find(dentist => dentist.id === event.target.dentist.value);
        const patient = [...this.state.patients].find(patient => patient.id === event.target.patient.value);
        const assistent = [...this.state.staff].find(assistent => assistent.id === event.target.assistent.value);
        const day = parseInt(event.target.day.value);
        const time = parseInt(event.target.time.value);
        const newAppointment = {
            id: uuidv4(),
            day: day,
            time: time,
            patient: patient,
            dentist: dentist,
            assistent: assistent,
        }
        const findDentist = [...this.state.appointments].find(appointment => {
            return appointment.day === day && appointment.time === time && appointment.dentist === dentist
        }
        )
        const findAssistent = [...this.state.appointments].find(appointment => {
            if (dentist !== undefined) {
                return appointment.day === day && appointment.time === time && appointment.assistent === assistent
            }
            return false
        }
        )
        if (findDentist || findAssistent) {
            alert("Sorry dit kan niet...")
        } else {
            const newAppointmentList = [newAppointment, ...this.state.appointments];
            this.setState({ appointments: newAppointmentList })
        }
        event.preventDefault();
    };

    render(){
        return (
            <div>
                <App
                    moveAppointment={this.moveAppointment}
                    removePatient={this.removePatient}
                    removeAppointment={this.removeAppointment}
                    addAppointment={this.addAppointment}
                    appointments={this.state.appointments}
                    patients={this.state.patients}
                    staff={this.state.staff}
                    dentists={this.state.dentists}
                    assistents={this.state.assistents}
                    addPatient={this.addPatient}
                    addStaff={this.addStaff}
                    dentistIsSick={this.dentistIsSick}
                    patientIsSick={this.patientIsSick}
                />
            </div>
        );
    };
};



export default Database