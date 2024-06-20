import React from 'react'

interface HeadingTextProps {
  className?: string
  children: string
}

export const HeadingText = (props: HeadingTextProps) => {
  return (
    <p className={`${props.className} font-['Nunito-Bold']`}>
      {props.children}
    </p>
  )
}

interface PrimaryTextProps {
  className?: string
  children: string
}

export const PrimaryText = (props: PrimaryTextProps) => {
  return (
    <p className={`${props.className} font-['Nunito-SemiBold']`}>
      {props.children}
    </p>
  )
}

interface SecondaryTextProps {
  className?: string
  children: string
}

export const SecondaryText = (props: SecondaryTextProps) => {
  return (
    <p
      className={`${props.className} font-['Nunito-Medium']`}
    >
      {props.children}
    </p>
  )
}

interface NormalTextProps {
  className?: string
  children: string
}

export const NormalText = (props: NormalTextProps) => {
  return (
    <p className={`${props.className} font-['Nunito-Regular']`}>
      {props.children}
    </p>
  )
}
