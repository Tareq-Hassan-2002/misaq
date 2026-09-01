import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/ui/Button/Button'
import Card from '../components/ui/Card/Card'
import MainLayout from '../layouts/MainLayout'
import { login } from '../utils/authStorage'
import type { UserRole } from '../types'
import './LoginPage.css'

type LoginTab = 'student' | 'admin'

const LoginPage = () => {
  const navigate = useNavigate()
  const [tab, setTab] = useState<LoginTab>('student')

  // Student form
  const [studentName, setStudentName] = useState('')
  const [studentNumber, setStudentNumber] = useState('')

  // Admin form
  const [adminUsername, setAdminUsername] = useState('')
  const [adminPassword, setAdminPassword] = useState('')

  const handleStudentLogin = (e: React.FormEvent) => {
    e.preventDefault()

    if (!studentName.trim()) {
      alert('الرجاء إدخال الاسم')
      return
    }

    if (!studentNumber.trim()) {
      alert('الرجاء إدخال رقم الطالب')
      return
    }

    login({
      id: `student-${Date.now()}`,
      name: studentName,
      studentNumber: studentNumber,
      role: 'student' as UserRole,
    })

    navigate('/setup')
  }

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault()

    if (!adminUsername.trim()) {
      alert('الرجاء إدخال اسم المستخدم')
      return
    }

    if (!adminPassword.trim()) {
      alert('الرجاء إدخال كلمة المرور')
      return
    }

    // Demo authentication - any non-empty password works
    // This is NOT production-level security
    login({
      id: `admin-${Date.now()}`,
      name: adminUsername,
      username: adminUsername,
      role: 'admin' as UserRole,
    })

    navigate('/creator')
  }

  return (
    <MainLayout>
      <section className="page-shell">
        <div className="container page-shell__content page-shell__content--centered">
          <Card padding="lg" className="login-card">
            <h1>تسجيل الدخول</h1>
            <p className="login-intro">
              اختر نوع الحساب الذي تريد الدخول به
            </p>

            <div className="login-tabs">
              <button
                type="button"
                className={`login-tab ${tab === 'student' ? 'login-tab--active' : ''}`}
                onClick={() => setTab('student')}
              >
                طالب
              </button>
              <button
                type="button"
                className={`login-tab ${tab === 'admin' ? 'login-tab--active' : ''}`}
                onClick={() => setTab('admin')}
              >
                منشئ محتوى
              </button>
            </div>

            {tab === 'student' ? (
              <form onSubmit={handleStudentLogin} className="login-form">
                <div className="login-form__field">
                  <label>الاسم</label>
                  <input
                    type="text"
                    placeholder="أدخل اسمك الكامل"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                  />
                </div>

                <div className="login-form__field">
                  <label>رقم الطالب</label>
                  <input
                    type="text"
                    placeholder="أدخل رقم الطالب"
                    value={studentNumber}
                    onChange={(e) => setStudentNumber(e.target.value)}
                  />
                </div>

                <Button type="submit" variant="primary" className="login-form__submit">
                  دخول كطالب
                </Button>

                <p className="login-demo-note">
                  ملاحظة: هذا نظام تسجيل دخول محلي لأغراض تطويرية. جميع البيانات محفوظة محليًا على جهازك.
                </p>
              </form>
            ) : (
              <form onSubmit={handleAdminLogin} className="login-form">
                <div className="login-form__field">
                  <label>اسم المستخدم</label>
                  <input
                    type="text"
                    placeholder="أدخل اسم المستخدم"
                    value={adminUsername}
                    onChange={(e) => setAdminUsername(e.target.value)}
                  />
                </div>

                <div className="login-form__field">
                  <label>كلمة المرور</label>
                  <input
                    type="password"
                    placeholder="أدخل كلمة المرور"
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                  />
                </div>

                <Button type="submit" variant="primary" className="login-form__submit">
                  دخول كمنشئ محتوى
                </Button>

                <p className="login-demo-note">
                  ملاحظة: هذا نظام تسجيل دخول محلي لأغراض تطويرية وليس آمنًا للإنتاج.
                </p>
              </form>
            )}
          </Card>
        </div>
      </section>
    </MainLayout>
  )
}

export default LoginPage
