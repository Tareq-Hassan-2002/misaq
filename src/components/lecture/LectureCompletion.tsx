import { useState } from 'react'
import Button from '../ui/Button/Button'
import Card from '../ui/Card/Card'
import { isLectureCompleted, markLectureAsCompleted } from '../../utils/learningStorage'
import './LectureCompletion.css'

interface LectureCompletionProps {
  lectureId: string
  onCompleted?: () => void
}

const LectureCompletion = ({ lectureId, onCompleted }: LectureCompletionProps) => {
  const [completed, setCompleted] = useState<boolean>(isLectureCompleted(lectureId))

  const handleMarkCompleted = () => {
    markLectureAsCompleted(lectureId)
    setCompleted(true)
    onCompleted?.()
  }

  return (
    <Card className="lecture-completion" padding="lg">
      {completed ? (
        <div className="lecture-completion__status lecture-completion__status--done" aria-live="polite">
          <span className="lecture-completion__icon" aria-hidden="true">
            ✓
          </span>
          <span>مكتملة</span>
        </div>
      ) : (
        <>
          <div className="lecture-completion__status lecture-completion__status--pending" aria-live="polite">
            <span className="lecture-completion__icon" aria-hidden="true">
              □
            </span>
            <span>لم تكتمل المحاضرة</span>
          </div>

          <Button variant="primary" onClick={handleMarkCompleted}>
            أنهيت المحاضرة
          </Button>
        </>
      )}
    </Card>
  )
}

export default LectureCompletion
