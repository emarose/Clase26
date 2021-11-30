import React from 'react'
import './Products.css'

function Products() {
  return (
    <>

      <div className="products-hero">
      <h1>Brewing with passion since 2017</h1>
      <h2>“Live life today like there is no coffee tomorrow.”</h2>       
      </div>
      <div className="card-wrapper">
        <div className="card-grid">
          <div className="card card1 span-2">
            <h3>Americano</h3>
            <div className="card-text">
              <p>Ratio: 1 shot of espresso + 3 oz. of hot water</p>
              <p>Cup: 5-6 oz. Glass Coffee Mug</p>
            </div>
          </div>
          <div className="card card2 ">
            <h3>Irish</h3>
          </div>
          <div className="card card3">
            <h3>Mocha</h3>
          </div>
          <div className="card card4">
            <h3>Frozen</h3>
          </div>
          <div className="card card5 span-2">
            <h3>Ristretto</h3>
          </div>
          <div className="card card6">
            <h3>Cream-latte</h3>
          </div>
        </div>
      </div>

  
    </>
  )
}

export default Products
