import Button from '../../ui/Button/Button'
import './CTA.css'

const CTA = () => {
  return (
    <section className="landing-cta">
      <div className="container">
        <div className="landing-cta__box">
          <div>
            <p className="section-kicker">جاهز تبدأ؟</p>
            <h2>اختر تخصصك ودع مساق ترتب لك طريقك.</h2>
          </div>

          <Button variant="primary">ابدأ رحلتك</Button>
        </div>
      </div>
    </section>
  )
}

export default CTA
