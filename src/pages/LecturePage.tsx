import { Link, useParams } from 'react-router-dom'
import Badge from '../components/ui/Badge/Badge'
import Button from '../components/ui/Button/Button'
import Card from '../components/ui/Card/Card'
import MainLayout from '../layouts/MainLayout'
import { lectures } from '../data/lectureData'

const LecturePage = () => {
  const { lectureId } = useParams()

  const lecture = lectures.find((item) => item.id === lectureId)

  if (!lecture) {
    return (
      <MainLayout>
        <section className="page-shell">
          <div className="container page-shell__content page-shell__content--centered">
            <h1>المحاضرة غير موجودة</h1>
            <p>الرجاء التحقق من الرابط أو العودة إلى صفحة المادة.</p>
            <Link to="/courses">
              <Button variant="primary">العودة إلى المادة</Button>
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
          <Card padding="lg" className="lecture-detail">
            <div className="section-heading">
              <p className="section-kicker">المحاضرة {lecture.order}</p>
              <h1>{lecture.title}</h1>
            </div>

            <div className="lecture-detail__meta">
              <Badge variant={lecture.status === 'published' ? 'success' : 'warning'}>
                {lecture.status === 'published' ? 'منشورة' : 'مسودة'}
              </Badge>
            </div>

            <p className="lecture-detail__description">{lecture.description}</p>

            <div className="lecture-detail__placeholder">
              <h3>محتوى المحاضرة</h3>
              <p>سيتم بناء محتوى المحاضرة هنا.</p>
            </div>

            <Link to={`/course/${lecture.courseId}`}>
              <Button variant="secondary">العودة إلى المادة</Button>
            </Link>
          </Card>
        </div>
      </section>
    </MainLayout>
  )
}

export default LecturePage
