import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Button from '../ui/Button/Button'
import Card from '../ui/Card/Card'
import { isLectureUnderstood, markLectureAsUnderstood, clearLectureUnderstanding } from '../../utils/learningStorage'
import './UnderstandingCheck.css'

const UnderstandingCheck = () => {
  const { lectureId } = useParams()
  const [isUnderstood, setIsUnderstood] = useState(() => (lectureId ? isLectureUnderstood(lectureId) : false))

  const handleConfirmUnderstanding = () => {
    if (lectureId) {
      markLectureAsUnderstood(lectureId)
      setIsUnderstood(true)
    }
  }

  const handleNeedReview = () => {
    if (lectureId) {
      clearLectureUnderstanding(lectureId)
      setIsUnderstood(false)
    }
  }

  return (
    <Card className="lecture-understanding-check" padding="lg">
      <div className="lecture-understanding-check__header">
        <h3>هل أصبحت الفكرة واضحة؟</h3>
      </div>

      <div className="lecture-understanding-check__actions">
        <Button variant={isUnderstood ? 'primary' : 'secondary'} onClick={handleConfirmUnderstanding}>
          نعم، فهمت
        </Button>

        <Button variant="outline" onClick={handleNeedReview}>
          أحتاج إلى مراجعة
        </Button>
      </div>

      {isUnderstood && <p className="lecture-understanding-check__feedback">رائع! يمكنك المتابعة إلى المحاضرة التالية.</p>}
    </Card>
  )
}

export default UnderstandingCheck
