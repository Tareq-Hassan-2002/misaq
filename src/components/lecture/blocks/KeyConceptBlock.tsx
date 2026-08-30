import Badge from '../../ui/Badge/Badge'
import Card from '../../ui/Card/Card'
import type { LectureBlock } from '../../../types'
import './KeyConceptBlock.css'

interface KeyConceptBlockProps {
  block: LectureBlock
}

const KeyConceptBlock = ({ block }: KeyConceptBlockProps) => {
  if (!block.keyConcept) {
    return null
  }

  return (
    <Card className="lecture-block lecture-block--key-concept" padding="lg">
      <div className="lecture-block__header">
        <span className="lecture-block__label">فكرة أساسية</span>
        <Badge variant="primary">مهم</Badge>
      </div>

      <h3>{block.keyConcept.title}</h3>
      <p>{block.keyConcept.explanation}</p>
    </Card>
  )
}

export default KeyConceptBlock
