import * as React from "react"
export interface Props {
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
  id?: string
  width?: any
  height?: any
  layoutId?: string
  "variant"?: 'Close' | 'Open'
  "category"?: string
  "title"?: string
  "contents"?: string
}
export default function(props: Props): any
