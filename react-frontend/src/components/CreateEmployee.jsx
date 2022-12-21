import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const CreateEmployee = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const navigate = useNavigate();

  // useEffect(() => {
  //   console.log(firstName);
  //   console.log(lastName);
  //   console.log(emailId);
  // }, [firstName, lastName, emailId]);

  const saveEmployee = (e) => {
    e.preventDefault();
    let employee = { 
      firstName: firstName,
      lastName: lastName,
      emailId: emailId
    }
    // alert(validateInputs());
    // alert("employee --> " + JSON.stringify(employee));

    if (validateInputs()) {
      // alert("success");
      EmployeeService.createEmployee(employee).then(() => navigate("/"));
    }
    // navigate("/");
  }

  const validateInputs = () => {
    if (firstName !== "" && lastName !== "" && emailId !== "") {
      return true;
    }

    return false;
  }

  return (
    <div>
      <div className="container">
        <div className="row mt-5">
          <div className="card col-md-6 offset-md-3">
            <h3 className="text-center">Add Employee</h3>
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
                <button type="submit" className="btn btn-success" onClick={(e) => saveEmployee(e)}>Save</button>
                <button className="btn btn-danger" onClick={() => { navigate("/") }}>Cancel</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateEmployee;