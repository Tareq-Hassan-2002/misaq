export type CreatorCourseStatus = 'draft' | 'published' | 'archived'

export type CreatorLectureStatus = 'draft' | 'published'

export type ContentBlockType =
  | 'title'
  | 'paragraph'
  | 'priority'
  | 'note'
  | 'example'
  | 'prerequisite'
  | 'exercise'
  | 'definition'
  | 'keyConcept'
  | 'comparison'
  | 'focus'
  | 'reflection'

export type CreatorPriorityLevel = 'essential' | 'memorize' | 'understand'

export interface ExercisePayload {
  question: string
  hints: string[]
  solution: string
}

export interface DefinitionPayload {
  title: string
  content: string
}

export interface KeyConceptPayload {
  title: string
  explanation: string
}

export interface ComparisonItemPayload {
  left: string
  right: string
}

export interface ComparisonPayload {
  title: string
  leftTitle: string
  rightTitle: string
  items: ComparisonItemPayload[]
}

export interface FocusPayload {
  title: string
  content: string
}

export interface ReflectionPayload {
  question: string
}

export interface ContentBlock {
  id: string
  type: ContentBlockType
  order: number
  content?: string
  title?: string
  level?: CreatorPriorityLevel
  items?: string[]
  exercise?: ExercisePayload
  definition?: DefinitionPayload
  keyConcept?: KeyConceptPayload
  comparison?: ComparisonPayload
  focus?: FocusPayload
  reflection?: ReflectionPayload
}

export interface CreatorLecture {
  id: string
  courseId: string
  title: string
  description: string
  order: number
  status: CreatorLectureStatus
  blocks: ContentBlock[]
}

export interface CreatorCourse {
  id: string
  code: string
  name: string
  description: string
  status: CreatorCourseStatus
  lectureCount: number
  updatedAt: string
  lectures: CreatorLecture[]
}
