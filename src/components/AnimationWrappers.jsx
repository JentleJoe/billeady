import { useScrollAnimation, useCountUp } from '../hooks/useScrollAnimation'

/**
 * Wrapper component for scroll-triggered fade-in animations
 */
export const FadeIn = ({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 600,
  className = '' 
}) => {
  const [ref, isVisible] = useScrollAnimation()

  const getTransform = () => {
    switch (direction) {
      case 'up': return 'translateY(30px)'
      case 'down': return 'translateY(-30px)'
      case 'left': return 'translateX(30px)'
      case 'right': return 'translateX(-30px)'
      default: return 'translateY(30px)'
    }
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0)' : getTransform(),
        transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

/**
 * Staggered animation wrapper for lists/grids
 */
export const StaggerContainer = ({ children, staggerDelay = 100, className = '' }) => {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children) 
        ? children.map((child, index) => (
            <div
              key={index}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 500ms ease-out ${index * staggerDelay}ms, transform 500ms ease-out ${index * staggerDelay}ms`,
              }}
            >
              {child}
            </div>
          ))
        : children
      }
    </div>
  )
}

/**
 * Animated counter component
 */
export const AnimatedCounter = ({ 
  value, 
  prefix = '', 
  suffix = '', 
  duration = 2000,
  className = '' 
}) => {
  const [ref, isVisible] = useScrollAnimation()
  
  // Parse the numeric value from string (e.g., "₦500M+" -> 500)
  const numericValue = parseInt(value.replace(/[^0-9]/g, '')) || 0
  const count = useCountUp(numericValue, duration, isVisible)

  // Format the output to match the original format
  const formatValue = () => {
    const original = value
    // Check for currency symbol
    const hasCurrency = original.includes('₦') || original.includes('$')
    const currency = hasCurrency ? (original.includes('₦') ? '₦' : '$') : ''
    
    // Check for suffix like M, K, B, +
    const suffixMatch = original.match(/[MKB+%]+$/i)
    const valueSuffix = suffixMatch ? suffixMatch[0] : ''
    
    return `${prefix}${currency}${count}${valueSuffix}${suffix}`
  }

  return (
    <span ref={ref} className={className}>
      {isVisible ? formatValue() : value}
    </span>
  )
}

/**
 * Scale-on-hover button wrapper
 */
export const ScaleButton = ({ children, className = '', as: Component = 'button', ...props }) => {
  return (
    <Component
      className={`transform transition-all duration-200 hover:scale-105 active:scale-95 ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}

/**
 * Magnetic hover effect for buttons/links
 */
export const MagneticElement = ({ children, className = '', strength = 0.3 }) => {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    
    e.currentTarget.style.transform = `translate(${x * strength}px, ${y * strength}px)`
  }

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'translate(0, 0)'
  }

  return (
    <div 
      className={`transition-transform duration-200 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  )
}

/**
 * Parallax scroll effect wrapper
 */
export const ParallaxSection = ({ children, speed = 0.5, className = '' }) => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0 })
  
  return (
    <div 
      ref={ref}
      className={`relative ${className}`}
      style={{
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  )
}

export default FadeIn
