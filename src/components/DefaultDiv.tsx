import React, { FC, ReactNode } from "react"

interface DefaultDivProps {
  textContent: string
  className?: string
  children?: ReactNode
}

const DefaultDiv: FC<DefaultDivProps> = ({
  textContent,
  className,
  children,
}) => {
  return (
    <div className={className}>
      <span>{textContent}</span>
      <div>{children}</div>
    </div>
  )
}

export default DefaultDiv
