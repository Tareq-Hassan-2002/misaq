import type { ContentBlock } from '../../../creator/types'

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
    </div>
  )
}

export default TitleEditor
