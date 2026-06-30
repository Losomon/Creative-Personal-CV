import { SOCIAL_LINKS, STAR_SVG } from '../../constants'

const starPath = `<svg viewBox="0 0 24 24" width="14" height="14" fill="#d4af37">${STAR_SVG}</svg>`

export default function StarRating({ count = 5, className = '' }) {
  return <div className={`star-rating ${className}`}>{Array.from({ length: count }, () => <span dangerouslySetInnerHTML={{ __html: starPath }} />)}</div>
}
