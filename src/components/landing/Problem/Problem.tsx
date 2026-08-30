import Card from '../../ui/Card/Card'
import './Problem.css'

const questions = ['ماذا أدرس؟', 'ما المهم؟', 'ماذا أحفظ؟', 'ماذا أفهم؟', 'هل فهمت فعلاً؟']

const Problem = () => {
  return (
    <section className="landing-problem">
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">المشكلة</p>
          <h2>المشكلة ليست في كمية المحتوى.</h2>
        </div>

        <div className="landing-problem__grid">
          {questions.map((item) => (
            <Card key={item} className="problem-card" padding="lg">
              <p>{item}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Problem
