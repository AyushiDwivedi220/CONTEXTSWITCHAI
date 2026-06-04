import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import DashboardPage from "../pages/DashboardPage";
import LoginPage from "../pages/LoginPage";
import CreateTaskPage from "../pages/CreateTaskPage";
import EditTaskPage from "../pages/EditTaskPage";
import WorkspacePage from "../pages/workspaces/WorkspacePage";

import ProtectedRoute from "./ProtectedRoute";

import ProjectsPage from "../pages/projects/ProjectsPage";
import CreateProjectPage from "../pages/projects/CreateProjectPage";
import EditProjectPage from "../pages/projects/EditProjectPage";
import ProjectDashboardPage from "../pages/projects/ProjectDashboardPage";
import WorkspaceDetailsPage from "../pages/workspaces/WorkspaceDetailsPage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route
          path="/login"
          element={<LoginPage />}
        />

        {/* Dashboard */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />

        {/* Tasks */}
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

        {/* Workspaces */}
        <Route
          path="/workspaces"
          element={
            <ProtectedRoute>
              <WorkspacePage />
            </ProtectedRoute>
          }
        />
      

      <Route
  path="/workspaces/:id"
  element={
    <ProtectedRoute>
      <WorkspaceDetailsPage />
    </ProtectedRoute>
  }
/>
        {/* Projects */}
        <Route
          path="/projects"
          element={
            <ProtectedRoute>
              <ProjectsPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/projects/create"
          element={
            <ProtectedRoute>
              <CreateProjectPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/projects/:id"
          element={
            <ProtectedRoute>
              <ProjectDashboardPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/projects/:id/edit"
          element={
            <ProtectedRoute>
              <EditProjectPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}