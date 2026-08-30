import { Link, useParams } from 'react-router-dom'
import Button from '../components/ui/Button/Button'
import MainLayout from '../layouts/MainLayout'
import LectureRenderer from '../components/lecture/LectureRenderer'
import { loadCreatorLecture } from '../creator/creatorStorage'

const CreatorPreviewLecturePage = () => {
  const { lectureId } = useParams()

  const lecture = lectureId ? loadCreatorLecture(lectureId) : null

  if (!lecture) {
    return (
      <MainLayout>
        <section className="page-shell">
          <div className="container page-shell__content page-shell__content--centered">
            <h1>لا توجد معاينة</h1>
            <p>لم يتم حفظ المحاضرة بعد أو الرابط غير موجود.</p>
            <Link to="/creator">
              <Button variant="primary">العودة إلى المنشئ</Button>
            </Link>
          </div>
        </section>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <section className="page-shell">
        <div className="container">
          <h1>{lecture.title}</h1>
          <p>{lecture.description}</p>
          <LectureRenderer blocks={lecture.blocks.map((block) => ({
            id: block.id,
            type: block.type,
            content: block.content,
            title: block.title,
            level: block.level,
            items: block.items,
            exercise: block.exercise,
            definition: block.definition,
            keyConcept: block.keyConcept,
            comparison: block.comparison,
            focus: block.focus,
            reflection: block.reflection,
            media: block.media,
          }))} />

          <Link to={`/creator/course/${lecture.courseId}/lecture/${lecture.id}`}>
            <Button variant="secondary">العودة إلى المحرر</Button>
          </Link>
        </div>
      </section>
    </MainLayout>
  )
}

export default CreatorPreviewLecturePage
