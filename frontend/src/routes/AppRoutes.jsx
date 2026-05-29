import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardPage from "../pages/DashboardPage";
import LoginPage from "../pages/LoginPage";
import ProtectedRoute from "./ProtectedRoute";
import CreateTaskPage from "../pages/CreateTaskPage";

export default function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/login"
          element={<LoginPage />}
        />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />

<    Route
       path="/tasks/create"
          element={
           <ProtectedRoute>
            <CreateTaskPage />
    </ProtectedRoute>
  }
/>

      </Routes>

    </BrowserRouter>
  );
}