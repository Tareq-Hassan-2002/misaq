import { courses as seedCourses } from './data/courseData'
import { lectures as seedLectures } from './data/lectureData'
import type { Course, Lecture, StudentAcademicSelection } from './types'

const STORAGE_KEYS = {
  content: 'misaq-content',
  studentSelection: 'misaq-student-selection',
} as const

export interface UnifiedContentState {
  courses: Course[]
  lectures: Lecture[]
  updatedAt: string
}

const toCourseWithLectures = (courses: Course[], lectures: Lecture[]): Course[] => {
  return courses.map((course) => {
    const courseLectures = lectures.filter((lecture) => lecture.courseId === course.id)

    return {
      ...course,
      lectures: courseLectures,
      lectureCount: courseLectures.length,
      publishedLectureCount: courseLectures.filter((lecture) => lecture.status === 'published').length,
    }
  })
}

const buildInitialState = (): UnifiedContentState => {
  const initialLectures = seedLectures.map((lecture) => ({
    ...lecture,
    blocks: lecture.blocks ?? [],
  }))

  const initialCourses = toCourseWithLectures(
    seedCourses.map((course) => ({ ...course, lectures: [] })),
    initialLectures,
  )

  return {
    courses: initialCourses,
    lectures: initialLectures,
    updatedAt: new Date().toISOString(),
  }
}

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

export const getContentState = (): UnifiedContentState => {
  if (typeof window === 'undefined') {
    return buildInitialState()
  }

  const rawValue = window.localStorage.getItem(STORAGE_KEYS.content)
  const parsedValue = safeParse<UnifiedContentState>(rawValue)

  if (!parsedValue || !Array.isArray(parsedValue.courses) || !Array.isArray(parsedValue.lectures)) {
    return buildInitialState()
  }

  const normalizedLectures = parsedValue.lectures.map((lecture) => ({
    ...lecture,
    blocks: lecture.blocks ?? [],
  }))

  const normalizedCourses = toCourseWithLectures(parsedValue.courses, normalizedLectures)

  return {
    courses: normalizedCourses,
    lectures: normalizedLectures,
    updatedAt: parsedValue.updatedAt ?? new Date().toISOString(),
  }
}

const persistContentState = (state: UnifiedContentState) => {
  if (typeof window === 'undefined') {
    return state
  }

  const normalizedState: UnifiedContentState = {
    courses: toCourseWithLectures(state.courses, state.lectures),
    lectures: state.lectures.map((lecture) => ({
      ...lecture,
      blocks: lecture.blocks ?? [],
    })),
    updatedAt: new Date().toISOString(),
  }

  window.localStorage.setItem(STORAGE_KEYS.content, JSON.stringify(normalizedState))

  return normalizedState
}

export const getCourses = (): Course[] => {
  return getContentState().courses
}

export const getCourse = (courseId: string): Course | undefined => {
  return getContentState().courses.find((course) => course.id === courseId)
}

export const getLectures = (courseId?: string): Lecture[] => {
  const lectures = getContentState().lectures

  if (!courseId) {
    return lectures
  }

  return lectures.filter((lecture) => lecture.courseId === courseId)
}

export const getLecture = (lectureId: string): Lecture | undefined => {
  return getContentState().lectures.find((lecture) => lecture.id === lectureId)
}

export const upsertLecture = (lecture: Lecture): Lecture => {
  const state = getContentState()
  const nextLectures = [...state.lectures.filter((item) => item.id !== lecture.id), lecture]
  const nextState = persistContentState({
    ...state,
    lectures: nextLectures,
    courses: toCourseWithLectures(state.courses, nextLectures),
  })

  return nextState.lectures.find((item) => item.id === lecture.id) ?? lecture
}

export const upsertCourse = (course: Course): Course => {
  const state = getContentState()
  const nextCourses = [...state.courses.filter((item) => item.id !== course.id), course]
  const nextState = persistContentState({
    ...state,
    courses: nextCourses,
    lectures: state.lectures,
  })

  return nextState.courses.find((item) => item.id === course.id) ?? course
}

export const createCourse = (course: Course): Course => {
  const state = getContentState()
  const nextCourse = {
    ...course,
    lectures: course.lectures ?? [],
    lectureCount: course.lectures?.length ?? 0,
    publishedLectureCount: (course.lectures ?? []).filter((lecture) => lecture.status === 'published').length,
  }

  const nextState = persistContentState({
    ...state,
    courses: [nextCourse, ...state.courses],
    lectures: [...state.lectures, ...(course.lectures ?? [])],
  })

  return nextState.courses.find((item) => item.id === course.id) ?? nextCourse
}

export const createLecture = (courseId: string, lecture: Lecture): Lecture => {
  const state = getContentState()
  const nextLectures = [...state.lectures.filter((item) => item.id !== lecture.id), lecture]
  const nextState = persistContentState({
    ...state,
    lectures: nextLectures,
    courses: toCourseWithLectures(state.courses, nextLectures),
  })

  if (!nextState.courses.some((course) => course.id === courseId)) {
    const fallbackCourse: Course = {
      id: courseId,
      code: courseId.toUpperCase(),
      name: 'مادة جديدة',
      description: 'محتوى محذوف ضمن التخزين الموحد.',
      universityId: 'tishreen',
      facultyId: 'it',
      year: 'السنة الرابعة',
      semester: 'first',
      lectureCount: 1,
      publishedLectureCount: lecture.status === 'published' ? 1 : 0,
      status: 'active',
      lectures: [lecture],
    }

    persistContentState({
      ...nextState,
      courses: [fallbackCourse, ...nextState.courses],
    })
  }

  return nextState.lectures.find((item) => item.id === lecture.id) ?? lecture
}

export const publishLecture = (lecture: Lecture): Lecture => {
  return upsertLecture({ ...lecture, status: 'published' })
}

export const saveStudentSelection = (selection: StudentAcademicSelection): StudentAcademicSelection => {
  if (typeof window === 'undefined') {
    return selection
  }

  window.localStorage.setItem(STORAGE_KEYS.studentSelection, JSON.stringify(selection))
  return selection
}

export const getStudentSelection = (): StudentAcademicSelection | null => {
  if (typeof window === 'undefined') {
    return null
  }

  const rawValue = window.localStorage.getItem(STORAGE_KEYS.studentSelection)
  const parsedValue = safeParse<StudentAcademicSelection>(rawValue)

  if (!parsedValue) {
    return null
  }

  return parsedValue
}
