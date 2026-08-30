import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Button from '../components/ui/Button/Button'
import Card from '../components/ui/Card/Card'
import LectureRenderer from '../components/lecture/LectureRenderer'
import { creatorCourses } from '../creator/data'
import { createEmptyBlock, loadCreatorLecture, saveCreatorDraft, saveCreatorPublished } from '../creator/creatorStorage'
import type { ContentBlock, CreatorLecture, CreatorLectureStatus } from '../creator/types'
import * as blockEditors from '../components/creator/blocks'
import './CreatorLectureBuilderPage.css'

const blockOptions: Array<{ label: string; type: ContentBlock['type'] }> = [
  { label: 'عنوان', type: 'title' },
  { label: 'فقرة', type: 'paragraph' },
  { label: 'أولوية', type: 'priority' },
  { label: 'ملاحظة', type: 'note' },
  { label: 'مثال', type: 'example' },
  { label: 'متطلب سابق', type: 'prerequisite' },
  { label: 'تمرين', type: 'exercise' },
  { label: 'تعريف', type: 'definition' },
  { label: 'مفهوم رئيسي', type: 'keyConcept' },
  { label: 'مقارنة', type: 'comparison' },
  { label: 'تركيز', type: 'focus' },
  { label: 'تأمل', type: 'reflection' },
]

const blockEditorMap: Record<ContentBlock['type'], React.ComponentType<{ block: ContentBlock; onChange: (block: ContentBlock) => void }>> = {
  title: blockEditors.TitleEditor,
  paragraph: blockEditors.ParagraphEditor,
  priority: blockEditors.PriorityEditor,
  note: blockEditors.NoteEditor,
  example: blockEditors.ExampleEditor,
  prerequisite: blockEditors.PrerequisiteEditor,
  exercise: blockEditors.ExerciseEditor,
  definition: blockEditors.DefinitionEditor,
  keyConcept: blockEditors.KeyConceptEditor,
  comparison: blockEditors.ComparisonEditor,
  focus: blockEditors.FocusEditor,
  reflection: blockEditors.ReflectionEditor,
}

