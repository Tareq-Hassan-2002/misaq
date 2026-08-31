import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../components/ui/Button/Button'
import Card from '../components/ui/Card/Card'
import Badge from '../components/ui/Badge/Badge'
import MainLayout from '../layouts/MainLayout'
import { getCreatorCourses, saveCreatorCourses } from '../creator/contentBridge'
import './CreatorDashboardPage.css'

const CreatorDashboardPage = () => {
  const [courses, setCourses] = useState(() => getCreatorCourses())
  const navigate = useNavigate()

  const handleAddCourse = () => {
    const newCourseId = `creator-course-${Date.now()}`
    const newCourse = {
      id: newCourseId,
      code: `NEW-${String(Date.now()).slice(-4)}`,
      name: 'مادة جديدة',
      description: 'وصف المادة الجديد سيتم تحديثه لاحقًا.',
      status: 'draft' as const,
      lectureCount: 0,
      updatedAt: new Date().toISOString().slice(0, 10),
      lectures: [],
    }

    const nextCourses = [newCourse, ...courses]
    setCourses(nextCourses)
    saveCreatorCourses(nextCourses)
    navigate(`/creator/course/${newCourseId}`)
  }

  return (
    <MainLayout>
      <section className="page-shell creator-dashboard">
        <div className="container creator-dashboard__container">
          <header className="creator-dashboard__header">
            <div>
              <p className="creator-dashboard__eyebrow">Content Creator</p>
              <h1>لوحة منشئ المحتوى</h1>
            </div>

            <Button variant="primary" onClick={handleAddCourse}>إضافة مادة</Button>
          </header>

          <section className="creator-dashboard__list" aria-label="قائمة المواد">
            {courses.map((course) => (
              <Link key={course.id} to={`/creator/course/${course.id}`} className="creator-course-card__link">
                <Card className="creator-course-card" padding="lg" hoverable>
                  <div className="creator-course-card__header">
                    <div>
                      <p className="creator-course-card__code">{course.code}</p>
                      <h3>{course.name}</h3>
                    </div>

                    <Badge variant={course.status === 'published' ? 'success' : 'warning'}>
                      {course.status === 'published' ? 'منشور' : 'مسودة'}
                    </Badge>
                  </div>

                  <p className="creator-course-card__description">{course.description}</p>

                  <div className="creator-course-card__meta">
                    <span>{course.lectureCount} محاضرات</span>
                    <span>·</span>
                    <span>آخر تحديث: {course.updatedAt}</span>
                  </div>
                </Card>
              </Link>
            ))}
          </section>
        </div>
      </section>
    </MainLayout>
  )
}

export default CreatorDashboardPage
