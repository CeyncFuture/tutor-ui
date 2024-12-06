import React, {useEffect} from 'react';
import routes from '../src/routes';
import Header from "./components/header";
import Test from "./components/test";
import Footer from "./components/footer";
import {BrowserRouter} from "react-router-dom";
import {NotificationContainer} from 'react-notifications';

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
      <NotificationContainer/>
      <div className='footer-wrapper'>
        <Footer />
      </div>
      <Test />
      <div className="footer">Footer</div>
    </BrowserRouter>
  );
}

export default App;
