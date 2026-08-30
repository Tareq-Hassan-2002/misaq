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
      {
        id: 'lecture-2-prerequisite',
        type: 'prerequisite',
        content: 'تحتاج قبل هذه المحاضرة',
        items: ['أساسيات الشبكات', 'مفاهيم الاتصال بين الأجهزة', 'مقدمة إلى البروتوكولات'],
      },
      {
        id: 'lecture-2-exercise',
        type: 'exercise',
        exercise: {
          question: 'رتب طبقات نموذج OSI من الأعلى إلى الأسفل',
          hints: [
            'فكر بالطبقة التي يتعامل معها المستخدم أولًا',
            'الطبقة الفيزيائية هي آخر طبقة',
          ],
          solution: 'Application → Presentation → Session → Transport → Network → Data Link → Physical',
        },
      },
      {
        id: 'lecture-2-definition',
        type: 'definition',
        definition: {
          title: 'تعريف نموذج OSI',
          content:
            'نموذج OSI هو إطار نظري يشرح كيفية انتقال البيانات عبر الشبكة من خلال سبع طبقات مترابطة.',
        },
      },
      {
        id: 'lecture-2-key-concept',
        type: 'keyConcept',
        keyConcept: {
          title: 'الفكرة الأساسية',
          explanation:
            'كل طبقة من طبقات النموذج لها مسؤولية محددة، وهذا يساعد في تنظيم التواصل وتقليل التعقيد.',
        },
      },
      {
        id: 'lecture-2-comparison',
        type: 'comparison',
        comparison: {
          title: 'OSI مقابل TCP/IP',
          leftTitle: 'OSI',
          rightTitle: 'TCP/IP',
          items: [
            {
              left: 'سبع طبقات',
              right: 'أربع طبقات',
            },
            {
              left: 'نظري أكثر من العملي',
              right: 'مستخدم فعليًا في الشبكات',
            },
            {
              left: 'يُستخدم للتعليم والتحليل',
              right: 'يُستخدم في التنفيذ العملي',
            },
          ],
        },
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
