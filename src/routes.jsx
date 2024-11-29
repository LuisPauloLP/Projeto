import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/login";
//import Home from "./pages/home/home";
import Appointments from "./pages/appointments/appointments";
//import Notifications from "./pages/notifications/notifications";
import Signup from "./pages/signup/signup";
//import Config from "./pages/config/config";

import UserSignup from "./pages/signup/users/users.jsx";
import UserCreate from "./pages/signup/users/create.jsx";
import UserUpdate from "./pages/signup/users/update/[pid].jsx";
import UserRead from "./pages/signup/users/read/[pid].jsx";
import UserDelete from "./pages/signup/users/delete/[pid].jsx";

import StudentSignup from "./pages/signup/students/students.jsx";
import StudentCreate from "./pages/signup/students/create.jsx";
import StudentUpdate from "./pages/signup/students/update/[pid].jsx";
import StudentRead from "./pages/signup/students/read/[pid].jsx";
import StudentDelete from "./pages/signup/students/delete/[pid].jsx";

import ProfessionalSignup from "./pages/signup/professionals/professionals.jsx";
import ProfessionalCreate from "./pages/signup/professionals/create.jsx";
import ProfessionalUpdate from "./pages/signup/professionals/update/[pid].jsx";
import ProfessionalRead from "./pages/signup/professionals/read/[pid].jsx";
import ProfessionalDelete from "./pages/signup/professionals/delete/[pid].jsx";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}></Route>
                 {/* <Route path="/home" element={<Home />}></Route> */}
                <Route path="/appointments" element={<Appointments />}></Route>
                {/* <Route path="/notifications" element={<Notifications />}></Route> */}
                <Route path="/signup" element={<Signup />}></Route>
                {/* <Route path="/config" element={<Config />}></Route> */}

                <Route path="/signup/users" element={<UserSignup />} />
                <Route path="/signup/users/create" element={<UserCreate />} />
                <Route path="/signup/users/update/:pid" element={<UserUpdate />} />
                <Route path="/signup/users/read/:pid" element={<UserRead />} />
                <Route path="/signup/users/delete/:pid" element={<UserDelete />} />

                <Route path="/signup/students" element={<StudentSignup />} />
                <Route path="/signup/students/create" element={<StudentCreate />} />
                <Route path="/signup/students/update/:pid" element={<StudentUpdate />} />
                <Route path="/signup/students/read/:pid" element={<StudentRead />} />
                <Route path="/signup/students/delete/:pid" element={<StudentDelete />} />

                <Route path="/signup/professionals" element={<ProfessionalSignup />} />
                <Route path="/signup/professionals/create" element={<ProfessionalCreate />} />
                <Route path="/signup/professionals/update/:pid" element={<ProfessionalUpdate />} />
                <Route path="/signup/professionals/read/:pid" element={<ProfessionalRead />} />
                <Route path="/signup/professionals/delete/:pid" element={<ProfessionalDelete />} />
                {/* <Route path="/signup/professionals" element={<ProfessionalSignup />} />
                <Route path="/signup/students" element={<StudentSignup />} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;