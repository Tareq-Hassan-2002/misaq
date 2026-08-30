import type { ContentBlock } from '../../../creator/types'

interface KeyConceptEditorProps {
  block: ContentBlock
  onChange: (block: ContentBlock) => void
}

const KeyConceptEditor = ({ block, onChange }: KeyConceptEditorProps) => {
  return (
    <div className="creator-block-editor">
      <label>عنوان المفهوم</label>
      <input
        value={block.keyConcept?.title ?? ''}
        onChange={(event) =>
          onChange({
            ...block,
            keyConcept: { ...(block.keyConcept ?? { title: '', explanation: '' }), title: event.target.value },
          })
        }
      />

      <label>شرح المفهوم</label>
      <textarea
        value={block.keyConcept?.explanation ?? ''}
        onChange={(event) =>
          onChange({
            ...block,
            keyConcept: { ...(block.keyConcept ?? { title: '', explanation: '' }), explanation: event.target.value },
          })
        }
      />
    </div>
  )
}

export default KeyConceptEditor
