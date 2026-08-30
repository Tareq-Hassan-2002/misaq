import Button from '../components/ui/Button/Button'
import Card from '../components/ui/Card/Card'
import Badge from '../components/ui/Badge/Badge'
import MainLayout from '../layouts/MainLayout'
import { creatorCourses } from '../creator/data'
import './CreatorDashboardPage.css'

const CreatorDashboardPage = () => {
  return (
    <MainLayout>
      <section className="page-shell creator-dashboard">
        <div className="container creator-dashboard__container">
          <header className="creator-dashboard__header">
            <div>
              <p className="creator-dashboard__eyebrow">Content Creator</p>
              <h1>لوحة منشئ المحتوى</h1>
            </div>

            <Button variant="primary">إضافة مادة</Button>
          </header>

          <section className="creator-dashboard__list" aria-label="قائمة المواد">
            {creatorCourses.map((course) => (
              <Card key={course.id} className="creator-course-card" padding="lg" hoverable>
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
            ))}
          </section>
        </div>
      </section>
    </MainLayout>
  )
}

export default CreatorDashboardPage
