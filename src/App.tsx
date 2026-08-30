import { Navigate, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import StudentSetupPage from './pages/StudentSetupPage'
import CoursesPage from './pages/CoursesPage'
import CoursePage from './pages/CoursePage'
import LecturePage from './pages/LecturePage'
import DashboardPage from './pages/DashboardPage'
import CreatorDashboardPage from './pages/CreatorDashboardPage'
import CreatorCoursePage from './pages/CreatorCoursePage'
import CreatorLectureBuilderPage from './pages/CreatorLectureBuilderPage'
import CreatorPreviewLecturePage from './pages/CreatorPreviewLecturePage'
import NotFoundPage from './pages/NotFoundPage'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/setup" element={<StudentSetupPage />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/course/:courseId" element={<CoursePage />} />
      <Route path="/lecture/:lectureId" element={<LecturePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/creator" element={<CreatorDashboardPage />} />
      <Route path="/creator/course/:courseId" element={<CreatorCoursePage />} />
      <Route path="/creator/course/:courseId/lecture/:lectureId/builder" element={<CreatorLectureBuilderPage />} />
      <Route path="/creator/course/:courseId/lecture/:lectureId" element={<CreatorLectureBuilderPage />} />
      <Route path="/creator/preview/lecture/:lectureId" element={<CreatorPreviewLecturePage />} />
      <Route path="/404" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  )
}

export default App
