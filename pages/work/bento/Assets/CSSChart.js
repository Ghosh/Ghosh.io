import React from 'react'

import Figure from './Figure'

const CSSChart = () => {
  return (
    <Figure
      width="600px"
      base="/images/cases/bento/"
      name="bemvutil.jpg"
      alt="Chart comparing traditional css vs atomic css"
      cap="fig 8: Chart comparing long term filesize of traditional CSS vs atomic CSS"
    />
  )
}

export default CSSChart
