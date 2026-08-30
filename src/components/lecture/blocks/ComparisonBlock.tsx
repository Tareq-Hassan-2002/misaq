import Card from '../../ui/Card/Card'
import Badge from '../../ui/Badge/Badge'
import type { LectureBlock } from '../../../types'
import './ComparisonBlock.css'

interface ComparisonBlockProps {
  block: LectureBlock
}

const ComparisonBlock = ({ block }: ComparisonBlockProps) => {
  if (!block.comparison) {
    return null
  }

  return (
    <Card className="lecture-block lecture-block--comparison" padding="lg">
      <div className="lecture-block__header">
        <span className="lecture-block__label">مقارنة</span>
        <Badge variant="warning">مقارنة</Badge>
      </div>

      <h3>{block.comparison.title}</h3>

      <div className="comparison-block__grid">
        <div className="comparison-block__column">
          <span className="comparison-block__title">{block.comparison.leftTitle}</span>
          <ul>
            {block.comparison.items.map((item) => (
              <li key={`${block.id}-${item.left}`}>{item.left}</li>
            ))}
          </ul>
        </div>

        <div className="comparison-block__column">
          <span className="comparison-block__title">{block.comparison.rightTitle}</span>
          <ul>
            {block.comparison.items.map((item) => (
              <li key={`${block.id}-${item.right}`}>{item.right}</li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  )
}

export default ComparisonBlock
