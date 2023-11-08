import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css"
//import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
//import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import { Provider } from 'react-redux';
import { store } from './store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}>
    <App />
  </Provider>
);
