// src/main.jsx
import React from 'react'; // Make sure React is imported
import ReactDOM from 'react-dom/client'; // Use ReactDOM for createRoot
import App from './App.jsx';
import './index.css';
import { AuthProvider } from './context/AuthContext'; // Import AuthProvider

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider> {/* THIS IS THE CRUCIAL WRAPPER */}
      <App />
    </AuthProvider>
  </React.StrictMode>,
);