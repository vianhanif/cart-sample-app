import React, { useState } from 'react';
import Input from '../../components/Input'
import { Link, useHistory } from 'react-router-dom'
import BaseLayout from '../../layouts/base'
import InputForm from '../../components/Input/Form'
import { useProduct } from '../../stores'
import './style.scss';

export default () => {
  const [, productDispatch] = useProduct()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)
  const history = useHistory()

  const handleAddProduct = () => {
    productDispatch({ type: 'add_product', payload: { name, price, description } })
    history.goBack()
  }
  const isDataValid = () => {
    return name === '' || !price
  }

  return (
    <div className="page-container">
      <div className="page-heading">
        <BaseLayout>
          <Link to="/">Home</Link>
        </BaseLayout>
      </div>
      <div className="page-form">
        <BaseLayout>
          <InputForm>
            <Input label="Name" hint="Ayam Goreng" type="text" onChange={value => setName(value)} />
            <Input label="Price" hint="Rp 30.000,00" type="number" onChange={value => setPrice(parseInt(value))} />
            <Input label="Description" hint="Paket Nasi dengan ayam goreng pedas" type="textarea" onChange={value => setDescription(value)} />
            <button disabled={isDataValid()} onClick={() => handleAddProduct()}>Add</button>
          </InputForm>
        </BaseLayout>
      </div>
    </div>
  )
}