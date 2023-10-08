import React, { useState, useRef, useEffect, CSSProperties } from "react"
import DefaultDiv from "./components/DefaultDiv"
import ButtonWrapper from "./components/ButtonWrapper"
import "./App.css"
import Separator from "./components/Separator"
import { Category } from "./types/category"
import CategoriesList from "./components/CategoriesList"
import { Navigation } from "lucide-react"

function App() {
  const [isDragging, setIsDragging] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isInputVisible, setInputVisible] = useState(false)
  const [categories, setCategories] = useState<Category[]>([])

  const draggableElem = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !draggableElem.current) return

      const rect = draggableElem.current.getBoundingClientRect()
      const newX = e.clientX - rect.width
      const newY = e.clientY - rect.height

      draggableElem.current.style.top = newY + "px"
      draggableElem.current.style.left = newX + "px"
    }
    const handleMouseUp = () => {
      setIsDragging(false)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
    }

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove)
      window.addEventListener("mouseup", handleMouseUp)
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isDragging, position])

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsDragging(true)
    if (draggableElem.current) {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      })
    }
  }

  const handlePlusClick = () => {
    setInputVisible(true)
  }

  const [scale, setScale] = useState(100)

  const handleScaleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setScale(parseFloat(event.target.value))
  }

  const increaseScale = () => {
    setScale(scale + 10)
  }

  const decreaseScale = () => {
    setScale(scale - 10)
  }

  const handleCenterClick = () => {
    if (draggableElem.current) {
      const containerRect =
        draggableElem.current.parentElement?.getBoundingClientRect()
      const containerWidth = containerRect ? containerRect.width / 2 : 0
      const containerHeight = containerRect ? containerRect.height / 2 : 0
      const elementWidth = draggableElem.current.offsetWidth
      const elementHeight = draggableElem.current.offsetHeight

      const newLeft = containerWidth - ((elementWidth / 2) * scale) / 100
      const newTop = containerHeight - ((elementHeight / 2) * scale) / 100

      draggableElem.current.style.left = newLeft + "px"
      draggableElem.current.style.top = newTop + "px"
    }
  }

  const wrapperStyle: CSSProperties = {
    transform: `scale(${scale / 100})`,
    transformOrigin: "top left",
    position: "relative",
  }

  return (
    <div className="App">
      <div
        className="wrapper-div"
        style={{ display: "flex", gap: "10px", padding: "10px" }}
      >
        <ButtonWrapper
          textContent="-"
          onClick={decreaseScale}
          isActive={!(scale > 50)}
        />
        <div>
          <select value={scale} onChange={handleScaleChange}>
            {Array.from({ length: 11 }, (_, i) => i * 10 + 50).map((value) => (
              <option key={value} value={value}>
                {value}%
              </option>
            ))}
          </select>
        </div>
        <ButtonWrapper
          textContent="+"
          onClick={increaseScale}
          isActive={!(scale < 150)}
        />
        <ButtonWrapper
          textContent=""
          onClick={handleCenterClick}
          className="center"
        >
          <Navigation size={"16px"} />
        </ButtonWrapper>
      </div>
      <div className="container">
        <div
          ref={draggableElem}
          className="draggable-elem"
          onMouseDown={handleMouseDown}
        >
          <div style={wrapperStyle} className="scaling-wrapper">
            <div>
              <DefaultDiv className="category-add" textContent="Category">
                <ButtonWrapper
                  textContent={"+"}
                  className="plus"
                  onClick={handlePlusClick}
                />
              </DefaultDiv>
            </div>
            <CategoriesList
              categories={categories}
              setCategories={setCategories}
              isInputVisible={isInputVisible}
              setInputVisible={setInputVisible}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
