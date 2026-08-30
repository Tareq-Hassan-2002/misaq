import { useParams } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'

const CoursePage = () => {
  const { courseId } = useParams()

  return (
    <MainLayout>
      <section className="page-shell">
        <div className="container page-shell__content">
          <h1>صفحة المادة</h1>
          <p>المادة الحالية: {courseId ?? 'غير محددة'}</p>
          <p>هذه الصفحة قيد البناء الآن. سيتم عرض تفاصيل المادة ومحتواها لاحقًا.</p>
        </div>
      </section>
    </MainLayout>
  )
}

export default CoursePage
