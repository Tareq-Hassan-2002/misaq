import type { ContentBlock } from '../../../creator/types'
import BlockMediaEditor from '../BlockMediaEditor'

interface NoteEditorProps {
  block: ContentBlock
  onChange: (block: ContentBlock) => void
}

const NoteEditor = ({ block, onChange }: NoteEditorProps) => {
  return (
    <div className="creator-block-editor">
      <label>ملاحظة</label>
      <textarea
        value={block.content ?? ''}
        onChange={(event) => onChange({ ...block, content: event.target.value })}
      />

      <BlockMediaEditor block={block} onChange={onChange} />
    </div>
  )
}

export default NoteEditor
