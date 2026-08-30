import Badge from '../../ui/Badge/Badge'
import Card from '../../ui/Card/Card'
import type { LectureBlock } from '../../../types'
import './FocusBlock.css'

interface FocusBlockProps {
  block: LectureBlock
}

const FocusBlock = ({ block }: FocusBlockProps) => {
  if (!block.focus) {
    return null
  }

  return (
    <Card className="lecture-block lecture-block--focus" padding="lg">
      <div className="lecture-block__header">
        <span className="lecture-block__label">التركيز</span>
        <Badge variant="primary">مهم</Badge>
      </div>

      <h3>{block.focus.title}</h3>
      <p>{block.focus.content}</p>
    </Card>
  )
}

export default FocusBlock
