import { Link } from 'react-router-dom'
import Button from '../components/ui/Button/Button'
import MainLayout from '../layouts/MainLayout'

const UnauthorizedPage = () => {
  return (
    <MainLayout>
      <section className="page-shell">
        <div className="container page-shell__content page-shell__content--centered">
          <h1>غير مصرح</h1>
          <p>ليس لديك الصلاحية للوصول إلى هذه الصفحة.</p>
          <Link to="/">
            <Button variant="primary">العودة إلى الصفحة الرئيسية</Button>
          </Link>
        </div>
      </section>
    </MainLayout>
  )
}

export default UnauthorizedPage
