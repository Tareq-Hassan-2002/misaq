import type { ContentBlock } from '../../../creator/types'
import BlockMediaEditor from '../BlockMediaEditor'

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

      <BlockMediaEditor block={block} onChange={onChange} />
    </div>
  )
}

export default DefinitionEditor
