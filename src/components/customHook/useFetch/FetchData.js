import React from "react"
import useFetch from "./useFetch"
import CustomHook from "../../pages/CustomHook"

function FetchData() {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/todos")
  return (
    <div>
      <CustomHook />
      <ul>
        {loading && <li>Loading...</li>}
        {error && <li>Error: {error.message}</li>}
        {data && data.map((item) => <li key={item.id}>{item.title}</li>)}
      </ul>
    </div>
  )
}

export default FetchData
