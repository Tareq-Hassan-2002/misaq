import type { ContentBlock } from '../../../creator/types'

interface DefinitionEditorProps {
  block: ContentBlock
  onChange: (block: ContentBlock) => void
}

const DefinitionEditor = ({ block, onChange }: DefinitionEditorProps) => {
  return (
    <div className="creator-block-editor">
      <label>عنوان التعريف</label>
      <input
        value={block.definition?.title ?? ''}
        onChange={(event) => onChange({ ...block, definition: { ...(block.definition ?? { title: '', content: '' }), title: event.target.value } })}
      />

      <label>محتوى التعريف</label>
      <textarea
        value={block.definition?.content ?? ''}
        onChange={(event) => onChange({ ...block, definition: { ...(block.definition ?? { title: '', content: '' }), content: event.target.value } })}
      />
    </div>
  )
}

export default DefinitionEditor
