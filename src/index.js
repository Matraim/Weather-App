import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GppMaybeIcon from '@mui/icons-material/GppMaybe';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer position="bottom-left" limit={2} icon={<GppMaybeIcon />}  />
    <App />
  </React.StrictMode>
);
