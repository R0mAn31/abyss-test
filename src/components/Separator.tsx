import React, { FC } from "react"

interface SeparatorProps {
  orientation: "h" | "v"
}

const Separator: FC<SeparatorProps> = ({ orientation = "h" }) => {
  const separatorStyle = {
    padding: "0px 0px",
    width: orientation === "v" ? "2px" : "100%",
    height: orientation === "h" ? "0px" : "18px",
    borderBottom: orientation === "h" ? "2px solid #000" : "none",
    borderLeft: orientation === "v" ? "2px solid #000" : "none",
  }

  return <div style={separatorStyle}></div>
}

export default Separator
