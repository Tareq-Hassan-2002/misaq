import type { ContentBlock } from '../../../creator/types'

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
    </div>
  )
}

export default NoteEditor
