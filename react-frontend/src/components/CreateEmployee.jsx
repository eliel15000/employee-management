import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const CreateEmployee = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const navigate = useNavigate();
  const params = useParams();

  // useEffect(() => {
  //   console.log(firstName);
  //   console.log(lastName);
  //   console.log(emailId);
  // }, [firstName, lastName, emailId]);

  useEffect(() => {
    if (params.id === "_add") {
      return;
    } else {
      EmployeeService.getEmployeeById(params.id).then((res) => {
        let emp = res.data;
        setFirstName(emp.firstName);
        setLastName(emp.lastName);
        setEmailId(emp.emailId);
      });
    }
  }, []);

  const saveOrUpdateEmployee = (e) => {
    e.preventDefault();
    let employee = { 
      firstName: firstName,
      lastName: lastName,
      emailId: emailId
    }
    // alert("employee --> " + JSON.stringify(employee));

    if (firstName !== "" && lastName !== "" && emailId !== "") {
      // alert("success");
      if (params.id === "_add") {
        EmployeeService.createEmployee(employee).then(() => navigate("/"));
      } else {
        EmployeeService.updateEmployee(employee, params.id).then(() => navigate("/"));
      }
    }
  }

  const getTitle = () => {
    if (params.id === "_add") {
      return <h3 className="text-center mt-3">Add Employee</h3>;
    } else {
      return <h3 className="text-center mt-3">Update Employee</h3>
    }
  }

  return (
    <div>
      <div className="container">
        <div className="row mt-5">
          <div className="card col-md-6 offset-md-3">
            {/* <h3 className="text-center mt-3">Add Employee</h3> */}
            { getTitle() }
            <div className="card-body">

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
                  <button type="submit" className="btn btn-success" onClick={(e) => saveOrUpdateEmployee(e)}>Save</button>
                  <button className="btn btn-danger" onClick={() => { navigate("/") }}>Cancel</button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateEmployee;