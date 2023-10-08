import React, { FC, useState } from "react"
import { Category } from "../types/category"
import Separator from "./Separator"
import CategoryItem from "./CategoryItem"
import InputForm from "./InputForm"
import { getId } from "../actions"

interface CategoriesListProps {
  categories: Category[]
  setCategories: React.Dispatch<React.SetStateAction<Category[]>>
  isInputVisible: boolean
  setInputVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const CategoriesList: FC<CategoriesListProps> = ({
  categories,
  isInputVisible,
  setInputVisible,
  setCategories,
}) => {
  const [inputValue, setInputValue] = useState<string>("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleCancelClick = () => {
    setInputValue("")
    setInputVisible(false)
  }

  const handleOkClick = () => {
    if (inputValue.trim() !== "") {
      const newCategory: Category = {
        name: inputValue,
      }
      setCategories([...categories, newCategory])
    }
    setInputValue("")
    setInputVisible(false)
  }

  return (
    <div>
      <div
        style={{
          padding: "0px 0px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {isInputVisible && categories.length === 1 && (
          <Separator orientation="v" />
        )}
        {isInputVisible && categories.length === 1 && (
          <Separator orientation="h" />
        )}
        {categories.length >= 2 && <Separator orientation="v" />}
        {categories.length >= 2 && <Separator orientation="h" />}
      </div>
      <div
        className="subcategory-list"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "12px",
          paddingTop: "0px",
          justifyContent: "space-between",
        }}
      >
        {categories.map((category, index) => (
          <CategoryItem category={category} index={index} key={getId(index)} />
        ))}
        {isInputVisible && (
          <div>
            <Separator orientation="v" />
            <InputForm
              inputValue={inputValue}
              handleInputChange={handleInputChange}
              handleOkClick={handleOkClick}
              handleCancelClick={handleCancelClick}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default CategoriesList
