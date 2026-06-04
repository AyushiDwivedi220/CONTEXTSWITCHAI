import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import DashboardPage from "../pages/DashboardPage";
import LoginPage from "../pages/LoginPage";
import CreateTaskPage from "../pages/CreateTaskPage";
import EditTaskPage from "../pages/EditTaskPage";

import ProtectedRoute from "./ProtectedRoute";

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

        <Route
          path="/tasks/create"
          element={
            <ProtectedRoute>
              <CreateTaskPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/tasks/:id/edit"
          element={
            <ProtectedRoute>
              <EditTaskPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}