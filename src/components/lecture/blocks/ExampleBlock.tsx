import type { LectureBlock } from '../../../types'

interface ExampleBlockProps {
  block: LectureBlock
}

const ExampleBlock = ({ block }: ExampleBlockProps) => {
  return (
    <section className="lecture-block lecture-block--example">
      <div className="lecture-block__header">
        <span className="lecture-block__label">مثال</span>
      </div>
      <p>{block.content}</p>
    </section>
  )
}

export default ExampleBlock
