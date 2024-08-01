import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/core.scss';
import App from './app';
import session from './utils/session';
import setInitialState from './utils/setInitialState';
import configureStore from './store/configureStore';

session((state) => {
  const initialState = setInitialState(state);
  const store = configureStore(initialState);
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App
        store={store}
      />
    </React.StrictMode>
  );
});
