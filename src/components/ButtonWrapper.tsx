import React, { FC, ReactNode } from "react"

interface ButtonWrapperProps {
  textContent?: string
  onClick?: () => void
  className?: string
  isActive?: boolean
  children?: ReactNode
}

const ButtonWrapper: FC<ButtonWrapperProps> = ({
  textContent,
  onClick,
  className,
  isActive,
  children,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    onClick?.()
  }
  return (
    <button
      onClick={(e) => handleClick(e)}
      className={className}
      disabled={isActive}
    >
      {textContent}
      {children}
    </button>
  )
}

export default ButtonWrapper
