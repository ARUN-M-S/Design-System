import React from 'react'
import TypographyPropsType from '../types'

const Typography = ({text,tag}:TypographyPropsType) => {
  return React.createElement(tag,{},text)
}

export default Typography
