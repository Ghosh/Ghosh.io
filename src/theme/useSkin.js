import { useState, useEffect } from 'react'

const useSkin = () => {
  const [skin, setSkin] = useState(null)

  useEffect(() => {
    if (typeof window !== `undefined`) {
      setSkin(window.__theme)
      window.__onSkinChange = () => setSkin(window.__theme)
    }
  }, [])

  return skin
}

export default useSkin
