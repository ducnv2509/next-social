

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