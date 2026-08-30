import type { LectureBlock } from '../../../types'

interface NoteBlockProps {
  block: LectureBlock
}

const NoteBlock = ({ block }: NoteBlockProps) => {
  return (
    <section className="lecture-block lecture-block--note">
      <div className="lecture-block__header">
        <span className="lecture-block__label">ملاحظة</span>
      </div>
      <p>{block.content}</p>
    </section>
  )
}

export default NoteBlock
