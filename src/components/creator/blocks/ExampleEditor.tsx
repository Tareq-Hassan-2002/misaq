import type { ContentBlock } from '../../../creator/types'
import BlockMediaEditor from '../BlockMediaEditor'

interface ExampleEditorProps {
  block: ContentBlock
  onChange: (block: ContentBlock) => void
}

const ExampleEditor = ({ block, onChange }: ExampleEditorProps) => {
  return (
    <div className="creator-block-editor">
      <label>مثال</label>
      <textarea
        value={block.content ?? ''}
        onChange={(event) => onChange({ ...block, content: event.target.value })}
      />

      <BlockMediaEditor block={block} onChange={onChange} />
    </div>
  )
}

export default ExampleEditor
