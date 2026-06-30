import { cn } from '../../utils'

export default function Button({ children, variant = 'gold', className = '', ...props }) {
  return (
    <button className={`btn btn-${variant} ${className}`} {...props}>
      {children}
    </button>
  )
}
