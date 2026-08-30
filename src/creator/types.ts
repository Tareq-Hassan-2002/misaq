export type CreatorCourseStatus = 'draft' | 'published' | 'archived'

export type CreatorLectureStatus = 'draft' | 'published'

export type ContentBlockType = 'title' | 'paragraph' | 'note' | 'exercise' | 'definition' | 'keyConcept' | 'comparison'

export interface ContentBlock {
  id: string
  type: ContentBlockType
  order: number
  title?: string
  content?: string
  items?: string[]
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
