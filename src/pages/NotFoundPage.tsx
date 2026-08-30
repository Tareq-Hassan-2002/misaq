import { Link } from 'react-router-dom'
import Button from '../components/ui/Button/Button'
import MainLayout from '../layouts/MainLayout'

const NotFoundPage = () => {
  return (
    <MainLayout>
      <section className="page-shell">
        <div className="container page-shell__content page-shell__content--centered">
          <h1>الصفحة غير موجودة</h1>
          <p>الصفحة التي تبحث عنها غير متاحة الآن.</p>
          <Link to="/">
            <Button variant="primary">العودة للرئيسية</Button>
          </Link>
        </div>
      </section>
    </MainLayout>
  )
}

export default NotFoundPage
