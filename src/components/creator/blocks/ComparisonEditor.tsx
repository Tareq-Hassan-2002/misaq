import type { ContentBlock } from '../../../creator/types'

interface ComparisonEditorProps {
  block: ContentBlock
  onChange: (block: ContentBlock) => void
}

const ComparisonEditor = ({ block, onChange }: ComparisonEditorProps) => {
  return (
    <div className="creator-block-editor">
      <label>عنوان المقارنة</label>
      <input
        value={block.comparison?.title ?? ''}
        onChange={(event) =>
          onChange({
            ...block,
            comparison: {
              ...(block.comparison ?? { title: '', leftTitle: '', rightTitle: '', items: [] }),
              title: event.target.value,
            },
          })
        }
      />

      <label>الجانب الأيسر</label>
      <input
        value={block.comparison?.leftTitle ?? ''}
        onChange={(event) =>
          onChange({
            ...block,
            comparison: {
              ...(block.comparison ?? { title: '', leftTitle: '', rightTitle: '', items: [] }),
              leftTitle: event.target.value,
            },
          })
        }
      />

      <label>الجانب الأيمن</label>
      <input
        value={block.comparison?.rightTitle ?? ''}
        onChange={(event) =>
          onChange({
            ...block,
            comparison: {
              ...(block.comparison ?? { title: '', leftTitle: '', rightTitle: '', items: [] }),
              rightTitle: event.target.value,
            },
          })
        }
      />
    </div>
  )
}

export default ComparisonEditor
