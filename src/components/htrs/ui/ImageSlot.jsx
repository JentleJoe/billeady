import { ImageIcon } from './Icons'

const toCssRatio = (ratio) => ratio?.replace(/\s/g, '') ?? '4/5'
const ratioLabel = (ratio) => ratio?.replace(/\s/g, '').replace('/', ':')
const fileName = (path) => path?.split('/').pop()

/** Four short corner marks, like crop marks on a print proof. */
const CornerMarks = () => (
  <span aria-hidden="true">
    <span className="absolute top-3 left-3 w-3 h-3 border-t border-l border-brand-primary-light/60" />
    <span className="absolute top-3 right-3 w-3 h-3 border-t border-r border-brand-primary-light/60" />
    <span className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-brand-primary-light/60" />
    <span className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-brand-primary-light/60" />
  </span>
)

/**
 * Renders an entry from the HTRS image map (src/config/htrs.js).
 * - With `src`: the real image. `fit: 'cover'` crops to the reserved ratio; `natural` keeps the file's own shape.
 * - Without `src`: a designed placeholder at the intended ratio, naming the image, its size and file name.
 * `compact` = small placeholder (testimonial portraits) showing `initials` instead of the full spec.
 */
const ImageSlot = ({ image, className = '', eager = false, compact = false, initials = '', ratio }) => {
  const frameRatio = toCssRatio(ratio ?? image.ratio)

  if (image.src) {
    const cover = image.fit === 'cover' || compact
    return (
      <div
        className={`overflow-hidden rounded-sm border border-white/10 bg-brand-muted shadow-2xl ${className}`}
        style={cover ? { aspectRatio: frameRatio } : undefined}
      >
        <img
          src={image.src}
          width={image.width ?? undefined}
          height={image.height ?? undefined}
          alt={image.alt ?? image.name}
          loading={eager ? 'eager' : 'lazy'}
          fetchPriority={eager ? 'high' : undefined}
          decoding="async"
          className={`block w-full ${cover ? 'h-full object-cover' : 'h-auto'}`}
          style={cover && image.position ? { objectPosition: image.position } : undefined}
        />
      </div>
    )
  }

  if (compact) {
    return (
      <div
        role="img"
        aria-label={`Image placeholder: ${image.name}`}
        title={`${image.name} — ${fileName(image.file)}`}
        className={`htrs-placeholder relative overflow-hidden rounded-sm border border-white/10 flex flex-col items-center justify-center gap-2 ${className}`}
        style={{ aspectRatio: frameRatio }}
      >
        <span className="text-2xl md:text-3xl font-semibold text-white/80 tracking-wide">{initials}</span>
        <span className="text-[9px] uppercase tracking-[0.2em] text-gray-400">Photo</span>
      </div>
    )
  }

  return (
    <div
      role="img"
      aria-label={`Image placeholder: ${image.name}`}
      className={`htrs-placeholder relative overflow-hidden rounded-sm border border-white/10 shadow-2xl flex flex-col items-center justify-center text-center px-8 py-10 ${className}`}
      style={{ aspectRatio: frameRatio }}
    >
      <CornerMarks />
      <span className="w-12 h-12 rounded-full border border-brand-primary-light/40 flex items-center justify-center text-brand-primary-light mb-5">
        <ImageIcon className="w-5 h-5" />
      </span>
      <span className="text-[10px] uppercase tracking-[0.25em] text-gray-400 mb-2">Image placeholder</span>
      <span className="text-base md:text-lg font-semibold text-white">{image.name}</span>
      {image.note && <span className="mt-2 text-xs md:text-sm text-gray-400 max-w-xs leading-relaxed">{image.note}</span>}
      <span className="mt-5 text-[11px] text-gray-500 tabular-nums">
        {image.recommended} · {ratioLabel(ratio ?? image.ratio)}
        <span className="block mt-1 text-gray-500/80">{fileName(image.file)}</span>
      </span>
    </div>
  )
}

export default ImageSlot
