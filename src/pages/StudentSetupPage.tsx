import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/ui/Button/Button'
import Select from '../components/ui/Select/Select'
import Card from '../components/ui/Card/Card'
import MainLayout from '../layouts/MainLayout'
import { academicSemesters, academicYears, universities } from '../data/academicData'
import type { StudentAcademicSelection } from '../types'
import './StudentSetupPage.css'

const emptySelection: StudentAcademicSelection = {
  universityId: '',
  facultyId: '',
  year: '',
  semester: '',
}

const StudentSetupPage = () => {
  const navigate = useNavigate()
  const [selection, setSelection] = useState<StudentAcademicSelection>(emptySelection)

  const selectedUniversity = useMemo(
    () => universities.find((university) => university.id === selection.universityId),
    [selection.universityId],
  )

  const selectedFaculty = useMemo(
    () => selectedUniversity?.faculties.find((faculty) => faculty.id === selection.facultyId),
    [selectedUniversity, selection.facultyId],
  )

  const facultyOptions = selectedUniversity?.faculties ?? []
  const isReady = Boolean(
    selection.universityId &&
      selection.facultyId &&
      selection.year &&
      selection.semester,
  )

  const handleUniversityChange = (value: string) => {
    setSelection(() => ({
      ...emptySelection,
      universityId: value,
    }))
  }

  const handleFacultyChange = (value: string) => {
    setSelection((current) => ({
      ...current,
      facultyId: value,
      year: '',
      semester: '',
    }))
  }

  const handleYearChange = (value: string) => {
    setSelection((current) => ({
      ...current,
      year: value,
      semester: '',
    }))
  }

  const handleSemesterChange = (value: string) => {
    setSelection((current) => ({
      ...current,
      semester: value,
    }))
  }

  const handleSubmit = () => {
    if (!isReady) {
      return
    }

    navigate('/courses', { state: { selection } })
  }

  return (
    <MainLayout>
      <section className="student-setup">
        <div className="container student-setup__layout">
          <Card className="student-setup__card" padding="lg">
            <div className="student-setup__form">
              <div className="student-setup__header">
                <span className="student-setup__step">خطوة 1 من 1</span>
                <h1 className="student-setup__title">لنبدأ رحلتك</h1>
                <p className="student-setup__subtitle">
                  أخبرنا عن مسارك الدراسي لنُظهر لك المواد المناسبة لك.
                </p>
              </div>

              <div className="student-setup__fields">
                <Select
                  label="الجامعة"
                  name="universityId"
                  value={selection.universityId}
                  placeholder="اختر جامعتك"
                  onChange={(event) => handleUniversityChange(event.target.value)}
                  options={universities.map((university) => ({
                    value: university.id,
                    label: university.name,
                  }))}
                />

                <Select
                  label="الكلية"
                  name="facultyId"
                  value={selection.facultyId}
                  placeholder="اختر كليتك"
                  disabled={!selection.universityId}
                  onChange={(event) => handleFacultyChange(event.target.value)}
                  options={facultyOptions.map((faculty) => ({
                    value: faculty.id,
                    label: faculty.name,
                  }))}
                />

                <Select
                  label="السنة الدراسية"
                  name="year"
                  value={selection.year}
                  placeholder="اختر السنة الدراسية"
                  disabled={!selection.facultyId}
                  onChange={(event) => handleYearChange(event.target.value)}
                  options={academicYears.map((year) => ({
                    value: year,
                    label: year,
                  }))}
                />

                <Select
                  label="الفصل الدراسي"
                  name="semester"
                  value={selection.semester}
                  placeholder="اختر الفصل الدراسي"
                  disabled={!selection.year}
                  onChange={(event) => handleSemesterChange(event.target.value)}
                  options={academicSemesters.map((semester) => ({
                    value: semester,
                    label: semester,
                  }))}
                />
              </div>

              <div className="student-setup__actions">
                <Button variant="primary" disabled={!isReady} onClick={handleSubmit}>
                  أرني موادي
                </Button>
              </div>
            </div>
          </Card>

          <Card className="student-setup__summary" padding="lg">
            <h3>ملخص اختيارك</h3>
            <ul className="student-setup__summary-list">
              <li>
                <strong>الجامعة:</strong> {selectedUniversity?.name ?? 'لم يتم الاختيار'}
              </li>
              <li>
                <strong>الكلية:</strong> {selectedFaculty?.name ?? 'لم يتم الاختيار'}
              </li>
              <li>
                <strong>السنة:</strong> {selection.year || 'لم يتم الاختيار'}
              </li>
              <li>
                <strong>الفصل:</strong> {selection.semester || 'لم يتم الاختيار'}
              </li>
            </ul>
          </Card>
        </div>
      </section>
    </MainLayout>
  )
}

export default StudentSetupPage
