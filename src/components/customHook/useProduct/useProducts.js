import React, { useState,useEffect } from 'react'
import axios from 'axios'

const useProducts = () => {
  const [products,setProducts] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchProducts = async (controller)=>{
    try {
      const res = await axios.get('https://fakestoreapi.com/products',
      {signal:controller.signal});
      if(res && res.data){
        setProducts(res.data);
        setError()
      }
    } catch(error){
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(()=>{
    const controller = new AbortController()
    fetchProducts(controller);

    return () => {
      controller.abort()
    }

  },[])


  return { products, loading, error }
}

export default useProducts