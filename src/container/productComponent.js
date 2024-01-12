import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products)
  const renderedProducts = products.map((product) => {
    const { id, title, price, image, category } = product
    console.log(id)
    return (

      <div className=''key={id} >

        <Link className='link' to={`/product/${id}`}>
          <div className='cards' >
            <div className='card'>
              <div className='card-image'>
                <img src={image} alt={title} width='250px' height='250px' />
              </div>
              <div className='card-content'>
                <div className='card-title'>{title}</div>
                <div className='card-price'>${price}</div>
                <div className='card-category'>{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>

    )
  })
  
  return (
    <div className='products-div'>
      {renderedProducts}
    </div>
  );
}

export default ProductComponent
