import type { LectureBlock } from '../../../types'
import './PrerequisiteBlock.css'

interface PrerequisiteBlockProps {
  block: LectureBlock
}

const PrerequisiteBlock = ({ block }: PrerequisiteBlockProps) => {
  return (
    <section className="lecture-block lecture-block--prerequisite">
      <div className="lecture-block__header">
        <span className="lecture-block__label">تحتاج قبل هذه المحاضرة</span>
      </div>

      <ul className="lecture-block__list">
        {(block.items ?? []).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  )
}

export default PrerequisiteBlock
