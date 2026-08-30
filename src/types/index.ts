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
