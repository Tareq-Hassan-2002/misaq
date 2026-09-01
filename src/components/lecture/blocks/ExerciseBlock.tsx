import { useState } from 'react'
import Badge from '../../ui/Badge/Badge'
import Card from '../../ui/Card/Card'
import type { LectureBlock } from '../../../types'
import './ExerciseBlock.css'

interface ExerciseBlockProps {
  block: LectureBlock
}

const ExerciseBlock = ({ block }: ExerciseBlockProps) => {
  const [expandedHints, setExpandedHints] = useState<Record<number, boolean>>({})
  const [showSolution, setShowSolution] = useState(false)

  if (!block.exercise) {
    return null
  }

  const toggleHint = (index: number) => {
    setExpandedHints((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  const hasSolution = !!block.exercise.solution
  const hints = block.exercise.hints || []

  return (
    <Card className="lecture-block lecture-block--exercise" padding="lg">
      <div className="lecture-block__header">
        <span className="lecture-block__label">تمرين</span>
        <Badge variant="info">ممارسة</Badge>
      </div>

      <p className="lecture-block__question">{block.exercise.question}</p>

      {hints.length > 0 && (
        <div className="lecture-block__exercise-hints">
          <div className="lecture-block__exercise-hints-buttons">
            {hints.map((_, index) => (
              <button
                key={index}
                className="lecture-block__hint-button"
                onClick={() => toggleHint(index)}
                aria-expanded={expandedHints[index] || false}
              >
                💡 التلميح {index + 1}
              </button>
            ))}
          </div>

          {hints.map((hint, index) => {
            if (!expandedHints[index]) {
              return null
            }

            return (
              <div key={index} className="lecture-block__hint-content">
                <p>{hint}</p>
              </div>
            )
          })}
        </div>
      )}

      {hasSolution && (
        <div className="lecture-block__exercise-solution-section">
          <button
            className="lecture-block__solution-button"
            onClick={() => setShowSolution(!showSolution)}
            aria-expanded={showSolution}
          >
            👁️ أرني الحل
          </button>

          {showSolution && (
            <div className="lecture-block__solution-content">
              <div className="lecture-block__solution-text">
                <p className="lecture-block__solution-label">الحل:</p>
                <p className="lecture-block__solution-answer">{block.exercise.solution}</p>
              </div>

              {block.exercise.explanation && (
                <div className="lecture-block__explanation-text">
                  <p className="lecture-block__explanation-label">شرح الحل:</p>
                  <p className="lecture-block__explanation-answer">{block.exercise.explanation}</p>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </Card>
  )
}

export default ExerciseBlock
