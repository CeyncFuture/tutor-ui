import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Navigate} from "react-router";

export default (
  <BrowserRouter >
    <Routes>
      <Route element={<h2>login</h2>} path="/login" />
      <Route element={<h2>register</h2>} path="/register" />
      <Route element={<h2>home</h2>} path="/home" />
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/*" element={<h2>Not Found</h2>} />
    </Routes>
  </BrowserRouter>
);
