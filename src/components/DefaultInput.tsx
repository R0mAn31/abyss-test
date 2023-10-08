import React, { FC } from "react"

interface DefaultInputProps {
  placeholder: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const DefaultInput: FC<DefaultInputProps> = ({ placeholder, onChange }) => {
  return <input placeholder={placeholder} type="text" onChange={onChange} />
}

export default DefaultInput
