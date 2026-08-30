import type { MediaItem } from '../../types'

interface MediaViewerProps {
  media: MediaItem[]
  watermarkEnabled?: boolean
  allowDownload?: boolean
}

const MediaViewer = ({ media, watermarkEnabled = true, allowDownload = false }: MediaViewerProps) => {
  return (
    <div className="media-viewer">
      {media.map((item) => (
        <div key={item.id} className="media-viewer__item">
          {watermarkEnabled ? (
            <div className="media-viewer__watermark" aria-hidden="true">
              Protected Content
            </div>
          ) : null}

          {item.type === 'video' ? (
            <div className="media-viewer__video-wrap">
              <video controls preload="metadata" className="media-viewer__video">
                <source src={item.url} />
              </video>
            </div>
          ) : (
            <div className="media-viewer__image-wrap">
              <img src={item.url} alt={item.title || 'media'} className="media-viewer__image" />
            </div>
          )}

          {item.title ? <h4 className="media-viewer__title">{item.title}</h4> : null}
          {item.description ? <p className="media-viewer__description">{item.description}</p> : null}

          {allowDownload && item.url ? (
            <a className="media-viewer__download" href={item.url} target="_blank" rel="noreferrer" download>
              تحميل الوسائط
            </a>
          ) : null}
        </div>
      ))}
    </div>
  )
}

export default MediaViewer
