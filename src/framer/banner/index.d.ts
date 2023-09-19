import * as React from "react"
export interface Props {
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
  id?: string
  width?: any
  height?: any
  layoutId?: string
  "image"?: {src: string, srcSet?: string, alt?: string}
  "title"?: string
  "titleColor"?: string
  "buttonSize"?: string
  "buttonText"?: string
  "buttonTextColor"?: string
}
export default function(props: Props): any
