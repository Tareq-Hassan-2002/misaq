import { Link } from 'react-router-dom'
import Button from '../ui/Button/Button'
import type { CreatorLecture } from '../../creator/types'
import CreatorLectureCard from './CreatorLectureCard'

interface LectureListProps {
  lectures: CreatorLecture[]
  courseId: string
}

const LectureList = ({ lectures, courseId }: LectureListProps) => {
  return (
    <section className="creator-lecture-list">
      <div className="creator-lecture-list__header">
        <h2>المحاضرات</h2>
        <Link to={`/creator/course/${courseId}/lecture/${lectures[0]?.id ?? 'new-lecture'}`}>
          <Button variant="primary">إضافة محاضرة</Button>
        </Link>
      </div>

      {lectures.length > 0 ? (
        <div className="creator-lecture-list__items">
          {lectures.map((lecture) => (
            <CreatorLectureCard key={lecture.id} lecture={lecture} courseId={courseId} />
          ))}
        </div>
      ) : (
        <p className="creator-lecture-list__empty">لا توجد محاضرات في هذه المادة بعد.</p>
      )}
    </section>
  )
}

export default LectureList
