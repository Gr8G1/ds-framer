import * as React from "react"
export interface Props {
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
  id?: string
  width?: any
  height?: any
  layoutId?: string
  "size"?: string
  "text"?: string
  "textColor"?: string
}
export default function(props: Props): any
