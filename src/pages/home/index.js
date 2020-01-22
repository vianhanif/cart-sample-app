import React from 'react';
import Product from '../../components/Product'
import Modal from '../../components/Modal'
import ProductTable from '../../components/Product/Table'
import HoverCart from '../../components/HoverCart'
import BaseLayout from '../../layouts/base'
import { toCurrency } from '../../modules/currency'
import { Link } from 'react-router-dom'
import './style.scss';
import { useCart, useProduct } from '../../stores';

export default () => {
  const [cart, cartDispatch] = useCart()
  const [product] = useProduct()

  let total = 0
  cart.items.forEach(item => {
    total += item.count * item.product.price
  });

  return (
    <div className="page-container">
      <Modal onClick={() => cartDispatch({ type: 'toggle_detail' })} active={cart.showDetail}>
        <ProductTable items={cart.items} subtotal={toCurrency(total, 'IDR')} />
      </Modal>
      <div className="page-heading">
        <BaseLayout>
          <Link to="/admin/products/add">Add Product</Link>
        </BaseLayout>
      </div>

      <div className="page-body">
        <BaseLayout>
          <div className="product-list-container">
            {
              product.items.map((item, i) =>
                <Product
                  key={i}
                  {...item}
                  onClick={() => { cartDispatch({ type: 'add_cart', payload: { item } }) }} />
              )
            }
          </div>
        </BaseLayout>
      </div>
      <div className="page-footer">
        {cart.items.length >= 1 ?
          <BaseLayout>
            <div className="cart-container">
              <HoverCart
                caption={`${cart.items.length} item${cart.items.length > 1 ? 's' : ''}`}
                title={toCurrency(total, 'IDR')}
                subtitle={`Subtotal`}
                onClick={() => cartDispatch({ type: 'toggle_detail' })} />
            </div>
          </BaseLayout> : null
        }
      </div>
    </div>
  )
}