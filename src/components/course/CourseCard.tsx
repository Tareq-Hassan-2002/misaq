import Button from '../ui/Button/Button'
import Card from '../ui/Card/Card'
import type { Course } from '../../types'
import './CourseCard.css'

interface CourseCardProps {
  course: Course
  onOpen: (courseId: string) => void
}

const CourseCard = ({ course, onOpen }: CourseCardProps) => {
  return (
    <Card className="course-card" padding="lg" hoverable>
      <div className="course-card__header">
        <span className="course-card__code">{course.code}</span>
        <span className={`course-card__status course-card__status--${course.status}`}>
          {course.status === 'active' ? 'نشطة' : 'غير نشطة'}
        </span>
      </div>

      <h3>{course.name}</h3>
      <p>{course.description}</p>

      <div className="course-card__meta">
        <span>{course.lectureCount} محاضرة</span>
        <span>·</span>
        <span>{course.publishedLectureCount} منشورة</span>
      </div>

      <Button variant="primary" onClick={() => onOpen(course.id)}>
        دخول إلى المادة
      </Button>
    </Card>
  )
}

export default CourseCard
