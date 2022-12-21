import React, { useState, useEffect } from "react";
import EmployeeService from "../services/EmployeeService";

const ListEmployee = () => {

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    EmployeeService.getEmployees().then((res) => {
      setEmployees(res.data);
    });
  }, []);

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
              employees.length >= 1 && employees.map((emp) => (
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