import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const ListEmployee = () => {

  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    EmployeeService.getEmployees().then((res) => {
      setEmployees(res.data);
    });
  }, []);

  const addEmployee = () => {
    navigate("/add-employee/_add");
  }

  const editEmployee = (id) => {
    navigate(`/add-employee/${id}`);
  }

  const deleteEmployee = (id) => {
    EmployeeService.deleteEmployee(id).then(() => {
      setEmployees(employees.filter(emp => emp.id !== id));
    });
  }

  const viewEmployee = (id) => {
    navigate(`/view-employee/${id}`);
  }

  return (
    <div>
      <h2 className="text-center mt-3">Employee List</h2>
      <div>
        <button className="btn btn-primary mb-3" onClick={addEmployee}>Add Employee</button>
      </div>
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
                  <td>
                    <button className="btn btn-info" onClick={() => { editEmployee(emp.id) }}>Update</button>
                    <button className="btn btn-danger" onClick={() => { deleteEmployee(emp.id) }}>Delete</button>
                    <button className="btn btn-info" onClick={() => { viewEmployee(emp.id) }}>View</button>
                  </td>
                </tr>
              ))
            }
          </tbody>

        </table>
        { employees.length < 1 && <h3 className="text-center">Empty List or Employees Not Found</h3>}
      </div>
    </div>
  );
}

export default ListEmployee;
// export default withRouter(ListEmployee);