const CreatorLectureBuilderPage = () => {
  const { courseId, lectureId } = useParams()
  const navigate = useNavigate()

  const baseCourse = creatorCourses.find((course) => course.id === courseId)
  const baseLecture = baseCourse?.lectures.find((lecture) => lecture.id === lectureId)
  const existingLecture = lectureId ? loadCreatorLecture(lectureId) : null

  const [lecture, setLecture] = useState<CreatorLecture>(() => {
    if (existingLecture) {
      return existingLecture
    }

    if (baseLecture) {
      return baseLecture
    }

    return {
      id: lectureId ?? `lecture-${Date.now()}`,
      courseId: courseId ?? 'creator-net-402',
      title: 'محاضرة جديدة',
      description: 'وصف المحاضرة',
      order: 1,
      status: 'draft',
      blocks: [],
    }
  })

  useEffect(() => {
    if (!lectureId || !courseId) {
      return
    }

    saveCreatorDraft({
      lectureId: lecture.id,
      courseId,
      data: lecture,
    })
  }, [courseId, lecture, lectureId])

  const previewBlocks = useMemo(() => {
    return lecture.blocks.map((block) => ({
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
    }))
  }, [lecture.blocks])

  const updateBlock = (updatedBlock: ContentBlock) => {
    setLecture((currentLecture) => ({
      ...currentLecture,
      blocks: currentLecture.blocks.map((block) => (block.id === updatedBlock.id ? updatedBlock : block)),
    }))
  }

  const addBlock = (type: ContentBlock['type']) => {
    const block = createEmptyBlock(type)
    setLecture((currentLecture) => ({
      ...currentLecture,
      blocks: [...currentLecture.blocks, { ...block, order: currentLecture.blocks.length + 1 }],
    }))
  }

  const deleteBlock = (blockId: string) => {
    setLecture((currentLecture) => ({
      ...currentLecture,
      blocks: currentLecture.blocks.filter((block) => block.id !== blockId),
    }))
  }

  const moveBlock = (blockId: string, direction: 'up' | 'down') => {
    setLecture((currentLecture) => {
      const index = currentLecture.blocks.findIndex((block) => block.id === blockId)
      if (index < 0) {
        return currentLecture
      }

      const nextIndex = direction === 'up' ? index - 1 : index + 1
      if (nextIndex < 0 || nextIndex >= currentLecture.blocks.length) {
        return currentLecture
      }

      const nextBlocks = [...currentLecture.blocks]
      const [item] = nextBlocks.splice(index, 1)
      nextBlocks.splice(nextIndex, 0, item)

      return {
        ...currentLecture,
        blocks: nextBlocks.map((block, blockIndex) => ({ ...block, order: blockIndex + 1 })),
      }
    })
  }

  const handleSave = () => {
    const nextLecture = { ...lecture, status: 'draft' as CreatorLectureStatus }
    setLecture(nextLecture)
    saveCreatorDraft({
      lectureId: nextLecture.id,
      courseId: courseId ?? 'creator-net-402',
      data: nextLecture,
    })
  }

  const handlePublish = () => {
    const nextLecture = { ...lecture, status: 'published' as CreatorLectureStatus }
    setLecture(nextLecture)
    saveCreatorPublished({
      lectureId: nextLecture.id,
      courseId: courseId ?? 'creator-net-402',
      data: nextLecture,
    })
  }

  const handlePreview = () => {
    saveCreatorDraft({
      lectureId: lecture.id,
      courseId: courseId ?? 'creator-net-402',
      data: lecture,
    })
    navigate(`/creator/preview/lecture/${lecture.id}`)
  }

  if (!courseId) {
    return null
  }

  return (
    <div className="creator-lecture-builder">
      <div className="container creator-lecture-builder__layout">
        <aside className="creator-lecture-builder__sidebar">
          <div className="creator-lecture-builder__header">
            <h1>منشئ المحاضرة</h1>
            <Link to="/creator">
              <Button variant="secondary">العودة</Button>
            </Link>
          </div>

          <div className="creator-lecture-builder__field">
            <label>عنوان المحاضرة</label>
            <input value={lecture.title} onChange={(event) => setLecture({ ...lecture, title: event.target.value })} />
          </div>

          <div className="creator-lecture-builder__field">
            <label>الوصف</label>
            <textarea value={lecture.description} onChange={(event) => setLecture({ ...lecture, description: event.target.value })} />
          </div>

          <div className="creator-lecture-builder__field">
            <label>الحالة</label>
            <select value={lecture.status} onChange={(event) => setLecture({ ...lecture, status: event.target.value as CreatorLectureStatus })}>
              <option value="draft">مسودة</option>
              <option value="published">منشور</option>
            </select>
          </div>

          <div className="creator-lecture-builder__actions">
            <Button variant="primary" onClick={handleSave}>حفظ</Button>
            <Button variant="secondary" onClick={handlePreview}>معاينة</Button>
            <Button variant="primary" onClick={handlePublish}>نشر</Button>
          </div>

          <div className="creator-lecture-builder__add-blocks">
            <h3>إضافة Block</h3>
            {blockOptions.map((option) => (
              <Button key={option.type} variant="outline" onClick={() => addBlock(option.type)}>
                + {option.label}
              </Button>
            ))}
          </div>
        </aside>

        <main className="creator-lecture-builder__editor-panel">
          {lecture.blocks.length === 0 ? (
            <Card className="creator-empty-state" padding="lg">
              <p>لا توجد blocks حتى الآن. أضف أول block من القائمة.</p>
            </Card>
          ) : (
            lecture.blocks.map((block, index) => {
              const Editor = blockEditorMap[block.type]

              return (
                <Card key={block.id} className="creator-block-item" padding="lg">
                  <div className="creator-block-item__header">
                    <span>Block {index + 1}</span>
                    <div className="creator-block-item__controls">
                      <button type="button" onClick={() => moveBlock(block.id, 'up')}>↑</button>
                      <button type="button" onClick={() => moveBlock(block.id, 'down')}>↓</button>
                      <button type="button" onClick={() => deleteBlock(block.id)}>حذف</button>
                    </div>
                  </div>

                  <Editor block={block} onChange={updateBlock} />
                </Card>
              )
            })
          )}
        </main>

        <aside className="creator-lecture-builder__preview">
          <h2>معاينة</h2>
          <LectureRenderer blocks={previewBlocks} />
        </aside>
      </div>
    </div>
  )
}

export default CreatorLectureBuilderPage
