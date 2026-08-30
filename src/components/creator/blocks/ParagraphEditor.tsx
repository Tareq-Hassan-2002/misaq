import type { ContentBlock } from '../../../creator/types'

interface ParagraphEditorProps {
  block: ContentBlock
  onChange: (block: ContentBlock) => void
}

const ParagraphEditor = ({ block, onChange }: ParagraphEditorProps) => {
  return (
    <div className="creator-block-editor">
      <label>فقرة</label>
      <textarea
        value={block.content ?? ''}
        onChange={(event) => onChange({ ...block, content: event.target.value })}
      />
    </div>
  )
}

export default ParagraphEditor
