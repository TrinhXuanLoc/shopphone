import React from 'react'
import ShopCart from './ShopCart'
import ShopCate from './ShopCate'
import './style.css'

const Shop = ({shopItems, addToCart}) => {
  return (
    <>
        <section className="shop background">
            <div className="container d_flex">
                <ShopCate />
                <div className="contentWidth">
                    <div className="heading d_flex">
                        <div className="heading-left row f_flex">
                            <h2>Sản phẩm</h2>
                        </div>
                        <div className="heading-right row">
                            <span>Xem tất cả sản phẩm</span>
                            <i className="fa fa-caret-right"></i>
                        </div>
                    </div>

                    <div className="product-content grid1">
                        <ShopCart shopItems={shopItems} addToCart={addToCart}/>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Shop