import * as React from "react"

interface TypographyPropsType{
text:string,
tag?:keyof JSX.IntrinsicAttributes,
className?:string,
children?:React.ReactNode,
style?:React.CSSProperties
}

export default TypographyPropsType