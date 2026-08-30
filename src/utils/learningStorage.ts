export interface LearningProgressState {
  completedLectures: string[]
}

const STORAGE_KEY = 'misaq-learning-state'

const readState = (): LearningProgressState => {
  if (typeof window === 'undefined') {
    return { completedLectures: [] }
  }

  try {
    const rawValue = window.localStorage.getItem(STORAGE_KEY)

    if (!rawValue) {
      return { completedLectures: [] }
    }

    const parsed = JSON.parse(rawValue) as Partial<LearningProgressState>

    if (!parsed || !Array.isArray(parsed.completedLectures)) {
      return { completedLectures: [] }
    }

    return {
      completedLectures: parsed.completedLectures.filter((lectureId): lectureId is string => typeof lectureId === 'string'),
    }
  } catch {
    return { completedLectures: [] }
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
    }),
  )
}
