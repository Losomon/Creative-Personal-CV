import { cn } from '../../utils'

export default function IconBox({ children, className = '', size = 48, rounded = 12, ...props }) {
  return (
    <div
      className={cn('icon-box', className)}
      style={{
        width: size,
        height: size,
        borderRadius: rounded,
      }}
      {...props}
    >
      <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1.8" width={size * 0.5} height={size * 0.5}>
        {children}
      </svg>
    </div>
  )
}
