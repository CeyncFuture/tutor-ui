import React from 'react';
import routes from '../src/routes';

function App() {
  return (
    <>
      <div className="header">Header</div>
      <main
        id="mainContent"
        className="main-content"
        role="main"
        tabIndex={-1}
      >
        {routes}
      </main>
      <div className="footer">Footer</div>
    </>
  );
}

export default App;
