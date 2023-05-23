import { Route, Routes } from "react-router-dom";

import Login from "../pages/Login";

import Signup from "../pages/signup";
import Home from "../pages/Home";
import PrivateRoute from "./privateroute";


export default function Allroutes(){
    return(
        <Routes>
      
      <Route path="/" element={<PrivateRoute><Home/></PrivateRoute>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
     
      
    </Routes>
    )
}