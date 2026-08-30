import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Button from '../components/ui/Button/Button'
import LectureHeader from '../components/lecture/LectureHeader'
import LectureNavigation from '../components/lecture/LectureNavigation'
import LectureProgress from '../components/lecture/LectureProgress'
import LectureCompletion from '../components/lecture/LectureCompletion'
import UnderstandingCheck from '../components/lecture/UnderstandingCheck'
import LectureRenderer from '../components/lecture/LectureRenderer'
import MainLayout from '../layouts/MainLayout'
import { lectures } from '../data/lectureData'
import { getCompletedLectures } from '../utils/learningStorage'

const LecturePage = () => {
  const { lectureId } = useParams()
  const [, setCompletionTick] = useState(0)

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

  const courseLectures = lectures.filter((item) => item.courseId === lecture?.courseId)
  const completedCount = courseLectures.filter((item) => getCompletedLectures().includes(item.id)).length

  return (
    <MainLayout>
      <section className="page-shell">
        <div className="container">
          <LectureProgress completedLectures={completedCount} totalLectures={courseLectures.length} />

          <LectureHeader lecture={lecture} />

          <LectureRenderer blocks={lecture.blocks ?? []} />

          <LectureCompletion key={lecture.id} lectureId={lecture.id} onCompleted={() => setCompletionTick((value) => value + 1)} />

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
