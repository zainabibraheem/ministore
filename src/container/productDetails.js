import React, { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct, removeSelectedProduct } from './redux/actions/productActions';

function ProductDetails() {
  const product = useSelector((state) => state.product)
  const { image, title, price, category, description } = product
  const dispatch = useDispatch();
  const { productId } = useParams();
  console.log(product);


  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => { console.log('Err', err); });


    dispatch(selectedProduct(response.data));
  }

  useEffect(() => {
    if (productId && productId !== '') { fetchProductDetail(); }

    return () => {
      dispatch(removeSelectedProduct());
    }
  }, [productId])

  return (
    <div className='product-container'>
      
      <div className='product-wrap'> 
      <div className='product' >
        <div className='product-image'>
          <div><img src={image} alt={title}  /></div>
        </div>
        
        <div className='product-detail-div'>
        <div className='product-detail'>
          <h1>{title}</h1>
          <h2>${price}</h2>
          <h3>{category}</h3>
          <p>{description}</p>
        </div>
        <div className='shop-div'>
          <div className='shop-icon'></div>
          <div className='cart'>ADD TO CART</div>
        </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default ProductDetails
