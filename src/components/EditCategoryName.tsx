import React, { FC } from "react"
import DefaultInput from "./DefaultInput"
import ButtonWrapper from "./ButtonWrapper"
import { Check, X } from "lucide-react"
import { Category } from "../types/category"

interface EditCategoryNameProps {
  addedItem: Category | null
  category: Category
  inputValue: string
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSaveClick: (index: number) => void
  index: number
  handleCancelClick: () => void
}

const EditCategoryName: FC<EditCategoryNameProps> = ({
  addedItem,
  category,
  inputValue,
  handleInputChange,
  handleSaveClick,
  index,
  handleCancelClick,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
      className={`${addedItem === category ? "fade-in" : ""}`}
    >
      <DefaultInput placeholder={inputValue} onChange={handleInputChange} />
      <div style={{ display: "flex", flexDirection: "row", gap: "2px" }}>
        <ButtonWrapper
          textContent={""}
          onClick={() => handleSaveClick(index)}
          className="plus"
        >
          <Check />
        </ButtonWrapper>
        <ButtonWrapper
          textContent={""}
          onClick={handleCancelClick}
          className="plus"
        >
          <X />
        </ButtonWrapper>
      </div>
    </div>
  )
}

export default EditCategoryName
