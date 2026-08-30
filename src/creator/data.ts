import type { CreatorCourse } from './types'

export const creatorCourses: CreatorCourse[] = [
  {
    id: 'creator-net-402',
    code: 'NET-402',
    name: 'شبكات الحاسوب 2',
    description: 'تجهيز محتوى المحاضرات وتحديث الوحدات التعليمية الخاصة بالشبكات.',
    status: 'published',
    lectureCount: 5,
    updatedAt: '2026-08-30',
    lectures: [
      {
        id: 'creator-lecture-1',
        courseId: 'creator-net-402',
        title: 'مقدمة في الشبكات',
        description: 'مقدمة تعليمية للطلاب حول مفهوم الشبكات.',
        order: 1,
        status: 'published',
        blocks: [
          {
            id: 'block-1',
            type: 'title',
            order: 1,
            title: 'مقدمة في الشبكات',
          },
          {
            id: 'block-2',
            type: 'paragraph',
            order: 2,
            content: 'الشبكة هي مجموعة أجهزة مرتبطة بهدف تبادل المعلومات.',
          },
        ],
      },
      {
        id: 'creator-lecture-2',
        courseId: 'creator-net-402',
        title: 'نموذج OSI',
        description: 'شرح الطبقات السبع لنموذج OSI.',
        order: 2,
        status: 'draft',
        blocks: [
          {
            id: 'block-3',
            type: 'definition',
            order: 1,
            title: 'تعريف OSI',
            content: 'نموذج نظري يصف كيفية انتقال البيانات عبر الشبكة.',
          },
        ],
      },
    ],
  },
  {
    id: 'creator-mgt-401',
    code: 'MGT-401',
    name: 'إدارة المنظمات',
    description: 'إدارة المنظمات والتخطيط والقيادة في المؤسسات الحديثة.',
    status: 'draft',
    lectureCount: 3,
    updatedAt: '2026-08-29',
    lectures: [
      {
        id: 'creator-lecture-3',
        courseId: 'creator-mgt-401',
        title: 'أساسيات الإدارة',
        description: 'مقدمة إلى الإدارة وأنواعها.',
        order: 1,
        status: 'draft',
        blocks: [
          {
            id: 'block-4',
            type: 'paragraph',
            order: 1,
            content: 'الإدارة تهدف إلى تحقيق الأهداف بفعالية وكفاءة.',
          },
        ],
      },
    ],
  },
]
