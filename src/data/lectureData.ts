import type { Lecture } from '../types'

export const lectures: Lecture[] = [
  {
    id: 'lecture-1',
    courseId: 'net-402',
    title: 'مقدمة في الشبكات',
    description: 'تعرف على مفهوم الشبكات، أنواعها، ومكونات الاتصال بين أجهزة الكمبيوتر.',
    order: 1,
    status: 'published',
    blocks: [],
  },
  {
    id: 'lecture-2',
    courseId: 'net-402',
    title: 'نموذج OSI',
    description: 'تعرف على الطبقات السبع لنموذج OSI وكيفية تفاعلها في تبادل البيانات.',
    order: 2,
    status: 'published',
    blocks: [
      {
        id: 'lecture-2-title',
        type: 'title',
        content: 'نموذج OSI',
      },
      {
        id: 'lecture-2-paragraph',
        type: 'paragraph',
        content: 'شرح مختصر عن نموذج OSI ولماذا تم استخدامه في تصميم الشبكات الحديثة.',
      },
      {
        id: 'lecture-2-priority',
        type: 'priority',
        content: 'مهم جدًا: يجب فهم فكرة تقسيم الشبكات إلى طبقات.',
        level: 'essential',
      },
      {
        id: 'lecture-2-note',
        type: 'note',
        content: 'نموذج OSI يتكون من سبع طبقات.',
      },
      {
        id: 'lecture-2-example',
        type: 'example',
        content: 'عند إرسال رسالة عبر الإنترنت تمر البيانات عبر عدة طبقات قبل الوصول إلى الطرف الآخر.',
      },
    ],
  },
  {
    id: 'lecture-3',
    courseId: 'net-402',
    title: 'TCP و UDP',
    description: 'قارن بين بروتوكولي TCP و UDP من حيث الموثوقية والسرعة والتطبيقات المناسبة.',
    order: 3,
    status: 'published',
    blocks: [],
  },
  {
    id: 'lecture-4',
    courseId: 'net-402',
    title: 'IP Addressing',
    description: 'استكشف مفهوم العناوين IP، الأنواع، والهيكل الأساسي لتوجيه البيانات.',
    order: 4,
    status: 'draft',
    blocks: [],
  },
  {
    id: 'lecture-5',
    courseId: 'net-402',
    title: 'Subnetting',
    description: 'تعرف على تقسيم الشبكات إلى subnets لتحسين الأداء وإدارة العناوين.',
    order: 5,
    status: 'draft',
    blocks: [],
  },
]
