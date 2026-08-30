import Card from '../../ui/Card/Card'
import type { LectureBlock } from '../../../types'

interface ExampleBlockProps {
  block: LectureBlock
}

const ExampleBlock = ({ block }: ExampleBlockProps) => {
  return (
    <Card className="lecture-block lecture-block--example" padding="lg">
      <div className="lecture-block__header">
        <span className="lecture-block__label">مثال</span>
      </div>
      <p>{block.content}</p>
    </Card>
  )
}

export default ExampleBlock
