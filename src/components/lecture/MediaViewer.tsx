import type { MediaItem } from '../../types'

interface MediaViewerProps {
  media: MediaItem[]
  watermarkEnabled?: boolean
  allowDownload?: boolean
}

const getYouTubeEmbedUrl = (url: string): string | null => {
  try {
    // Handle youtube.com/watch?v=ID
    const watchMatch = url.match(/youtube\.com\/watch\?v=([\w-]{11})/)
    if (watchMatch) {
      return `https://www.youtube.com/embed/${watchMatch[1]}`
    }

    // Handle youtu.be/ID
    const shortMatch = url.match(/youtu\.be\/([\w-]{11})/)
    if (shortMatch) {
      return `https://www.youtube.com/embed/${shortMatch[1]}`
    }

    return null
  } catch {
    return null
  }
}

const getVimeoEmbedUrl = (url: string): string | null => {
  try {
    // Handle vimeo.com/ID
    const match = url.match(/vimeo\.com\/(\d+)/)
    if (match) {
      return `https://player.vimeo.com/video/${match[1]}`
    }

    return null
  } catch {
    return null
  }
}

const isDirectVideoFile = (url: string): boolean => {
  const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi', '.mkv']
  const lowerUrl = url.toLowerCase()
  return videoExtensions.some((ext) => lowerUrl.endsWith(ext))
}

const MediaViewer = ({ media, watermarkEnabled = true, allowDownload = false }: MediaViewerProps) => {
  return (
    <div className="media-viewer">
      {media.map((item) => {
        const isVideo = item.type === 'video'
        const youtubeUrl = isVideo ? getYouTubeEmbedUrl(item.url) : null
        const vimeoUrl = isVideo && !youtubeUrl ? getVimeoEmbedUrl(item.url) : null
        const isDirectVideo = isVideo && !youtubeUrl && !vimeoUrl && isDirectVideoFile(item.url)
        const isUnsupportedVideo = isVideo && !youtubeUrl && !vimeoUrl && !isDirectVideo

        return (
          <div key={item.id} className="media-viewer__item">
            {watermarkEnabled ? (
              <div className="media-viewer__watermark" aria-hidden="true">
                Protected Content
              </div>
            ) : null}

            {youtubeUrl ? (
              <div className="media-viewer__video-wrap media-viewer__video-wrap--responsive">
                <iframe
                  src={youtubeUrl}
                  className="media-viewer__iframe"
                  title={item.title || 'YouTube Video'}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : vimeoUrl ? (
              <div className="media-viewer__video-wrap media-viewer__video-wrap--responsive">
                <iframe
                  src={vimeoUrl}
                  className="media-viewer__iframe"
                  title={item.title || 'Vimeo Video'}
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : isDirectVideo ? (
              <div className="media-viewer__video-wrap">
                <video controls preload="metadata" className="media-viewer__video">
                  <source src={item.url} />
                  متصفحك لا يدعم تشغيل الفيديو
                </video>
              </div>
            ) : isUnsupportedVideo ? (
              <div className="media-viewer__unsupported">
                <p>رابط الفيديو غير مدعوم للمعاينة</p>
                <p className="media-viewer__unsupported-url">{item.url}</p>
              </div>
            ) : item.type === 'image' ? (
              <div className="media-viewer__image-wrap">
                <img src={item.url} alt={item.title || 'صورة'} className="media-viewer__image" />
              </div>
            ) : null}

            {item.title ? <h4 className="media-viewer__title">{item.title}</h4> : null}
            {item.description ? <p className="media-viewer__description">{item.description}</p> : null}

            {allowDownload && item.url ? (
              <a className="media-viewer__download" href={item.url} target="_blank" rel="noreferrer" download>
                تحميل الوسائط
              </a>
            ) : null}
          </div>
        )
      })}
    </div>
  )
}

export default MediaViewer
