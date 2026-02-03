import { useEffect, RefObject } from 'react'

/**
 * Trap focus within a container element (for modals, popovers, etc.)
 * This ensures keyboard users can't tab outside the modal
 */
export function useFocusTrap(
  isActive: boolean,
  containerRef: RefObject<HTMLElement>
) {
  useEffect(() => {
    if (!isActive || !containerRef.current) return

    const container = containerRef.current
    const focusableElements = container.querySelectorAll(
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )

    if (focusableElements.length === 0) return

    const firstElement = focusableElements[0] as HTMLElement
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

    // Focus first element when trap activates
    firstElement?.focus()

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          e.preventDefault()
          lastElement?.focus()
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          e.preventDefault()
          firstElement?.focus()
        }
      }
    }

    container.addEventListener('keydown', handleTabKey)

    return () => {
      container.removeEventListener('keydown', handleTabKey)
    }
  }, [isActive, containerRef])
}

/**
 * Restore focus to a previously focused element
 * Useful when closing modals/dialogs
 */
export function useFocusRestore(
  isActive: boolean,
  triggerRef: RefObject<HTMLElement>
) {
  useEffect(() => {
    if (!isActive) return

    const previouslyFocused = document.activeElement as HTMLElement
    const trigger = triggerRef.current // Capture ref value at effect time

    return () => {
      // Only restore focus if the trigger still exists
      if (trigger && document.contains(trigger)) {
        trigger.focus()
      } else if (previouslyFocused && document.contains(previouslyFocused)) {
        previouslyFocused.focus()
      }
    }
  }, [isActive, triggerRef])
}
