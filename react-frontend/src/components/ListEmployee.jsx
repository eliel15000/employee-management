import React, { useState } from "react";

const ListEmployee = () => {

  const [employees, setEmployees] = useState([]);

  return (
    <div>
      <h2 className="text-center">Employee List</h2>
      <div className="row">
        <table className="table table-striped table-bordered">

          <thead>
            <tr>
              <th>Employee First Name</th>
              <th>Employee Last Name</th>
              <th>Employee Email ID</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {
              employees.map((emp) => (
                <tr key={emp.id}>
                  <td>{ emp.firstName }</td>
                  <td>{ emp.lastName }</td>
                  <td>{ emp.emailId }</td>
                </tr>
              ))
            }
          </tbody>

        </table>
      </div>
    </div>
  );
}

export default ListEmployee;