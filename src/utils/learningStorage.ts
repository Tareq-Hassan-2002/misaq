export interface LearningProgressState {
  completedLectures: string[]
  understoodLectures: string[]
}

const STORAGE_KEY = 'misaq-learning-state'

const readState = (): LearningProgressState => {
  if (typeof window === 'undefined') {
    return { completedLectures: [], understoodLectures: [] }
  }

  try {
    const rawValue = window.localStorage.getItem(STORAGE_KEY)

    if (!rawValue) {
      return { completedLectures: [], understoodLectures: [] }
    }

    const parsed = JSON.parse(rawValue) as Partial<LearningProgressState>

    if (!parsed) {
      return { completedLectures: [], understoodLectures: [] }
    }

    return {
      completedLectures: Array.isArray(parsed.completedLectures)
        ? parsed.completedLectures.filter((lectureId): lectureId is string => typeof lectureId === 'string')
        : [],
      understoodLectures: Array.isArray(parsed.understoodLectures)
        ? parsed.understoodLectures.filter((lectureId): lectureId is string => typeof lectureId === 'string')
        : [],
    }
  } catch {
    return { completedLectures: [], understoodLectures: [] }
  }
}

export const getCompletedLectures = (): string[] => {
  return readState().completedLectures
}

export const isLectureCompleted = (lectureId: string): boolean => {
  return getCompletedLectures().includes(lectureId)
}

export const markLectureAsCompleted = (lectureId: string): void => {
  if (typeof window === 'undefined' || !lectureId) {
    return
  }

  const currentState = readState()
  const updatedLectures = Array.from(new Set([...currentState.completedLectures, lectureId]))

  window.localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      completedLectures: updatedLectures,
      understoodLectures: currentState.understoodLectures,
    }),
  )
}

export const markLectureAsUnderstood = (lectureId: string): void => {
  if (typeof window === 'undefined' || !lectureId) {
    return
  }

  const currentState = readState()
  const updatedUnderstood = Array.from(new Set([...currentState.understoodLectures, lectureId]))

  window.localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      completedLectures: currentState.completedLectures,
      understoodLectures: updatedUnderstood,
    }),
  )
}

export const isLectureUnderstood = (lectureId: string): boolean => {
  return readState().understoodLectures.includes(lectureId)
}

export const clearLectureUnderstanding = (lectureId: string): void => {
  if (typeof window === 'undefined' || !lectureId) {
    return
  }

  const currentState = readState()
  const updatedUnderstood = currentState.understoodLectures.filter((id) => id !== lectureId)

  window.localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      completedLectures: currentState.completedLectures,
      understoodLectures: updatedUnderstood,
    }),
  )
}

