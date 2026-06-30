import { COLORS } from '../../constants'

export default function SocialLink({ href, label, children, className = '', size = 42, iconSize = 17, ...props }) {
  return (
    <a
      href={href}
      className={`social-link ${className}`}
      aria-label={label}
      style={{ width: size, height: size }}
      {...props}
    >
      <svg viewBox="0 0 24 24" width={iconSize} height={iconSize} stroke="currentColor" fill="none" strokeWidth="1.9">
        {children}
      </svg>
    </a>
  )
}
