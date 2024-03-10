import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    id: "",
    firstName: "",
    lastName: "",
    emailId: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };

  const saveEmployee = (e) => {
    e.preventDefault();

    if (!employee.firstName || !employee.lastName || !employee.emailId) {
      alert('All fields are required', 'Error', { className: 'alert-danger' });
      return;
    }

    EmployeeService.saveEmployee(employee)
      .then((response) => {
        console.log(response);
        navigate("/employeeList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const reset = (e) => {
    e.preventDefault();
    setEmployee({
      id: "",
      firstName: "",
      lastName: "",
      emailId: "",
    });
  };

  return (
      <div className="form-container">
        <h1>Add New Employee</h1>
        <div className="items-center justify-center h-14 w-full my-4">
          <label htmlFor="firstName">First Name</label>
          <input
              type="text"
              name="firstName"
              value={employee.firstName}
              onChange={(e) => handleChange(e)}
              required
          />
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label htmlFor="lastName">Last Name</label>
          <input
              type="text"
              name="lastName"
              value={employee.lastName}
              onChange={(e) => handleChange(e)}
              required
          />
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label htmlFor="emailId" >Email</label>
          <input
              type="email"
              name="emailId"
              value={employee.emailId}
              onChange={(e) => handleChange(e)}
              required
          />
        </div>

        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button onClick={saveEmployee}>Save</button>
          <button onClick={reset}>Clear</button>
          <button
              onClick={() => navigate("/employeeList")}
          >
            Cancel
          </button>
        </div>
      </div>
  );
};

export default AddEmployee;
