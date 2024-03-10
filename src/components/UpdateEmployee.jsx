import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const UpdateEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    id: id,
    firstName: "",
    lastName: "",
    emailId: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await EmployeeService.getEmployeeById(employee.id);
        setEmployee(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const updateEmployee = (e) => {
    e.preventDefault();

    if (!employee.firstName || !employee.lastName || !employee.emailId) {
      alert('All fields are required', 'Error');
      return;
    }

    console.log(employee);
    EmployeeService.updateEmployee(employee, id)
      .then((response) => {
        navigate("/employeeList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
      <div className="form-container">
        <h1>Update Employee</h1>
        <div className="items-center justify-center h-14 w-full my-4">
          <label htmlFor="firstName">First Name</label>
          <input
              type="text"
              name="firstName"
              value={employee.firstName}
              onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label htmlFor="lastName">Last Name</label>
          <input
              type="text"
              name="lastName"
              value={employee.lastName}
              onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label htmlFor="emailId">Email</label>
          <input
              type="email"
              name="emailId"
              value={employee.emailId}
              onChange={(e) => handleChange(e)}
          />
        </div>

          <button onClick={updateEmployee}>Update</button>
          <button
              onClick={() => navigate("/employeeList")}
          >
            Cancel
          </button>

      </div>
  );
};

export default UpdateEmployee;
