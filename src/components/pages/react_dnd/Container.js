import React from "react"
import { useDrag } from "react-dnd"

function Container({ bgColor, id }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "BOX",
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))
  return (
    <div
      ref={drag}
      id={id}
      className='board'
      style={{ backgroundColor: bgColor, border: isDragging ? "4px solid green" : null }}
      // style={{  }}
    ></div>
  )
}

Container.defaultProps = {
  bgColor: "red",
}

export default Container
