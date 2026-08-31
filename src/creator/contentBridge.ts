import type { CreatorCourse, CreatorLecture } from './types'
import { creatorCourses as seedCreatorCourses } from './data'
import { upsertLecture as upsertStudentLecture } from '../contentStorage'
import type { Lecture } from '../types'

const STORAGE_KEY = 'misaq-creator-content'

const safeParse = <T>(value: string | null): T | null => {
  if (!value) {
    return null
  }

  try {
    return JSON.parse(value) as T
  } catch {
    return null
  }
}

export const getCreatorCourses = (): CreatorCourse[] => {
  if (typeof window === 'undefined') {
    return seedCreatorCourses
  }

  const saved = safeParse<CreatorCourse[]>(window.localStorage.getItem(STORAGE_KEY))
  return Array.isArray(saved) && saved.length > 0 ? saved : seedCreatorCourses
}

export const saveCreatorCourses = (courses: CreatorCourse[]) => {
  if (typeof window === 'undefined') {
    return
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(courses))
}

export const getCreatorCourse = (courseId: string): CreatorCourse | undefined => {
  return getCreatorCourses().find((course) => course.id === courseId)
}

const creatorLectureToStudentLecture = (lecture: CreatorLecture): Lecture => {
  return {
    id: lecture.id,
    courseId: lecture.courseId,
    title: lecture.title,
    description: lecture.description,
    order: lecture.order,
    status: lecture.status === 'published' ? 'published' : 'draft',
    blocks: lecture.blocks.map((block) => ({
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
    })),
  }
}

export const upsertCreatorLecture = (courseId: string, lecture: CreatorLecture) => {
  const nextCourses = getCreatorCourses().map((course) => {
    if (course.id !== courseId) {
      return course
    }

    const nextLectures = [...course.lectures.filter((item) => item.id !== lecture.id), lecture]

    return {
      ...course,
      lectures: nextLectures,
      lectureCount: nextLectures.length,
      updatedAt: new Date().toISOString().slice(0, 10),
    }
  })

  saveCreatorCourses(nextCourses)
  return nextCourses.find((course) => course.id === courseId)
}

export const publishCreatorLecture = (courseId: string, lecture: CreatorLecture): void => {
  if (lecture.status === 'published') {
    const studentLecture = creatorLectureToStudentLecture(lecture)
    upsertStudentLecture(studentLecture)
  }

  upsertCreatorLecture(courseId, lecture)
}
