import { useState, useEffect } from "react"

const useFetch = (url = "", options = null) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options)
        const json = await response.json()
        setData(json)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [url, options])

  return { data, loading, error }
}
export default useFetch
