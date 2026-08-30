import type { Lecture } from '../types'

export const lectures: Lecture[] = [
  {
    id: 'lecture-1',
    courseId: 'net-402',
    title: 'مقدمة في الشبكات',
    description: 'تعرف على مفهوم الشبكات، أنواعها، ومكونات الاتصال بين أجهزة الكمبيوتر.',
    order: 1,
    status: 'published',
  },
  {
    id: 'lecture-2',
    courseId: 'net-402',
    title: 'نموذج OSI',
    description: 'تعرف على الطبقات السبع لنموذج OSI وكيفية تفاعلها في تبادل البيانات.',
    order: 2,
    status: 'published',
  },
  {
    id: 'lecture-3',
    courseId: 'net-402',
    title: 'TCP و UDP',
    description: 'قارن بين بروتوكولي TCP و UDP من حيث الموثوقية والسرعة والتطبيقات المناسبة.',
    order: 3,
    status: 'published',
  },
  {
    id: 'lecture-4',
    courseId: 'net-402',
    title: 'IP Addressing',
    description: 'استكشف مفهوم العناوين IP، الأنواع، والهيكل الأساسي لتوجيه البيانات.',
    order: 4,
    status: 'draft',
  },
  {
    id: 'lecture-5',
    courseId: 'net-402',
    title: 'Subnetting',
    description: 'تعرف على تقسيم الشبكات إلى subnets لتحسين الأداء وإدارة العناوين.',
    order: 5,
    status: 'draft',
  },
]
