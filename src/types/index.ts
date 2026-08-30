export interface StudentAcademicSelection {
  universityId: string
  facultyId: string
  year: string
  semester: string
}

export interface FacultyOption {
  id: string
  name: string
}

export interface UniversityOption {
  id: string
  name: string
  faculties: FacultyOption[]
}

export type SemesterType = 'first' | 'second'

export type CourseStatus = 'active' | 'inactive'

export interface University {
  id: string
  name: string
}

export interface Faculty {
  id: string
  universityId: string
  name: string
}

export interface AcademicYear {
  id: string
  label: string
}

export interface Semester {
  id: SemesterType
  label: string
}

export interface Course {
  id: string
  code: string
  name: string
  description: string
  universityId: string
  facultyId: string
  year: string
  semester: SemesterType
  lectureCount: number
  publishedLectureCount: number
  status: CourseStatus
}

export type LectureStatus = 'draft' | 'published'

export type LectureBlockType =
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

export type PriorityLevel = 'essential' | 'memorize' | 'understand'

export interface ExerciseData {
  question: string
  hints: string[]
  solution: string
}

export interface DefinitionData {
  title: string
  content: string
}

export interface KeyConceptData {
  title: string
  explanation: string
}

export interface ComparisonItem {
  left: string
  right: string
}

export interface ComparisonData {
  title: string
  leftTitle: string
  rightTitle: string
  items: ComparisonItem[]
}

export interface FocusBlockData {
  title: string
  content: string
}

export interface ReflectionBlockData {
  question: string
}

export interface LectureBlock {
  id: string
  type: LectureBlockType
  content?: string
  level?: PriorityLevel
  items?: string[]
  exercise?: ExerciseData
  definition?: DefinitionData
  keyConcept?: KeyConceptData
  comparison?: ComparisonData
  focus?: FocusBlockData
  reflection?: ReflectionBlockData
}

export interface Lecture {
  id: string
  courseId: string
  title: string
  description: string
  order: number
  status: LectureStatus
  blocks: LectureBlock[]
}
