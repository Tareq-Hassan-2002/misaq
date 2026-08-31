import { useNavigate } from 'react-router-dom'
import Badge from '../components/ui/Badge/Badge'
import Button from '../components/ui/Button/Button'
import Card from '../components/ui/Card/Card'
import ProgressBar from '../components/ui/ProgressBar/ProgressBar'
import { getCourses, getLectures } from '../contentStorage'
import { getCompletedLectures } from '../utils/learningStorage'
import MainLayout from '../layouts/MainLayout'
import './DashboardPage.css'

const DashboardPage = () => {
  const navigate = useNavigate()
  const completedLectureIds = getCompletedLectures()
  const courses = getCourses()
  const lectures = getLectures()

  const courseSummaries = courses.map((course) => {
    const courseLectures = lectures.filter((lecture) => lecture.courseId === course.id)
    const totalLectures = courseLectures.length > 0 ? courseLectures.length : course.lectureCount
    const completedLectures = courseLectures.filter((lecture) => completedLectureIds.includes(lecture.id)).length
    const progressPercentage = totalLectures > 0 ? Math.round((completedLectures / totalLectures) * 100) : 0
    const nextLecture = courseLectures.find((lecture) => !completedLectureIds.includes(lecture.id)) ?? null

    return {
      course,
      totalLectures,
      completedLectures,
      progressPercentage,
      nextLecture,
    }
  })

  const totalCourses = courses.length
  const totalCompletedLectures = lectures.filter((lecture) => completedLectureIds.includes(lecture.id)).length
  const averageProgress =
    courseSummaries.length > 0
      ? Math.round(courseSummaries.reduce((sum, item) => sum + item.progressPercentage, 0) / courseSummaries.length)
      : 0

  const recentActivities = [...completedLectureIds]
    .map((lectureId) => lectures.find((lecture) => lecture.id === lectureId))
    .filter((lecture): lecture is (typeof lectures)[number] => Boolean(lecture))
    .slice(-3)
    .reverse()

  const continueLecture = lectures.find((lecture) => !completedLectureIds.includes(lecture.id)) ?? null

  return (
    <MainLayout>
      <section className="page-shell dashboard-page">
        <div className="container dashboard-page__container">
          <header className="dashboard-page__hero">
            <div>
              <p className="dashboard-page__eyebrow">لوحة الطالب</p>
              <h1>مرحبًا بك في مساق</h1>
            </div>

            <div className="dashboard-page__summary">
              <Badge variant="primary">مستوى التزامك اليومي</Badge>
              <p>
                لديك {totalCompletedLectures} محاضرة مكتملة من أصل {lectures.length} محاضرات في المساق الحالي.
              </p>
            </div>
          </header>

          <section className="dashboard-page__stats" aria-label="إحصائيات الطالب">
            <Card className="dashboard-stat" padding="lg">
              <span className="dashboard-stat__label">عدد المواد</span>
              <strong>{totalCourses}</strong>
            </Card>

            <Card className="dashboard-stat" padding="lg">
              <span className="dashboard-stat__label">عدد المحاضرات المكتملة</span>
              <strong>{totalCompletedLectures}</strong>
            </Card>

            <Card className="dashboard-stat" padding="lg">
              <span className="dashboard-stat__label">متوسط التقدم</span>
              <strong>{averageProgress}%</strong>
            </Card>
          </section>

          <section className="dashboard-page__section">
            <div className="dashboard-page__section-header">
              <h2>المواد</h2>
              <Button variant="secondary" onClick={() => navigate('/courses')}>
                استعراض جميع المواد
              </Button>
            </div>

            <div className="dashboard-page__courses">
              {courseSummaries.map(({ course, totalLectures, completedLectures, progressPercentage, nextLecture }) => (
                <Card key={course.id} className="dashboard-course-card" padding="lg" hoverable>
                  <div className="dashboard-course-card__header">
                    <div>
                      <p className="dashboard-course-card__code">{course.code}</p>
                      <h3>{course.name}</h3>
                    </div>
                    <Badge variant={progressPercentage >= 70 ? 'success' : progressPercentage >= 40 ? 'info' : 'warning'}>
                      {progressPercentage}%
                    </Badge>
                  </div>

                  <p className="dashboard-course-card__description">{course.description}</p>

                  <div className="dashboard-course-card__meta">
                    <span>{totalLectures} محاضرات</span>
                    <span>·</span>
                    <span>{completedLectures} مكتملة</span>
                  </div>

                  <ProgressBar value={completedLectures} max={totalLectures} showLabel size="md" />

                  <div className="dashboard-course-card__footer">
                    <Button variant="ghost" onClick={() => navigate(`/course/${course.id}`)}>
                      تفاصيل المادة
                    </Button>

                    {nextLecture ? (
                      <Button variant="primary" onClick={() => navigate(`/lecture/${nextLecture.id}`)}>
                        متابعة
                      </Button>
                    ) : (
                      <Badge variant="success">مكتمل</Badge>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <section className="dashboard-page__lower-grid">
            <div className="dashboard-page__activity">
              <div className="dashboard-page__section-header">
                <h2>آخر نشاط</h2>
              </div>

              {recentActivities.length > 0 ? (
                <div className="dashboard-page__activity-list">
                  {recentActivities.map((lecture) => (
                    <div key={lecture.id} className="dashboard-page__activity-item">
                      <span className="dashboard-page__activity-check">✓</span>
                      <div>
                        <strong>{lecture.title}</strong>
                        <p>{lecture.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="dashboard-page__empty">لا يوجد تقدم حتى الآن. ابدأ بمراجعة أول محاضرة وتابع رحلتك.</p>
              )}
            </div>

            <aside className="dashboard-page__cta">
              <Card className="dashboard-cta-card" padding="lg">
                <h3>متابعة التعلم</h3>
                <p>واصل رحلتك في المساق واستمر في التقدم خطوة بخطوة.</p>
                <Button
                  variant="primary"
                  onClick={() => {
                    if (continueLecture) {
                      navigate(`/lecture/${continueLecture.id}`)
                      return
                    }

                    navigate('/courses')
                  }}
                >
                  متابعة التعلم
                </Button>
              </Card>
            </aside>
          </section>
        </div>
      </section>
    </MainLayout>
  )
}

export default DashboardPage
