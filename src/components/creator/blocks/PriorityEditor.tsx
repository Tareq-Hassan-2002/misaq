import type { ContentBlock } from '../../../creator/types'
import BlockMediaEditor from '../BlockMediaEditor'

interface PriorityEditorProps {
  block: ContentBlock
  onChange: (block: ContentBlock) => void
}

const PriorityEditor = ({ block, onChange }: PriorityEditorProps) => {
  return (
    <div className="creator-block-editor">
      <label>النص</label>
      <textarea
        value={block.content ?? ''}
        onChange={(event) => onChange({ ...block, content: event.target.value })}
      />

      <label>الأولوية</label>
      <select
        value={block.level ?? 'essential'}
        onChange={(event) => onChange({ ...block, level: event.target.value as ContentBlock['level'] })}
      >
        <option value="essential">أساسي</option>
        <option value="memorize">حفظ</option>
        <option value="understand">فهم</option>
      </select>

      <BlockMediaEditor block={block} onChange={onChange} />
    </div>
  )
}

export default PriorityEditor
