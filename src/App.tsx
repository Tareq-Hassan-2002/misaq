import { Navigate, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import StudentSetupPage from './pages/StudentSetupPage'
import CoursesPage from './pages/CoursesPage'
import CoursePage from './pages/CoursePage'
import LecturePage from './pages/LecturePage'
import DashboardPage from './pages/DashboardPage'
import CreatorDashboardPage from './pages/CreatorDashboardPage'
import CreatorCoursePage from './pages/CreatorCoursePage'
import CreatorLectureBuilderPage from './pages/CreatorLectureBuilderPage'
import CreatorPreviewLecturePage from './pages/CreatorPreviewLecturePage'
import UnauthorizedPage from './pages/UnauthorizedPage'
import NotFoundPage from './pages/NotFoundPage'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/unauthorized" element={<UnauthorizedPage />} />

      {/* Student Routes */}
      <Route
        path="/setup"
        element={
          <ProtectedRoute requiredRole="student">
            <StudentSetupPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/courses"
        element={
          <ProtectedRoute requiredRole="student">
            <CoursesPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/course/:courseId"
        element={
          <ProtectedRoute requiredRole="student">
            <CoursePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/lecture/:lectureId"
        element={
          <ProtectedRoute requiredRole="student">
            <LecturePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute requiredRole="student">
            <DashboardPage />
          </ProtectedRoute>
        }
      />

      {/* Creator Routes */}
      <Route
        path="/creator"
        element={
          <ProtectedRoute requiredRole="admin">
            <CreatorDashboardPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/creator/course/:courseId"
        element={
          <ProtectedRoute requiredRole="admin">
            <CreatorCoursePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/creator/course/:courseId/lecture/:lectureId/builder"
        element={
          <ProtectedRoute requiredRole="admin">
            <CreatorLectureBuilderPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/creator/course/:courseId/lecture/:lectureId"
        element={
          <ProtectedRoute requiredRole="admin">
            <CreatorLectureBuilderPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/creator/preview/lecture/:lectureId"
        element={
          <ProtectedRoute requiredRole="admin">
            <CreatorPreviewLecturePage />
          </ProtectedRoute>
        }
      />

      {/* Error Routes */}
      <Route path="/404" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  )
}

export default App
