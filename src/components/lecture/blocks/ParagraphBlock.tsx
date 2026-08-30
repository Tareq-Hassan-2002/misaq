import type { LectureBlock } from '../../../types'

interface ParagraphBlockProps {
  block: LectureBlock
}

const ParagraphBlock = ({ block }: ParagraphBlockProps) => {
  return (
    <section className="lecture-block lecture-block--paragraph">
      <p>{block.content}</p>
    </section>
  )
}

export default ParagraphBlock
