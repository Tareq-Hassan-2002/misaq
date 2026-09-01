import { useNavigate } from 'react-router-dom'
import Button from '../../ui/Button/Button'
import { getCurrentUser, logout } from '../../../utils/authStorage'
import './Header.css'

const Header = () => {
  const navigate = useNavigate()
  const user = getCurrentUser()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const isStudent = user?.role === 'student'
  const isAdmin = user?.role === 'admin'

  return (
    <header className="landing-header">
      <div className="container landing-header__inner">
        <div className="landing-header__brand" aria-label="مساق" style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
          <span className="landing-header__logo">م</span>
          <span>مساق</span>
        </div>

        <nav className="landing-header__nav" aria-label="التنقل الأساسي">
          {isStudent && (
            <>
              <a href="#" onClick={(e) => { e.preventDefault(); navigate('/courses'); }}>موادي</a>
              <a href="#" onClick={(e) => { e.preventDefault(); navigate('/dashboard'); }}>لوحتي</a>
            </>
          )}
          {isAdmin && (
            <>
              <a href="#" onClick={(e) => { e.preventDefault(); navigate('/creator'); }}>لوحة المنشئ</a>
            </>
          )}
          {!user && (
            <>
              <a href="#about">عن مساق</a>
              <a href="#how-it-works">كيف تعمل مساق؟</a>
            </>
          )}
        </nav>

        <div className="landing-header__actions">
          {user ? (
            <Button variant="secondary" onClick={handleLogout}>
              تسجيل الخروج
            </Button>
          ) : (
            <Button variant="primary" onClick={() => navigate('/login')}>
              ابدأ الآن
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
