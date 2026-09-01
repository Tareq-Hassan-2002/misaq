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

export type UserRole = 'student' | 'admin'

export interface User {
  id: string
  name: string
  username?: string
  studentNumber?: string
  role: UserRole
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
  updatedAt?: string
  lectures?: Lecture[]
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

export type MediaType = 'video' | 'image'

export interface MediaItem {
  id: string
  type: MediaType
  url: string
  title: string
  description: string
}

export type PriorityLevel = 'essential' | 'memorize' | 'understand'

export interface ExerciseData {
  question: string
  hints: string[]
  solution: string
  explanation?: string
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
  media?: MediaItem[]
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
