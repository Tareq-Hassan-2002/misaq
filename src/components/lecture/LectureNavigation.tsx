import { useNavigate } from 'react-router-dom'
import Button from '../ui/Button/Button'
import { lectures } from '../../data/lectureData'
import './LectureNavigation.css'

interface LectureNavigationProps {
  currentLectureId: string
}

const LectureNavigation = ({ currentLectureId }: LectureNavigationProps) => {
  const navigate = useNavigate()
  const currentIndex = lectures.findIndex((lecture) => lecture.id === currentLectureId)

  const previousLecture = currentIndex > 0 ? lectures[currentIndex - 1] : null
  const nextLecture = currentIndex >= 0 && currentIndex < lectures.length - 1 ? lectures[currentIndex + 1] : null

  return (
    <nav className="lecture-navigation" aria-label="تنقل بين المحاضرات">
      {previousLecture ? (
        <Button variant="secondary" onClick={() => navigate(`/lecture/${previousLecture.id}`)}>
          المحاضرة السابقة
        </Button>
      ) : (
        <span className="lecture-navigation__placeholder">لا توجد محاضرة سابقة</span>
      )}

      {nextLecture ? (
        <Button variant="primary" onClick={() => navigate(`/lecture/${nextLecture.id}`)}>
          المحاضرة التالية
        </Button>
      ) : (
        <span className="lecture-navigation__placeholder">لا توجد محاضرة تالية</span>
      )}
    </nav>
  )
}

export default LectureNavigation
