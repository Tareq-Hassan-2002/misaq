import BlockMediaEditor from '../BlockMediaEditor'
import type { ContentBlock } from '../../../creator/types'

interface ExerciseEditorProps {
  block: ContentBlock
  onChange: (block: ContentBlock) => void
}

const ExerciseEditor = ({ block, onChange }: ExerciseEditorProps) => {
  const hints = block.exercise?.hints ?? []

  const updateExercise = (value: Partial<NonNullable<ContentBlock['exercise']>>) => {
    onChange({
      ...block,
      exercise: {
        question: block.exercise?.question ?? '',
        hints: block.exercise?.hints ?? [],
        solution: block.exercise?.solution ?? '',
        explanation: block.exercise?.explanation ?? '',
        ...value,
      },
    })
  }

  return (
    <div className="creator-block-editor">
      <label>السؤال</label>
      <textarea
        value={block.exercise?.question ?? ''}
        onChange={(event) => updateExercise({ question: event.target.value })}
      />

      <div className="creator-block-editor__list">
        <label>التلميحات</label>
        {hints.map((hint, index) => (
          <div key={`${hint}-${index}`} className="creator-block-editor__row">
            <input
              value={hint}
              onChange={(event) => {
                const nextHints = [...hints]
                nextHints[index] = event.target.value
                updateExercise({ hints: nextHints })
              }}
            />
            <button
              type="button"
              onClick={() => updateExercise({ hints: hints.filter((_, hintIndex) => hintIndex !== index) })}
            >
              حذف
            </button>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => updateExercise({ hints: [...hints, `تلميح ${hints.length + 1}`] })}
      >
        إضافة Hint
      </button>

      <label>الحل</label>
      <textarea
        value={block.exercise?.solution ?? ''}
        onChange={(event) => updateExercise({ solution: event.target.value })}
      />

      <label>شرح الحل</label>
      <textarea
        value={block.exercise?.explanation ?? ''}
        onChange={(event) => updateExercise({ explanation: event.target.value })}
      />

      <BlockMediaEditor block={block} onChange={onChange} />
    </div>
  )
}

export default ExerciseEditor
