import React, { FC } from "react"
import ButtonWrapper from "./ButtonWrapper"
import DefaultInput from "./DefaultInput"

interface InputFormProps {
  inputValue: string
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleOkClick: () => void
  handleCancelClick: () => void
}

const InputForm: FC<InputFormProps> = ({
  inputValue,
  handleInputChange,
  handleOkClick,
  handleCancelClick,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
        paddingBottom: "0px",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", width: "80%" }}>
        <DefaultInput placeholder={inputValue} onChange={handleInputChange} />
        <ButtonWrapper textContent={"OK"} onClick={handleOkClick} />
        <ButtonWrapper textContent={"Cancel"} onClick={handleCancelClick} />
      </div>
    </div>
  )
}

export default InputForm
