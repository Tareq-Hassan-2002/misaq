import type { LectureBlock } from '../../../types'

interface TitleBlockProps {
  block: LectureBlock
}

const TitleBlock = ({ block }: TitleBlockProps) => {
  return (
    <section className="lecture-block lecture-block--title">
      <h3>{block.content}</h3>
    </section>
  )
}

export default TitleBlock
