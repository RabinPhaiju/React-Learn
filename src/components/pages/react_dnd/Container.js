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
      style={{ border: isDragging ? "4px solid green" : null }}
      style={{ backgroundColor: bgColor }}
    ></div>
  )
}

Container.defaultProps = {
  bgColor: "red",
}

export default Container
