import type { ContentBlock } from '../../../creator/types'
import BlockMediaEditor from '../BlockMediaEditor'

interface PrerequisiteEditorProps {
  block: ContentBlock
  onChange: (block: ContentBlock) => void
}

const PrerequisiteEditor = ({ block, onChange }: PrerequisiteEditorProps) => {
  const items = block.items ?? []

  const updateItems = (nextItems: string[]) => {
    onChange({ ...block, items: nextItems })
  }

  return (
    <div className="creator-block-editor">
      <label>العنوان</label>
      <input
        value={block.content ?? ''}
        onChange={(event) => onChange({ ...block, content: event.target.value })}
      />

      <div className="creator-block-editor__list">
        {items.map((item, index) => (
          <div key={`${item}-${index}`} className="creator-block-editor__row">
            <input
              value={item}
              onChange={(event) => {
                const nextItems = [...items]
                nextItems[index] = event.target.value
                updateItems(nextItems)
              }}
            />
            <button type="button" onClick={() => updateItems(items.filter((_, itemIndex) => itemIndex !== index))}>
              حذف
            </button>
          </div>
        ))}
      </div>

      <button type="button" onClick={() => updateItems([...items, 'عنصر جديد'])}>
        إضافة عنصر
      </button>

      <BlockMediaEditor block={block} onChange={onChange} />
    </div>
  )
}

export default PrerequisiteEditor
