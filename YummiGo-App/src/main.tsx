import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import { AuthProvider } from './context/AuthContext';

// Create router instance
const router = createHashRouter([
  {
    path: "/*",
    element: <App />,
  }
]);

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error("Root element not found");

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    {/* Wrap the application with the AuthProvider to enable authentication context throughout the app */}
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

// Ensure any other essential configurations for the app are maintained, such as service workers, etc.