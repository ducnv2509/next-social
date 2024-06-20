// import React from 'react'
// import { BiLoaderAlt } from 'react-icons/bi'
// interface ButtonProps {
//   className?: string
//   type?: 'button' | 'submit' | 'reset'
//   onClick?: () => void
//   posting?: boolean
//   children: React.ReactNode
//   disabled?: boolean
// }

// export const Button = (props: ButtonProps) => {
//   return (
//     <button
//       disabled={props.posting || props.disabled}
//       type={props.type || 'submit'}
//       onClick={props.onClick}
//       className={`${props.className || ''} ${props.posting ? 'cursor-not-allowed' : 'cursor-pointer'} whitespace-nowrap overflow-hidden px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-primary-primary rounded-md hover:bg-primary-hover focus:outline-none active:focus:duration-0 active:bg-primary-focus`}
//     >
//       {props.posting ? (
//         <div className="w-6 h-6 animate-spin m-auto">
//           <BiLoaderAlt size={24} />
//         </div>
//       ) : (
//         props.children
//       )}
//     </button>
//   )
// }

// interface LinkButtonProps {
//   className?: string
//   children: React.ReactNode
//   href?: string
// }

// export const LinkButton = React.forwardRef((props: LinkButtonProps, ref: React.LegacyRef<HTMLAnchorElement>) => {
//   return (
//     <a className={`${props.className} whitespace-nowrap overflow-hidden px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-primary-primary rounded-md hover:bg-primary-hover focus:outline-none active:focus:duration-0 active:bg-primary-focus`} href={props.href} ref={ref}>
//       {props.children}
//     </a>
//   )
// })


import { Button, ButtonProps } from "antd"
import React from "react"
interface IProps extends ButtonProps {
  children?: React.ReactNode
}
const ButtonUI = (props: IProps) => {
  //! state
  const { children, ...res } = props
  //! function
  //! render
  return <Button type="primary" {...res}>
    {children}
  </Button>
}

export default ButtonUI;