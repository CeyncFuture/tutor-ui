import { Route, Routes} from 'react-router-dom';
import {Navigate} from "react-router";
import Login from "../components/login";
import Register from "../components/register";
import Home from "../components/home";
import ErrorPage from "../components/errorPage";
import React from "react";
import Profile from "../components/Profile";

export default (
  <Routes>
    <Route element={<Login />} path="/login" />
    <Route element={<Register />} path="/register" />
    <Route element={<Home/>} path="/home" />
    <Route element={<Profile/>} path="/account" />
      <Route element={<Profile/>} path="/tutor/:tutorId" />
    <Route path="/" element={<Navigate to="/home" />} />
    <Route path="/*" element={<ErrorPage isNotfound={true}/>} />
  </Routes>
);
