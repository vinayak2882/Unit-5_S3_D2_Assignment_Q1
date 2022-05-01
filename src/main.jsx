import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {IsAuthContext,IsAuthContextProvider} from "./context/IsAuth"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <IsAuthContextProvider>
      <App />
    </IsAuthContextProvider>
  </React.StrictMode>
);
