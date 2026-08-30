import Card from '../../ui/Card/Card'
import type { LectureBlock } from '../../../types'

interface NoteBlockProps {
  block: LectureBlock
}

const NoteBlock = ({ block }: NoteBlockProps) => {
  return (
    <Card className="lecture-block lecture-block--note" padding="lg">
      <div className="lecture-block__header">
        <span className="lecture-block__label">ملاحظة</span>
      </div>
      <p>{block.content}</p>
    </Card>
  )
}

export default NoteBlock
