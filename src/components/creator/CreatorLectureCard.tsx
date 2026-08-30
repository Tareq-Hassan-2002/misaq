import { Link } from 'react-router-dom'
import Button from '../ui/Button/Button'
import Card from '../ui/Card/Card'
import Badge from '../ui/Badge/Badge'
import type { CreatorLecture } from '../../creator/types'

interface CreatorLectureCardProps {
  lecture: CreatorLecture
  courseId: string
}

const CreatorLectureCard = ({ lecture, courseId }: CreatorLectureCardProps) => {
  return (
    <Card className="creator-lecture-card" padding="lg" hoverable>
      <div className="creator-lecture-card__header">
        <div>
          <p className="creator-lecture-card__order">المحاضرة {lecture.order}</p>
          <h3>{lecture.title}</h3>
        </div>

        <Badge variant={lecture.status === 'published' ? 'success' : 'warning'}>
          {lecture.status === 'published' ? 'منشورة' : 'مسودة'}
        </Badge>
      </div>

      <p>{lecture.description}</p>

      <div className="creator-lecture-card__footer">
        <span>{lecture.blocks.length} bloques</span>
        <Link to={`/creator/course/${courseId}/lecture/${lecture.id}`}>
          <Button variant="secondary">إدارة</Button>
        </Link>
      </div>
    </Card>
  )
}

export default CreatorLectureCard
