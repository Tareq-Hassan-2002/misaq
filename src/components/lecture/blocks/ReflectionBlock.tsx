import Badge from '../../ui/Badge/Badge'
import Card from '../../ui/Card/Card'
import type { LectureBlock } from '../../../types'
import './ReflectionBlock.css'

interface ReflectionBlockProps {
  block: LectureBlock
}

const ReflectionBlock = ({ block }: ReflectionBlockProps) => {
  if (!block.reflection) {
    return null
  }

  return (
    <Card className="lecture-block lecture-block--reflection" padding="lg">
      <div className="lecture-block__header">
        <span className="lecture-block__label">تأمل</span>
        <Badge variant="info">فكر</Badge>
      </div>

      <p className="lecture-block__question">{block.reflection.question}</p>
    </Card>
  )
}

export default ReflectionBlock
