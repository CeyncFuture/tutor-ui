import { Route, Routes} from 'react-router-dom';
import {Navigate} from "react-router";
import Login from "../components/login";
import Register from "../components/Register";

export default (
  <Routes>
    <Route element={<Login />} path="/login" />
    <Route element={<Register />} path="/register" />
    <Route element={<h2>home</h2>} path="/home" />
    <Route element={<h2>Account</h2>} path="/account" />
    <Route path="/" element={<Navigate to="/home" />} />
    <Route path="/*" element={<h2>Not Found</h2>} />
  </Routes>
);
