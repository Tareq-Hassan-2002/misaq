import type { MediaItem } from '../../types'

interface MediaViewerProps {
  media: MediaItem[]
}

const MediaViewer = ({ media }: MediaViewerProps) => {
  return (
    <div className="media-viewer">
      {media.map((item) => (
        <div key={item.id} className="media-viewer__item">
          <div className="media-viewer__watermark" aria-hidden="true">
            Protected Content
          </div>

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
        </div>
      ))}
    </div>
  )
}

export default MediaViewer
