import { Link, useParams } from 'react-router-dom'
import Button from '../components/ui/Button/Button'
import Card from '../components/ui/Card/Card'
import LectureCard from '../components/lecture/LectureCard'
import MainLayout from '../layouts/MainLayout'
import { getCourse, getLectures } from '../contentStorage'
import './CoursePage.css'

const CoursePage = () => {
  const { courseId } = useParams()

  const course = courseId ? getCourse(courseId) : undefined
  const courseLectures = courseId ? getLectures(courseId) : []

  if (!course) {
    return (
      <MainLayout>
        <section className="page-shell">
          <div className="container page-shell__content page-shell__content--centered">
            <h1>المادة غير موجودة</h1>
            <p>لا توجد مادة تطابق هذا الرابط في بيانات مساق الحالية.</p>
            <Link to="/courses">
              <Button variant="primary">العودة إلى المواد</Button>
            </Link>
          </div>
        </section>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <section className="page-shell">
        <div className="container">
          <Card padding="lg" className="course-detail">
            <div className="section-heading">
              <p className="section-kicker">{course.code}</p>
              <h1>{course.name}</h1>
            </div>

            <p className="course-detail__description">{course.description}</p>

            <div className="course-detail__meta">
              <span>{course.lectureCount} محاضرة</span>
              <span>·</span>
              <span>{course.publishedLectureCount} منشورة</span>
              <span>·</span>
              <span>{course.status === 'active' ? 'نشطة' : 'غير نشطة'}</span>
            </div>

            <div className="course-detail__section">
              <h3>محاضرات المادة</h3>

              {courseLectures.length > 0 ? (
                <div className="course-detail__lecture-list">
                  {courseLectures.map((lecture) => (
                    <LectureCard key={lecture.id} lecture={lecture} />
                  ))}
                </div>
              ) : (
                <p className="course-detail__empty">لا توجد محاضرات متاحة لهذه المادة حاليًا.</p>
              )}
            </div>

            <Link to="/courses">
              <Button variant="secondary">العودة إلى موادي</Button>
            </Link>
          </Card>
        </div>
      </section>
    </MainLayout>
  )
}

export default CoursePage
