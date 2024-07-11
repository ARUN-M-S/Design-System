import React from 'react'
import TypographyPropsType from '../types'

const Typography = ({text,tag,className,children}:TypographyPropsType) => {
  return React.createElement(tag,{className:className},<>{text} ,{children}</>)
}

export default Typography
