import Button from '../../ui/Button/Button'
import './Header.css'

const Header = () => {
  return (
    <header className="landing-header">
      <div className="container landing-header__inner">
        <div className="landing-header__brand" aria-label="مساق">
          <span className="landing-header__logo">م</span>
          <span>مساق</span>
        </div>

        <nav className="landing-header__nav" aria-label="التنقل الأساسي">
          <a href="#about">عن مساق</a>
          <a href="#how-it-works">كيف تعمل مساق؟</a>
        </nav>

        <div className="landing-header__actions">
          <Button variant="primary">ابدأ الآن</Button>
        </div>
      </div>
    </header>
  )
}

export default Header
