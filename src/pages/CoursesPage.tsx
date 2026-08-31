import { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Button from '../components/ui/Button/Button'
import CourseCard from '../components/course/CourseCard'
import MainLayout from '../layouts/MainLayout'
import { universities } from '../data/academicData'
import { getCourses, getStudentSelection } from '../contentStorage'
import type { StudentAcademicSelection } from '../types'
import './CoursesPage.css'

const CoursesPage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const selection = (location.state?.selection as StudentAcademicSelection | undefined) ?? getStudentSelection() ?? undefined
  const courses = getCourses()

  useEffect(() => {
    if (!selection) {
      navigate('/setup', { replace: true })
    }
  }, [selection, navigate])

  if (!selection) {
    return null
  }

  const selectedUniversity = universities.find(
    (university) => university.id === selection.universityId,
  )
  const selectedFaculty = selectedUniversity?.faculties.find(
    (faculty) => faculty.id === selection.facultyId,
  )

  const filteredCourses = courses.filter(
    (course) =>
      course.universityId === selection.universityId &&
      course.facultyId === selection.facultyId &&
      course.year === selection.year &&
      course.semester ===
        (selection.semester === 'الفصل الأول' ? 'first' : 'second'),
  )

  return (
    <MainLayout>
      <section className="courses-page">
        <div className="container">
          <div className="section-heading courses-page__header">
            <p className="section-kicker">موادك هذا الفصل</p>
            <h2>{selectedFaculty?.name ?? 'موادك'}</h2>
            <p className="courses-page__path">
              {selectedUniversity?.name} · {selection.year} · {selection.semester}
            </p>
          </div>

          {filteredCourses.length > 0 ? (
            <div className="courses-page__grid">
              {filteredCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  onOpen={(courseId) => navigate(`/course/${courseId}`)}
                />
              ))}
            </div>
          ) : (
            <div className="courses-page__placeholder">
              <p>لا توجد مواد متاحة لهذا المسار حاليًا.</p>
              <Link to="/setup">
                <Button variant="secondary">تعديل المسار</Button>
              </Link>
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  )
}

export default CoursesPage
