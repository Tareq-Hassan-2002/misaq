import { useState } from 'react'
import Button from '../ui/Button/Button'
import Card from '../ui/Card/Card'
import './UnderstandingCheck.css'

const UnderstandingCheck = () => {
  const [isConfirmed, setIsConfirmed] = useState(false)

  return (
    <Card className="lecture-understanding-check" padding="lg">
      <div className="lecture-understanding-check__header">
        <h3>هل أصبحت الفكرة واضحة؟</h3>
      </div>

      <div className="lecture-understanding-check__actions">
        <Button variant={isConfirmed ? 'primary' : 'secondary'} onClick={() => setIsConfirmed(true)}>
          نعم، فهمت
        </Button>

        <Button variant="outline" onClick={() => setIsConfirmed(false)}>
          أحتاج إلى مراجعة
        </Button>
      </div>

      {isConfirmed && <p className="lecture-understanding-check__feedback">رائع! يمكنك المتابعة إلى المحاضرة التالية.</p>}
    </Card>
  )
}

export default UnderstandingCheck
