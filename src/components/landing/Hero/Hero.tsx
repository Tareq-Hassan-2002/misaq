import { useNavigate } from 'react-router-dom'
import Button from '../../ui/Button/Button'
import Badge from '../../ui/Badge/Badge'
import './Hero.css'

const Hero = () => {
  const navigate = useNavigate()

  return (
    <section className="landing-hero">
      <div className="container landing-hero__inner">
        <div className="landing-hero__content">
          <Badge variant="primary">منصة التعلم الجامعي</Badge>

          <h1>
            لا نريدك أن تنجح في المادة فقط.
            <span>نريدك أن تفهمها.</span>
          </h1>

          <p className="landing-hero__description">
            مساق تحول المواد الجامعية من ملفات ومحاضرات متفرقة إلى رحلة تعلم واضحة
            تخبرك ماذا تتعلم، وما الذي يستحق الحفظ، وما الذي يجب فهمه، وكيف تطبق ما
            تعلمته.
          </p>

          <div className="landing-hero__actions">
            <Button variant="primary" onClick={() => navigate('/login')}>ابدأ رحلتك</Button>
            <Button variant="ghost" onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}>كيف تعمل مساق؟</Button>
          </div>
        </div>

        <div className="landing-hero__visual" aria-label="ملخص رحلة التعلم">
          <div className="hero-card hero-card--primary">
            <span className="hero-card__label">التقدم اليومي</span>
            <strong>72%</strong>
            <div className="hero-card__progress">
              <span style={{ width: '72%' }} />
            </div>
          </div>

          <div className="hero-card hero-card--secondary">
            <span className="hero-card__label">أهم نقطة اليوم</span>
            <p>فهم مفهوم التفاعل بين المتغيرات في الدالة.</p>
          </div>

          <div className="hero-card hero-card--mini">
            <span>افهم</span>
            <span>طبق</span>
            <span>اختبر</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
