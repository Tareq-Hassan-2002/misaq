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
