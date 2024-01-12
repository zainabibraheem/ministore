import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './productComponent'
import axios from 'axios'
import {setProducts} from './redux/actions/productActions'

const ProductListing = () => {
  const products =useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts  = async () => {
     const response = await axios
       .get("https://fakestoreapi.com/products")
       .catch((err) => {
         console.log('Err', err);
        });

        dispatch(setProducts(response.data));
  }

  useEffect(() => {
     fetchProducts()
  }, [])

  console.log('products', products)
  
  return (
    <div>
      <h2>PRODUCTLISTING</h2>
      < ProductComponent />
      
    </div>
  )
}

export default ProductListing
