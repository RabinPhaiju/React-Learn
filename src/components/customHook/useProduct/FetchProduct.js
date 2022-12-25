import React from "react"
import useProducts from "./useProducts"

function FetchProduct() {
  const { products, loading, error } = useProducts()
  return (
    <div>
      <ul>
        {loading && <li>Loading...</li>}
        {error && !products && <li>Error: {error.message}</li>}
        {products && products.map((item) => <li key={item.id}>{item.title}</li>)}
      </ul>
    </div>
  )
}

export default FetchProduct
