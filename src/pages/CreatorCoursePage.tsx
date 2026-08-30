import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button/Button'
import MainLayout from '../layouts/MainLayout'
import { creatorCourses } from '../creator/data'
import CourseHeader from '../components/creator/CourseHeader'
import LectureList from '../components/creator/LectureList'
import './CreatorCoursePage.css'

const CreatorCoursePage = () => {
  const { courseId } = useParams()

  const course = creatorCourses.find((item) => item.id === courseId)

  if (!course) {
    return (
      <MainLayout>
        <section className="page-shell">
          <div className="container page-shell__content page-shell__content--centered">
            <h1>المادة غير موجودة</h1>
            <p>لا توجد مادة تطابق هذا الرابط داخل نظام المنشئ.</p>
            <Link to="/creator">
              <Button variant="primary">العودة إلى لوحة المنشئ</Button>
            </Link>
          </div>
        </section>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <section className="page-shell creator-course-page">
        <div className="container creator-course-page__container">
          <CourseHeader course={course} />
          <LectureList lectures={course.lectures} />

          <div className="creator-course-page__actions">
            <Link to="/creator">
              <Button variant="secondary">العودة إلى لوحة المنشئ</Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}

export default CreatorCoursePage
