import { useNavigate } from 'react-router-dom'
import Button from '../ui/Button/Button'
import Card from '../ui/Card/Card'
import Badge from '../ui/Badge/Badge'
import type { Lecture } from '../../types'
import './LectureCard.css'

interface LectureCardProps {
  lecture: Lecture
}

const LectureCard = ({ lecture }: LectureCardProps) => {
  const navigate = useNavigate()

  return (
    <Card className="lecture-card" padding="lg" hoverable>
      <div className="lecture-card__header">
        <span className="lecture-card__number">المحاضرة {lecture.order}</span>
        <Badge variant={lecture.status === 'published' ? 'success' : 'warning'}>
          {lecture.status === 'published' ? 'منشورة' : 'مسودة'}
        </Badge>
      </div>

      <h3>{lecture.title}</h3>
      <p>{lecture.description}</p>

      <Button variant="primary" onClick={() => navigate(`/lecture/${lecture.id}`)}>
        ابدأ المحاضرة
      </Button>
    </Card>
  )
}

export default LectureCard
