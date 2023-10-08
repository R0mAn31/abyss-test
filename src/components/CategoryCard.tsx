import React, { FC, useState } from "react"
import { Category } from "../types/category"
import DefaultDiv from "./DefaultDiv"
import ButtonWrapper from "./ButtonWrapper"
import { Pencil, Plus, X } from "lucide-react"
import InputForm from "./InputForm"

interface CategoryCardProps {
  category: Category
  index: number
  handleEditClick: () => void
}

const CategoryCard: FC<CategoryCardProps> = ({
  category,
  index,
  handleEditClick,
}) => {
  const [inputValue, setInputValue] = useState<string>("")
  const [isAddingNewSubCategory, setIsAddingNewSubCategory] =
    useState<boolean>(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleCancelClick = () => {
    setIsAddingNewSubCategory(false)
  }

  const handleAddSubcategoryClick = () => {
    console.log("first")

    setIsAddingNewSubCategory(true)
  }

  const handleOkClick = () => {}

  return (
    <>
      <div>
        <ButtonWrapper onClick={handleAddSubcategoryClick}>
          <Plus />
        </ButtonWrapper>
        <ButtonWrapper onClick={handleEditClick}>
          <Pencil />
        </ButtonWrapper>
        <ButtonWrapper onClick={handleCancelClick}>
          <X />
        </ButtonWrapper>
        <DefaultDiv textContent={category.name}></DefaultDiv>
      </div>

      {isAddingNewSubCategory && (
        <InputForm
          inputValue={category.name}
          handleInputChange={handleInputChange}
          handleOkClick={handleOkClick}
          handleCancelClick={handleCancelClick}
        />
      )}
    </>
  )
}

export default CategoryCard
