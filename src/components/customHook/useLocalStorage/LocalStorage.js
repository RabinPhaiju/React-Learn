import React from "react"
import useLocalStorage from "./useLocalStorage"
import useUpdateLogger from "./useUpdateLogger"
import CustomHook from "../../pages/CustomHook"

function LocalStorage() {
  // const [name, setName] = useLocalStorage("name", () => "")
  const [name, setName] = useLocalStorage("name", " ")
  useUpdateLogger(name)
  return (
    <div>
      <CustomHook />
      <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  )
}

export default LocalStorage
