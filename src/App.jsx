import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './index.css';
import './App.css'
import Navbar from "./components/Navbar.jsx";
import EmployeeList from "./components/EmployeeList.jsx";
import AddEmployee from "./components/AddEmployee.jsx";
import UpdateEmployee from "./components/UpdateEmployee.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route index element={<EmployeeList />} />
                <Route path="/" element={<EmployeeList />}></Route>
                <Route path="/employeeList" element={<EmployeeList />} />
                <Route path="/employeeList/" element={<EmployeeList />} />
                <Route path="/addEmployee" element={<AddEmployee />} />
                <Route path="/editEmployee/:id" element={<UpdateEmployee />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
