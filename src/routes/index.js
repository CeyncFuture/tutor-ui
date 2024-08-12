import { Route, Routes} from 'react-router-dom';
import {Navigate} from "react-router";
import Login from "../components/login";
import Register from "../components/register";
import Home from "../components/home";
import ErrorPage from "../components/errorPage";
import React from "react";

export default (
  <Routes>
    <Route element={<Login />} path="/login" />
    <Route element={<Register />} path="/register" />
    <Route element={<Home/>} path="/home" />
    <Route element={<h2>Account</h2>} path="/account" />
    <Route path="/" element={<Navigate to="/home" />} />
    <Route path="/*" element={<ErrorPage isNotfound={true}/>} />
  </Routes>
);
