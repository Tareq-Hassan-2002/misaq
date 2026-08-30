import Badge from '../../ui/Badge/Badge'
import Card from '../../ui/Card/Card'
import type { LectureBlock } from '../../../types'
import './ExerciseBlock.css'

interface ExerciseBlockProps {
  block: LectureBlock
}

const ExerciseBlock = ({ block }: ExerciseBlockProps) => {
  if (!block.exercise) {
    return null
  }

  return (
    <Card className="lecture-block lecture-block--exercise" padding="lg">
      <div className="lecture-block__header">
        <span className="lecture-block__label">تمرين</span>
        <Badge variant="info">ممارسة</Badge>
      </div>

      <p className="lecture-block__question">{block.exercise.question}</p>

      <div className="lecture-block__exercise-meta">
        <p>إرشادات:</p>
        <ul>
          {block.exercise.hints.map((hint) => (
            <li key={hint}>{hint}</li>
          ))}
        </ul>
      </div>

      <div className="lecture-block__exercise-solution">
        <p>الحل:</p>
        <strong>{block.exercise.solution}</strong>
      </div>

      {block.exercise.explanation ? (
        <div className="lecture-block__exercise-explanation">
          <p>شرح الحل:</p>
          <span>{block.exercise.explanation}</span>
        </div>
      ) : null}
    </Card>
  )
}

export default ExerciseBlock
