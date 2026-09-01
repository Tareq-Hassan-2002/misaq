import { useNavigate } from 'react-router-dom'
import Button from '../../ui/Button/Button'
import './CTA.css'

const CTA = () => {
  const navigate = useNavigate()

  return (
    <section className="landing-cta">
      <div className="container">
        <div className="landing-cta__box">
          <div>
            <p className="section-kicker">جاهز تبدأ؟</p>
            <h2>اختر تخصصك ودع مساق ترتب لك طريقك.</h2>
          </div>

          <Button variant="primary" onClick={() => navigate('/login')}>ابدأ رحلتك</Button>
        </div>
      </div>
    </section>
  )
}

export default CTA
