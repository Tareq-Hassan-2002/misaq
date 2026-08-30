import { useParams } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'

const LecturePage = () => {
  const { lectureId } = useParams()

  return (
    <MainLayout>
      <section className="page-shell">
        <div className="container page-shell__content">
          <h1>صفحة المحاضرة</h1>
          <p>رقم المحاضرة: {lectureId ?? 'غير محددة'}</p>
          <p>هذه الصفحة قيد البناء الآن. سيتم عرض المحتوى التعليمي والمحاضرة لاحقًا.</p>
        </div>
      </section>
    </MainLayout>
  )
}

export default LecturePage
