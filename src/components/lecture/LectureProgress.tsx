import ProgressBar from '../ui/ProgressBar/ProgressBar'
import './LectureProgress.css'

interface LectureProgressProps {
  currentLecture: number
  totalLectures: number
}

const LectureProgress = ({ currentLecture, totalLectures }: LectureProgressProps) => {
  const safeTotal = totalLectures > 0 ? totalLectures : 1
  const safeCurrent = Math.min(Math.max(currentLecture, 1), safeTotal)
  const percentage = (safeCurrent / safeTotal) * 100

  return (
    <div className="lecture-progress" aria-label="تقدم المحاضرة">
      <div className="lecture-progress__meta">
        <span>تقدم المحاضرة</span>
        <strong>
          {safeCurrent}/{safeTotal}
        </strong>
      </div>

      <ProgressBar value={safeCurrent} max={safeTotal} showLabel size="md" />

      <span className="lecture-progress__percent">{Math.round(percentage)}%</span>
    </div>
  )
}

export default LectureProgress
