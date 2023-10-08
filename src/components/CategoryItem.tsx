import { FC, useState } from "react"
import { Category } from "../types/category"
import Separator from "./Separator"
import InputForm from "./InputForm"
import CategoryCard from "./CategoryCard"

interface CategoryItemProps {
  category: Category
  index: number
}

const CategoryItem: FC<CategoryItemProps> = ({ category, index }) => {
  const [inputValue, setInputValue] = useState<string>(category.name)
  const [isEditing, setIsEditing] = useState<boolean>(false)

  const handleEditClick = () => {
    setIsEditing(!isEditing)
  }

  const handleApplyChangesClick = () => {
    // Update the category name with the new input value
    category.name = inputValue
    setIsEditing(false)
  }

  const handleCancelChangesClick = () => {
    setIsEditing(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Separator orientation="v" />
      {isEditing ? (
        <InputForm
          inputValue={inputValue}
          handleInputChange={handleInputChange}
          handleOkClick={handleApplyChangesClick}
          handleCancelClick={handleCancelChangesClick}
        />
      ) : (
        <div>
          <CategoryCard
            category={category}
            index={index}
            handleEditClick={handleEditClick}
          />
        </div>
      )}
    </div>
  )
}

export default CategoryItem
