import Badge from '../../ui/Badge/Badge'
import Card from '../../ui/Card/Card'
import './HowItWorks.css'

const steps = [
  {
    title: 'افهم',
    description: 'شرح المفهوم بطريقة واضحة ومباشرة.',
  },
  {
    title: 'اعرف الأولوية',
    description: 'هل يجب أن تحفظ أم تفهم؟ ما الذي يحتاج تركيزًا أكبر؟',
  },
  {
    title: 'طبّق',
    description: 'حل تمرين بنفسك وراجع الفكرة في سياق جديد.',
  },
  {
    title: 'تحقق',
    description: 'اختبر فهمك من خلال تمرين قصير ومباشر.',
  },
]

const HowItWorks = () => {
  return (
    <section className="landing-how-it-works">
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">كيف تعمل؟</p>
          <h2>كل محاضرة تعرف ماذا تريد منك.</h2>
        </div>

        <div className="landing-how-it-works__grid">
          {steps.map((step, index) => (
            <Card key={step.title} className="how-card" padding="lg">
              <Badge variant={index === 0 ? 'primary' : index === 1 ? 'info' : index === 2 ? 'success' : 'warning'}>
                {`0${index + 1}`}
              </Badge>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
