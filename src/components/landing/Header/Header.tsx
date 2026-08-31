import { useNavigate, useLocation } from 'react-router-dom'
import Button from '../../ui/Button/Button'
import './Header.css'

const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const isStudentPage = ['/setup', '/courses', '/course', '/lecture', '/dashboard'].some((path) =>
    location.pathname.startsWith(path),
  )
  const isCreatorPage = location.pathname.startsWith('/creator')

  return (
    <header className="landing-header">
      <div className="container landing-header__inner">
        <div className="landing-header__brand" aria-label="مساق" style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
          <span className="landing-header__logo">م</span>
          <span>مساق</span>
        </div>

        <nav className="landing-header__nav" aria-label="التنقل الأساسي">
          {isStudentPage && (
            <>
              <a href="#" onClick={(e) => { e.preventDefault(); navigate('/courses'); }}>موادي</a>
              <a href="#" onClick={(e) => { e.preventDefault(); navigate('/dashboard'); }}>لوحتي</a>
            </>
          )}
          {isCreatorPage && (
            <>
              <a href="#" onClick={(e) => { e.preventDefault(); navigate('/courses'); }}>عرض محتوى الطالب</a>
            </>
          )}
          {!isStudentPage && !isCreatorPage && (
            <>
              <a href="#about">عن مساق</a>
              <a href="#how-it-works">كيف تعمل مساق؟</a>
            </>
          )}
        </nav>

        <div className="landing-header__actions">
          {isCreatorPage ? (
            <Button variant="primary" onClick={() => navigate('/creator')}>
              لوحة المنشئ
            </Button>
          ) : isStudentPage ? (
            <Button variant="secondary" onClick={() => navigate('/creator')}>
              منشئ محتوى
            </Button>
          ) : (
            <Button variant="primary" onClick={() => navigate('/setup')}>
              ابدأ الآن
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
