import type { ContentBlock } from '../../../creator/types'
import BlockMediaEditor from '../BlockMediaEditor'

interface FocusEditorProps {
  block: ContentBlock
  onChange: (block: ContentBlock) => void
}

const FocusEditor = ({ block, onChange }: FocusEditorProps) => {
  return (
    <div className="creator-block-editor">
      <label>عنوان التركيز</label>
      <input
        value={block.focus?.title ?? ''}
        onChange={(event) =>
          onChange({
            ...block,
            focus: { ...(block.focus ?? { title: '', content: '' }), title: event.target.value },
          })
        }
      />

      <label>محتوى التركيز</label>
      <textarea
        value={block.focus?.content ?? ''}
        onChange={(event) =>
          onChange({
            ...block,
            focus: { ...(block.focus ?? { title: '', content: '' }), content: event.target.value },
          })
        }
      />

      <BlockMediaEditor block={block} onChange={onChange} />
    </div>
  )
}

export default FocusEditor
