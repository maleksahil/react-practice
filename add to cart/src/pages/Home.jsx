import React, { useState } from 'react'

const Home = () => {
    const cards = [
        {
            id: 1,
            imag : "/images/black-headphones-digital-device.png",
            product: "watch",
            price: 45
        },
        {
            id:2,
            imag : "/images/black-headphones-digital-device.png",
            product: "phone",
            price: 500
        },
        {
            id:3,
            imag : "/images/black-headphones-digital-device.png",
            product: "TV",
            price: 1000
        },
        {
            id:4,
            imag : "/images/black-headphones-digital-device.png",
            product:"AC",
            price: 700
        },
        {
            id:5,
            imag : "/images/black-headphones-digital-device.png",
            product: "laptop",
            price: 750
        },
    ]

    const [cart, setCart] = useState([]);

    const addtocart = (product)=>{
        setCart([...cart, product])
    }

    const removecart = (id)=>{
        alert('product was deleted')
        setCart(cart.filter((item)=>item.id !== id));
    }
  return (
    <div>
      <h1>Welcome to home page</h1>
      <ul className='flex'>
        {cards.map((val,index)=>{
            return <div className='bg-slate-200 m-2 shadow-lg w-[150px] rounded-lg p-3 flex flex-col items-center'>
            <img src={val.imag} alt={val.product}/>
            <li key={val.id}>{val.product}</li>
            <li key={val.id}>{val.price}</li>
            <li><button onClick={()=>addtocart(val)} className='bg-white rounded-lg px-2 mt-2 cursor-pointer'>Add to cart</button></li>
            </div>
        })}
      </ul>
     
     <ul className='bg-blue-200 absolute w-[30%] right-0 top-10 p-3 min-h-screen flex flex-col items-center'>
        {cart.map((val,index)=>{
            return <div className='w-[200px] h-20 bg-white m-5 flex items-center justify-around rounded-lg shadow-lg'>
               <img className='w-1/3' src={val.imag} alt={val.product}/>
               <li key={val.id}>{val.product}</li>
               <li key={val.id}>{val.price}</li>
               <li><button onClick={()=>removecart(val.id)} className='cursor-pointer border-2 border-black rounded'>delete</button></li>
            </div>
        })}
     </ul>
    </div>
  )
}

export default Home
