import { CLASSES } from '../../constants/colors'

export default function Pill({ children, variant = 'default', className = '', ...props }) {
  const base = 'pill'
  const variantClass = variant !== 'default' ? `pill-${variant}` : ''
  return (
    <span className={`${base} ${variantClass} ${className}`} {...props}>
      {children}
    </span>
  )
}

export const Tag = Pill
