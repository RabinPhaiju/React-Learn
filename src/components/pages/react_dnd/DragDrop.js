import React, { useState } from "react"
import Container from "./Container"
import { useDrop } from "react-dnd"

function DragDrop() {
  const [testContainer, setTestContainer] = useState([
    { id: 1, bgColor: "red" },
    { id: 2, bgColor: "blue" },
    { id: 3, bgColor: "green" },
    { id: 4, bgColor: "pink" },
  ])

  const [board, setBoard] = useState([])

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "BOX",
    drop: (item) => addContainerToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }))

  const addContainerToBoard = (id) => {
    console.log(id)
    const contain = testContainer.filter((container) => container.id === id)
    console.log(contain)
    setBoard((board) => [...board, contain[0]])
    setTestContainer((testContainer) => testContainer.filter((container) => container.id !== id))
  }

  return (
    <div className='main-board' ref={drop}>
      <div className='board1'>
        {testContainer.map((container, index) => (
          <Container id={container.id} key={container.id} bgColor={container.bgColor} />
        ))}
      </div>
      <div className='board2'>
        {board &&
          board.map((container, index) => (
            <Container id={container.id} key={container.id} bgColor={container.bgColor} />
          ))}
      </div>
    </div>
  )
}

export default DragDrop
