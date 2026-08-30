import type { ContentBlock } from '../../../creator/types'
import BlockMediaEditor from '../BlockMediaEditor'

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

      <BlockMediaEditor block={block} onChange={onChange} />
    </div>
  )
}

export default ParagraphEditor
