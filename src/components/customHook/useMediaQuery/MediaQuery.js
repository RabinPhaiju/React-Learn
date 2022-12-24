import React from "react"
import useMediaQuery from "./useMediaQuery"
import "./MediaQuery.css"

function MediaQuery() {
  const isMobile = useMediaQuery(768)
  const isTablet = useMediaQuery(1024)
  return (
    <div>
      <div className={"layout " + (isMobile ? "mobile" : "") + (isTablet ? " tablet" : "")}>
        <h1>{isMobile ? "Mobile" : isTablet ? "Tablet" : "Desktop"}</h1>
      </div>
    </div>
  )
}

export default MediaQuery
