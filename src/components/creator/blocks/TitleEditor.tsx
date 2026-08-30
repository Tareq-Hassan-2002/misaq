import type { ContentBlock } from '../../../creator/types'
import BlockMediaEditor from '../BlockMediaEditor'

interface TitleEditorProps {
  block: ContentBlock
  onChange: (block: ContentBlock) => void
}

const TitleEditor = ({ block, onChange }: TitleEditorProps) => {
  return (
    <div className="creator-block-editor">
      <label>عنوان</label>
      <input
        value={block.title ?? ''}
        onChange={(event) => onChange({ ...block, title: event.target.value })}
      />

      <BlockMediaEditor block={block} onChange={onChange} />
    </div>
  )
}

export default TitleEditor
