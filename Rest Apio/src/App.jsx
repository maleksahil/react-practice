import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {
  const [products, setProducts] = useState([]);
  const [newproducts, setNewproducts] = useState({name: '', price: ''});

  useEffect(()=>{
    fetchProducts();
  },[]);

  const fetchProducts = async ()=>{
    const response = await fetch('http://localhost:3000/products');
    const data = await response.json();
    setProducts(data);
    console.log(data)
  };

  const handleAddProduct = async (e) =>{
    e.preventDefault();
    await fetch('http://localhost:3000/products',{
      method: 'POST',
      headers: { 'content-type': 'application/json'},
      body: JSON.stringify(newproducts),
    });
    setNewproducts({name: '', price: ''});
    fetchProducts();
  }

  const handleDelete = async (id) =>{
    await fetch(`http://localhost:3000/products/${id}`, {method: 'DELETE'});
    fetchProducts();
  }

  const handleUpdate = async (product) =>{
    const UpdatePrice = prompt('enter new price', product.price);
    if(UpdatePrice){
      await fetch(`http://localhost:3000/products/${product.id}` ,{
        method: 'PUT',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({...product, price: UpdatePrice}),
      });
      fetchProducts();
    }
  }
  return (
    <div className='App'>
    <h1>Product Manager</h1>

    {/* App product from */}
    <form onSubmit={handleAddProduct}>
      <input type='text' placeholder='product name' value={newproducts.name} onChange={(e)=>setNewproducts({...newproducts, name: e.target.value})}/>
      <input type='number' placeholder='price' value={newproducts.price} onChange={(e)=>setNewproducts({...newproducts, price: e.target.value })}/>
      <button type="submit">Add Product</button>
    </form>

    {/* Product list */}
    <div className='Product-list'>
{products.map((product)=>(
  <div key={product.id} className='Product-item'>
    <h3>{product.name}</h3>
    <p>${product.price}</p>
    <div className='buttons'>
      <button onClick={()=>handleUpdate(product)}>Update</button>
      <button onClick={()=>handleDelete(product.id)}>Delete</button>
    </div>
  </div>
))}
    </div>
      
    </div>
  )
}

export default App
