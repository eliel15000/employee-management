import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const UpdateEmployee = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  // useEffect(() => {
  //   console.log(firstName);
  //   console.log(lastName);
  //   console.log(emailId);
  // }, [firstName, lastName, emailId]);

  useEffect(() => {
    // console.log("param: " + params.id);
    EmployeeService.getEmployeeById(params.id).then((res) => {
      let emp = res.data;
      setFirstName(emp.firstName);
      setLastName(emp.lastName);
      setEmailId(emp.emailId);
    });
  }, []);

  const updateEmployee = (e) => {
    e.preventDefault();
    let employee = { 
      firstName: firstName,
      lastName: lastName,
      emailId: emailId
    }
    // alert("employee --> " + JSON.stringify(employee));

    if (firstName !== "" && lastName !== "" && emailId !== "") {
      // alert("success");
      // EmployeeService.createEmployee(employee).then(() => navigate("/"));
      // console.log(employee);

      EmployeeService.updateEmployee(employee, params.id).then(() => navigate("/"));
    }
  }

  return (
    <div>
      <div className="container">
        <div className="row mt-5">
          <div className="card col-md-6 offset-md-3">
            <h3 className="text-center">Update Employee</h3>
            <div className="card-body"></div>

            <form>
              <div className="form-group mb-3">
                <label className="mb-2">First Name:</label>
                <input placeholder="First Name"
                  type="text"
                  name="firstName"
                  className="form-control"
                  value={firstName}
                  onChange={(e) => { setFirstName(e.target.value) }}
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label className="mb-2">Last Name:</label>
                <input placeholder="Last Name"
                  name="lastName"
                  className="form-control"
                  value={lastName}
                  onChange={(e) => { setLastName(e.target.value) }}
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label className="mb-2">Email Address:</label>
                <input placeholder="Email Address"
                  name="emailId"
                  className="form-control"
                  value={emailId}
                  onChange={(e) => { setEmailId(e.target.value) }}
                  required
                />
              </div>

              <div className="btn-div">
                <button type="submit" className="btn btn-success" onClick={(e) => updateEmployee(e)}>Save</button>
                <button className="btn btn-danger" onClick={() => { navigate("/") }}>Cancel</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateEmployee;