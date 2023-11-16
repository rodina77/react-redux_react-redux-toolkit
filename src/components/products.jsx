import React from 'react';
import { useEffect } from 'react';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../rtk/slices/productsSlices';
import { addproduct } from '../rtk/slices/productsSlices';
const Products = () => {
  const product=useSelector((state)=>state.product);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchProducts())
  },[])
  return (
    <div>
      <h1>products</h1>
      <button onClick={()=>{dispatch(addproduct({id:2,title:'medicalcare'}))}}>add product</button>
      {
        product.map((product)=>( <p key={product.id}>{product.title}</p>))
      }
    </div>
  );
}

export default Products;
