import type { ContentBlock, CreatorLecture } from './types'

const STORAGE_KEYS = {
  drafts: 'misaq-creator-drafts',
  published: 'misaq-creator-published',
}

export interface CreatorStorageEntry {
  lectureId: string
  courseId: string
  data: CreatorLecture
}

const safeParse = <T>(value: string | null): T | null => {
  if (!value) {
    return null
  }

  try {
    return JSON.parse(value) as T
  } catch {
    return null
  }
}

export const getCreatorDrafts = (): Record<string, CreatorStorageEntry> => {
  if (typeof window === 'undefined') {
    return {}
  }

  return safeParse<Record<string, CreatorStorageEntry>>(window.localStorage.getItem(STORAGE_KEYS.drafts)) ?? {}
}

export const getCreatorPublished = (): Record<string, CreatorStorageEntry> => {
  if (typeof window === 'undefined') {
    return {}
  }

  return safeParse<Record<string, CreatorStorageEntry>>(window.localStorage.getItem(STORAGE_KEYS.published)) ?? {}
}

export const saveCreatorDraft = (entry: CreatorStorageEntry) => {
  if (typeof window === 'undefined') {
    return
  }

  const saved = getCreatorDrafts()
  saved[entry.lectureId] = entry
  window.localStorage.setItem(STORAGE_KEYS.drafts, JSON.stringify(saved))
}

export const saveCreatorPublished = (entry: CreatorStorageEntry) => {
  if (typeof window === 'undefined') {
    return
  }

  const saved = getCreatorPublished()
  saved[entry.lectureId] = entry
  window.localStorage.setItem(STORAGE_KEYS.published, JSON.stringify(saved))
}

export const loadCreatorLecture = (lectureId: string): CreatorLecture | null => {
  const draft = getCreatorDrafts()[lectureId]
  if (draft) {
    return draft.data
  }

  const published = getCreatorPublished()[lectureId]
  if (published) {
    return published.data
  }

  return null
}

export const createEmptyBlock = (type: ContentBlock['type']): ContentBlock => {
  const base = {
    id: `block-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
    type,
    order: Date.now(),
  }

  switch (type) {
    case 'title':
      return { ...base, title: 'عنوان جديد' }
    case 'paragraph':
      return { ...base, content: 'نص جديد' }
    case 'note':
      return { ...base, content: 'ملاحظة' }
    case 'example':
      return { ...base, content: 'مثال' }
    case 'priority':
      return { ...base, content: 'أولوية', level: 'essential' }
    case 'prerequisite':
      return { ...base, content: 'متطلبات سابقة', items: ['عنصر 1'] }
    case 'definition':
      return { ...base, title: 'تعريف', content: 'المحتوى' }
    case 'keyConcept':
      return { ...base, title: 'مفهوم رئيسي', content: 'التفسير' }
    case 'comparison':
      return {
        ...base,
        title: 'مقارنة',
        comparison: {
          title: 'مقارنة',
          leftTitle: 'الجانب الأيمن',
          rightTitle: 'الجانب الأيسر',
          items: [{ left: 'عنصر', right: 'عنصر' }],
        },
      }
    case 'focus':
      return { ...base, focus: { title: 'التركيز', content: 'تفاصيل التركيز' } }
    case 'reflection':
      return { ...base, reflection: { question: 'سؤال التأمل' } }
    case 'exercise':
      return {
        ...base,
        exercise: {
          question: 'السؤال',
          hints: ['تلميح 1'],
          solution: 'الحل',
        },
      }
    default:
      return base
  }
}
