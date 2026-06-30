export function useIntersectionObserver(options = {}) {
  const { threshold = 0.1, root = null, rootMargin = '0px' } = options

  const observe = (element, callback) => {
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          callback(entry)
          if (options.unobserveOnIntersect) {
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold, root, rootMargin }
    )

    observer.observe(element)
    return observer
  }

  return { observe }
}
