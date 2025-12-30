import { useEffect, useRef, useState } from 'react'

/**
 * Custom hook for scroll-triggered animations
 * @param {Object} options - IntersectionObserver options
 * @returns {Array} [ref, isVisible] - ref to attach to element, and visibility state
 */
export const useScrollAnimation = (options = {}) => {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Once visible, stop observing (animation plays once)
          if (ref.current) {
            observer.unobserve(ref.current)
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
        ...options,
      }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [options])

  return [ref, isVisible]
}

/**
 * Custom hook for animated counters
 * @param {number} end - Target number
 * @param {number} duration - Animation duration in ms
 * @param {boolean} startAnimation - Whether to start the animation
 * @returns {number} - Current animated value
 */
export const useCountUp = (end, duration = 2000, startAnimation = false) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!startAnimation) return

    let startTime = null
    let animationFrame = null

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [end, duration, startAnimation])

  return count
}

/**
 * Custom hook to detect scroll direction and position
 * @returns {Object} { scrollY, scrollDirection, isAtTop }
 */
export const useScrollPosition = () => {
  const [scrollData, setScrollData] = useState({
    scrollY: 0,
    scrollDirection: 'up',
    isAtTop: true,
  })

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const direction = currentScrollY > lastScrollY ? 'down' : 'up'
      
      setScrollData({
        scrollY: currentScrollY,
        scrollDirection: direction,
        isAtTop: currentScrollY < 10,
      })

      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return scrollData
}

export default useScrollAnimation
