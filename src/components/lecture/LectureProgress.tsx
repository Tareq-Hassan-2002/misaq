import ProgressBar from '../ui/ProgressBar/ProgressBar'
import './LectureProgress.css'

interface LectureProgressProps {
  completedLectures: number
  totalLectures: number
}

const LectureProgress = ({ completedLectures, totalLectures }: LectureProgressProps) => {
  const safeTotal = totalLectures > 0 ? totalLectures : 1
  const safeCurrent = Math.min(Math.max(completedLectures, 0), safeTotal)
  const percentage = (safeCurrent / safeTotal) * 100

  return (
    <div className="lecture-progress" aria-label="تقدم المحاضرة">
      <div className="lecture-progress__meta">
        <span>تقدم المحاضرة</span>
        <strong>
          {safeCurrent} من {safeTotal} محاضرات مكتملة
        </strong>
      </div>

      <ProgressBar value={safeCurrent} max={safeTotal} showLabel size="md" />

      <span className="lecture-progress__percent">{Math.round(percentage)}%</span>
    </div>
  )
}

export default LectureProgress
