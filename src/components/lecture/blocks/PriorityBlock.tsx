import Badge from '../../ui/Badge/Badge'
import type { LectureBlock } from '../../../types'

interface PriorityBlockProps {
  block: LectureBlock
}

const PriorityBlock = ({ block }: PriorityBlockProps) => {
  const levelLabels: Record<string, string> = {
    essential: 'أساسي',
    memorize: 'حفظ',
    understand: 'فهم',
  }

  const badgeVariant = block.level === 'essential' ? 'primary' : block.level === 'memorize' ? 'warning' : 'info'

  return (
    <section className="lecture-block lecture-block--priority">
      <div className="lecture-block__header">
        <span className="lecture-block__label">أولوية</span>
        <Badge variant={badgeVariant}>{levelLabels[block.level ?? 'understand']}</Badge>
      </div>
      <p>{block.content}</p>
    </section>
  )
}

export default PriorityBlock
