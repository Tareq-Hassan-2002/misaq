import Badge from '../ui/Badge/Badge'
import Card from '../ui/Card/Card'
import type { CreatorCourse } from '../../creator/types'

interface CourseHeaderProps {
  course: CreatorCourse
}

const CourseHeader = ({ course }: CourseHeaderProps) => {
  return (
    <Card className="creator-course-header" padding="lg">
      <div className="creator-course-header__meta">
        <span className="creator-course-header__code">{course.code}</span>
        <Badge variant={course.status === 'published' ? 'success' : 'warning'}>
          {course.status === 'published' ? 'منشور' : 'مسودة'}
        </Badge>
      </div>

      <h1>{course.name}</h1>
      <p>{course.description}</p>

      <div className="creator-course-header__stats">
        <span>{course.lectureCount} محاضرات</span>
        <span>·</span>
        <span>آخر تحديث: {course.updatedAt}</span>
      </div>
    </Card>
  )
}

export default CourseHeader
