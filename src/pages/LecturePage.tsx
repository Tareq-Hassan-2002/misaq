import { Link, useParams } from 'react-router-dom'
import Button from '../components/ui/Button/Button'
import LectureHeader from '../components/lecture/LectureHeader'
import LectureNavigation from '../components/lecture/LectureNavigation'
import LectureProgress from '../components/lecture/LectureProgress'
import UnderstandingCheck from '../components/lecture/UnderstandingCheck'
import LectureRenderer from '../components/lecture/LectureRenderer'
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
          <LectureProgress currentLecture={lecture.order} totalLectures={lectures.length} />

          <LectureHeader lecture={lecture} />

          <LectureRenderer blocks={lecture.blocks ?? []} />

          <UnderstandingCheck />

          <LectureNavigation currentLectureId={lecture.id} />

          <Link to={`/course/${lecture.courseId}`}>
            <Button variant="secondary">العودة إلى المادة</Button>
          </Link>
        </div>
      </section>
    </MainLayout>
  )
}

export default LecturePage
