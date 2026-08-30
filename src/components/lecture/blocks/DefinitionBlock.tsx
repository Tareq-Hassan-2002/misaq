import Badge from '../../ui/Badge/Badge'
import Card from '../../ui/Card/Card'
import type { LectureBlock } from '../../../types'
import './DefinitionBlock.css'

interface DefinitionBlockProps {
  block: LectureBlock
}

const DefinitionBlock = ({ block }: DefinitionBlockProps) => {
  if (!block.definition) {
    return null
  }

  return (
    <Card className="lecture-block lecture-block--definition" padding="lg">
      <div className="lecture-block__header">
        <span className="lecture-block__label">تعريف</span>
        <Badge variant="info">مفهوم</Badge>
      </div>

      <h3>{block.definition.title}</h3>
      <p>{block.definition.content}</p>
    </Card>
  )
}

export default DefinitionBlock
