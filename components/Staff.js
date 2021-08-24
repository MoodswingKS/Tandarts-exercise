import React from "react"

const Staff = ({ staff, addStaff, dentistIsSick }) => {
    const allStaff = staff.map(s => {
        return ''
        // return <tr>
        //     <td>{s.firstname}</td>
        //     <td>{s.lastname}</td>
        //     <td>{s.mobile}</td>
        //     <td>{s.email}</td>
        //     <td>{s.occupation}</td>
        //     <td><input type="checkbox" onChange={dentistIsSick} checked={s.sick} /></td>
        // </tr>
    })
    return (
        <div>
            <span><h2>Nieuwe staff</h2></span>
            <form onSubmit={addStaff}>
                <input type="text" name="firstname" placeholder="Name" />
                <input type="text" name="lastname" placeholder="Last name" />
                <input type="phone" name="mobile" placeholder="Phone" />
                <input type="email" name="email" placeholder="E-mail" />
                <select name="occupation" placeholder="beroep">
                <option name="dentist">dentist</option>
                <option name="assistent">assistent</option>
                </select>
                <button>Voeg toe</button>
            </form>
            <table>
                <tbody >
                    <tr>
                    <th>First name</th>
                        <th>Last name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Occupation</th>
                        <th>Ziek</th>
                    </tr>
                  {allStaff}
                </tbody>
            </table>
        </div>
    );    
};

export default Staff