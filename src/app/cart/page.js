"use client"
import React from 'react'
import Navbar from '../component/Navbar'
import { useRecoilState } from 'recoil'
import { cartState } from '../../../atoms/cartState'
import CartList from '../component/CartList'

const cart = () => {
     const [cartItem, setCartItem] = useRecoilState(cartState)

    const totalPrice = () => {
        let total = 0
        cartItem.forEach(item => total += (item.price * item.quantity))
        return total
    }
  return (
   <div>
            <Navbar />

            <div className='container mx-auto'>
                {cartItem.length <= 0
                    ? <h1 className='text-center text-4xl mt-32'>Your Cart Is Empty</h1>
                    : cartItem.map(item => <CartList key={item.id} data={item} />)}

               


            </div>


        </div>
  )
}

export default cart
