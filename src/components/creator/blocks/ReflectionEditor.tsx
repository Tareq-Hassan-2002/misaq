import type { ContentBlock } from '../../../creator/types'

interface ReflectionEditorProps {
  block: ContentBlock
  onChange: (block: ContentBlock) => void
}

const ReflectionEditor = ({ block, onChange }: ReflectionEditorProps) => {
  return (
    <div className="creator-block-editor">
      <label>سؤال التأمل</label>
      <textarea
        value={block.reflection?.question ?? ''}
        onChange={(event) =>
          onChange({
            ...block,
            reflection: { ...(block.reflection ?? { question: '' }), question: event.target.value },
          })
        }
      />
    </div>
  )
}

export default ReflectionEditor
