import { COLORS } from '../../constants'

export default function Card({ children, className = '', hover = true, borderColor = COLORS.border, ...props }) {
  return (
    <div
      className={`card ${hover ? 'card-hover' : ''} ${className}`}
      style={{ borderColor }}
      {...props}
    >
      {children}
    </div>
  )
}
