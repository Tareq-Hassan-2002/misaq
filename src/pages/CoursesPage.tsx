import { Link, useLocation } from 'react-router-dom'
import Button from '../components/ui/Button/Button'
import Card from '../components/ui/Card/Card'
import MainLayout from '../layouts/MainLayout'
import { universities } from '../data/academicData'
import type { StudentAcademicSelection } from '../types'
import './CoursesPage.css'

const CoursesPage = () => {
  const location = useLocation()
  const selection = location.state?.selection as StudentAcademicSelection | undefined

  const selectedUniversity = universities.find(
    (university) => university.id === selection?.universityId,
  )
  const selectedFaculty = selectedUniversity?.faculties.find(
    (faculty) => faculty.id === selection?.facultyId,
  )

  const hasSelection = Boolean(
    selection &&
      selection.universityId &&
      selection.facultyId &&
      selection.year &&
      selection.semester,
  )

  return (
    <MainLayout>
      <section className="courses-page">
        <div className="container">
          {hasSelection ? (
            <Card className="courses-page__card" padding="lg">
              <div className="section-heading">
                <p className="section-kicker">موادك</p>
                <h2>{selectedFaculty?.name ?? 'موادك'}</h2>
              </div>

              <div className="courses-page__meta">
                <span>{selectedUniversity?.name}</span>
                <span>·</span>
                <span>{selection?.year}</span>
                <span>·</span>
                <span>{selection?.semester}</span>
              </div>

              <p>هذه الصفحة تم تجهيزها مؤقتًا لعرض مسار الطالب المختار. ستظهر هنا المواد المقترحة لاحقًا داخل تجربة أكثر اكتمالًا.</p>
            </Card>
          ) : (
            <div className="courses-page__placeholder">
              <p>لم يتم اختيار مسارك الدراسي بعد. يرجى إعداد بيانات الطالب لعرض المواد المناسبة لك.</p>
              <Link to="/setup">
                <Button variant="primary">إعداد مسارك</Button>
              </Link>
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  )
}

export default CoursesPage
