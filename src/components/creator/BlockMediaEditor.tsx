import type { ContentBlock, MediaItem } from '../../creator/types'

interface BlockMediaEditorProps {
  block: ContentBlock
  onChange: (block: ContentBlock) => void
}

const createMediaItem = (type: MediaItem['type']): MediaItem => ({
  id: `media-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
  type,
  url: '',
  title: type === 'video' ? 'عنوان الفيديو' : 'عنوان الصورة',
  description: '',
})

const BlockMediaEditor = ({ block, onChange }: BlockMediaEditorProps) => {
  const media = block.media ?? []

  const updateMedia = (mediaId: string, updates: Partial<MediaItem>) => {
    onChange({
      ...block,
      media: (block.media ?? []).map((item) => (item.id === mediaId ? { ...item, ...updates } : item)),
    })
  }

  const addMedia = (type: MediaItem['type']) => {
    onChange({
      ...block,
      media: [...media, createMediaItem(type)],
    })
  }

  const removeMedia = (mediaId: string) => {
    onChange({
      ...block,
      media: (block.media ?? []).filter((item) => item.id !== mediaId),
    })
  }

  return (
    <div className="creator-media-editor">
      <div className="creator-media-editor__header">
        <label>الوسائط</label>
        <div className="creator-media-editor__actions">
          <button type="button" onClick={() => addMedia('video')}>+ فيديو</button>
          <button type="button" onClick={() => addMedia('image')}>+ صورة</button>
        </div>
      </div>

      {media.length === 0 ? <p className="creator-media-editor__empty">لا توجد وسائط في هذا البلوك.</p> : null}

      {media.map((item) => (
        <div key={item.id} className="creator-media-editor__item">
          <div className="creator-media-editor__row">
            <label>النوع</label>
            <select
              value={item.type}
              onChange={(event) =>
                updateMedia(item.id, { type: event.target.value as MediaItem['type'] })
              }
            >
              <option value="video">فيديو</option>
              <option value="image">صورة</option>
            </select>
          </div>

          <div className="creator-media-editor__row">
            <label>العنوان</label>
            <input
              value={item.title}
              onChange={(event) => updateMedia(item.id, { title: event.target.value })}
            />
          </div>

          <div className="creator-media-editor__row">
            <label>الوصف</label>
            <textarea
              value={item.description}
              onChange={(event) => updateMedia(item.id, { description: event.target.value })}
            />
          </div>

          <div className="creator-media-editor__row">
            <label>رابط {item.type === 'video' ? 'الفيديو' : 'الصورة'}</label>
            <input
              type="url"
              value={item.url}
              onChange={(event) => updateMedia(item.id, { url: event.target.value })}
            />
          </div>

          <button type="button" className="creator-media-editor__remove" onClick={() => removeMedia(item.id)}>
            حذف الوسائط
          </button>
        </div>
      ))}
    </div>
  )
}

export default BlockMediaEditor
