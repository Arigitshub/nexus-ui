import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const ConvertKitModal = () => {
  const location = useLocation()
  const [hasTriggered, setHasTriggered] = useState(false)
  const [isEligible, setIsEligible] = useState(true)

  // Form ID from ConvertKit
  const FORM_ID = '9252996'

  // Pages where the modal should NOT show
  const EXCLUDED_PATHS = ['/success', '/checkout']

  useEffect(() => {
    // Check if current page is excluded
    const isExcluded = EXCLUDED_PATHS.some(path => location.pathname.startsWith(path))
    setIsEligible(!isExcluded)
    setHasTriggered(false) // Reset trigger state when navigating to new page
  }, [location.pathname])

  useEffect(() => {
    if (!isEligible || hasTriggered) return

    // Wait for ConvertKit script to load
    const waitForConvertKit = setInterval(() => {
      if (window._ck && window._ck.form && window._ck.form.trigger) {
        clearInterval(waitForConvertKit)
        setupTriggers()
      }
    }, 100)

    // Timeout after 5 seconds
    const timeout = setTimeout(() => clearInterval(waitForConvertKit), 5000)

    return () => {
      clearInterval(waitForConvertKit)
      clearTimeout(timeout)
    }
  }, [isEligible])

  const setupTriggers = () => {
    if (hasTriggered) return

    // Track 50% scroll trigger
    const handleScroll = () => {
      if (hasTriggered) return

      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100

      if (scrollPercentage >= 50) {
        triggerModal()
        setHasTriggered(true)
        window.removeEventListener('scroll', handleScroll)
      }
    }

    // Track exit-intent (mouseout at top of page)
    const handleMouseMove = (e) => {
      if (hasTriggered) return

      // Exit-intent: detect mouse moving towards top of page
      if (e.clientY < window.innerHeight * 0.05 && e.movementY < 0) {
        triggerModal()
        setHasTriggered(true)
        document.removeEventListener('mousemove', handleMouseMove)
      }
    }

    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousemove', handleMouseMove)

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }

  const triggerModal = () => {
    // Try ConvertKit API methods
    if (window._ck && window._ck.form && window._ck.form.trigger) {
      window._ck.form.trigger(FORM_ID)
    }
    // Fallback method
    else if (window.ConvertKit && typeof window.ConvertKit.showForm === 'function') {
      window.ConvertKit.showForm(FORM_ID)
    }
  }

  return null
}

export default ConvertKitModal

// trigger commit
// agent verified deploy test