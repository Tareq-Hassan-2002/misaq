import Badge from '../ui/Badge/Badge'
import type { Lecture } from '../../types'
import './LectureHeader.css'

interface LectureHeaderProps {
  lecture: Lecture
}

const LectureHeader = ({ lecture }: LectureHeaderProps) => {
  return (
    <header className="lecture-header">
      <div className="lecture-header__meta">
        <span className="lecture-header__course">شبكات الحاسوب 2</span>
        <span className="lecture-header__divider">·</span>
        <span>المحاضرة {lecture.order}</span>
      </div>

      <h1>{lecture.title}</h1>
      <p>{lecture.description}</p>

      <Badge variant={lecture.status === 'published' ? 'success' : 'warning'}>
        {lecture.status === 'published' ? 'منشورة' : 'مسودة'}
      </Badge>
    </header>
  )
}

export default LectureHeader
