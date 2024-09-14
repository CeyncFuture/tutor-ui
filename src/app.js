import React, {useEffect} from 'react';
import routes from '../src/routes';
import Header from "./components/header";
import Footer from "./components/footer";
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
      <Footer />
    </BrowserRouter>
  );
}

export default App;
