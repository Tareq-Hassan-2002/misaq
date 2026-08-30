import Card from '../../ui/Card/Card'
import './Hints.css'

const hintFlow = ['السؤال', 'Hint 1', 'Hint 2', 'الحل']

const Hints = () => {
  return (
    <section className="landing-hints">
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">Hints</p>
          <h2>لا نعطيك الحل فورًا.</h2>
        </div>

        <div className="landing-hints__flow" aria-label="تدرج التلميح">
          {hintFlow.map((item, index) => (
            <div key={item} className="hint-step">
              <Card className="hint-step__card" padding="md">
                <span>{item}</span>
              </Card>
              {index < hintFlow.length - 1 && <span className="hint-step__arrow">↓</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hints
