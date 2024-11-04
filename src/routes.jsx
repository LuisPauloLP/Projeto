import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/login";
import Home from "./pages/home/home";
import Appointments from "./pages/appointments/appointments";
import Notifications from "./pages/notifications/notifications";
import SignUp from "./pages/signup/singup";
import Config from "./pages/config/config";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/appointments" element={<Appointments />}></Route>
                <Route path="/notifications" element={<Notifications />}></Route>
                <Route path="/signup" element={<SignUp />}></Route>
                <Route path="/config" element={<Config />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;