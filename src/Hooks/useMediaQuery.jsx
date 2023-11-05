import { useEffect, useState } from 'react'

function useMediaQuery(breakpoint) {
  const [screenSize, setScreenSize] = useState(window.innerWidth <= breakpoint)

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth <= breakpoint)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [breakpoint])

  return screenSize
}

export default useMediaQuery