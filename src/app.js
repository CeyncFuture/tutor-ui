import React from 'react';
import routes from '../src/routes';
import Header from "./components/header";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter >
      <Header />
      <main
        id="mainContent"
        className="main-content"
        role="main"
        tabIndex={-1}
      >
        {routes}
      </main>
      <div className="footer">Footer</div>
    </BrowserRouter>
  );
}

export default App;
