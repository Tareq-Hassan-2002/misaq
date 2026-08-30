import Card from '../../ui/Card/Card'
import './Method.css'

const steps = [
  'اعرف',
  'افهم',
  'جرّب',
  'اطلب Hint',
  'حاول مجددًا',
  'اختبر نفسك',
]

const Method = () => {
  return (
    <section className="landing-method">
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">فكرة مساق</p>
          <h2>مساق تحول المادة إلى رحلة تعلم.</h2>
        </div>

        <div className="landing-method__flow" aria-label="مسار التعلم">
          {steps.map((step, index) => (
            <div key={step} className="method-step">
              <Card className="method-step__card" padding="lg">
                <span>{step}</span>
              </Card>
              {index < steps.length - 1 && <span className="method-step__arrow">↓</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Method
