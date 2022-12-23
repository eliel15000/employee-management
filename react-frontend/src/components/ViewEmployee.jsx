import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const ViewEmployee = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    EmployeeService.getEmployeeById(params.id).then((res) => {
      let emp = res.data;
      setFirstName(emp.firstName);
      setLastName(emp.lastName);
      setEmailId(emp.emailId);
    });
  }, [params]);

  return (
    <div>
      <br />
      <div className="card col-md-6 offset-md-3">
        <h2 className="text-center mt-3">View Employee Details</h2>
        <div className="card-body">
          <div className="row">
            <h5>Employee First Name: { firstName }</h5>
          </div>
          <br />
          <div className="row">
            <h5>Employee Last Name: { lastName }</h5>
          </div>
          <br />
          <div className="row">
            <h5>Employee Email ID: { emailId }</h5>
          </div>

        </div>
      </div>
      <button className="btn btn-secondary offset-md-3 mt-3" onClick={() => navigate("/")}>Back</button>
    </div>
  )
}

export default ViewEmployee;