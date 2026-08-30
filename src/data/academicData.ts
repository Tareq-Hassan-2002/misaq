import type { UniversityOption } from '../types'

export const universities: UniversityOption[] = [
  {
    id: 'tishreen',
    name: 'جامعة تشرين',
    faculties: [
      { id: 'it', name: 'الهندسة المعلوماتية' },
      { id: 'civil', name: 'الهندسة المدنية' },
      { id: 'mechanical', name: 'الهندسة الميكانيكية' },
    ],
  },
  {
    id: 'damascus',
    name: 'جامعة دمشق',
    faculties: [
      { id: 'it', name: 'الهندسة المعلوماتية' },
      { id: 'civil', name: 'الهندسة المدنية' },
      { id: 'mechanical', name: 'الهندسة الميكانيكية' },
    ],
  },
  {
    id: 'aleppo',
    name: 'جامعة حلب',
    faculties: [
      { id: 'it', name: 'الهندسة المعلوماتية' },
      { id: 'civil', name: 'الهندسة المدنية' },
      { id: 'mechanical', name: 'الهندسة الميكانيكية' },
    ],
  },
]

export const academicYears = [
  'السنة الأولى',
  'السنة الثانية',
  'السنة الثالثة',
  'السنة الرابعة',
  'السنة الخامسة',
]

export const academicSemesters = ['الفصل الأول', 'الفصل الثاني']
