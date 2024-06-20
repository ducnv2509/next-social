import React from 'react'
import { NormalText } from './text'

interface LabelProps {
  className?: string
  children: string
}

export const Label = (props: LabelProps) => {
  return (
    <NormalText className={`block mb-3 text-base ${props.className}`}>
      {props.children}
    </NormalText>
  )
}
export const LabelRequired = (props: LabelProps) => {
  return (
    <div className="flex gap-1">
      <NormalText className={`block mb-1 text-base ${props.className}`}>
        {props.children}
      </NormalText>
      <span className="text-red-500">*</span>
    </div>
  )
}
