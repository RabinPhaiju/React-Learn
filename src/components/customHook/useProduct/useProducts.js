import React, { useState,useEffect } from 'react'
import axios from 'axios'

const useProducts = () => {
  const [products,setProducts] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchProducts = async ()=>{
    try {
      const res = await axios.get('https://fakestoreapi.com/products');
      if(res && res.data){
        setProducts(res.data);
      }
    } catch(error){
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(()=>{
    fetchProducts();
  },[])


  return { products, loading, error }
}

export default useProducts