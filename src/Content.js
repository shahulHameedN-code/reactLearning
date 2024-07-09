import React from 'react'
import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
const Content = () => {


  const [items,setItems]=useState([{id:1,checked:true,description:"study react"},
    {id:2,checked:false,description:"code"},
    {id:3,checked:true,description:"sleep"}
  ]);

const handleCheck=(id) =>{
  const itemsList=items.map((item)=> 
  item.id===id ? {...item, checked:!item.checked}:item)
  setItems(itemsList)
}
const handleDelete=(id)=>{
  const itemList=items.filter((item)=>item.id!==id)
  setItems(itemList)
}

const renderContent= ()=>{
  if(items.length){
 return <ul>
  {items.map((item)=>(
  <li className='item' key={item.id}>
    <input type="checkbox" onChange={()=>handleCheck(item.id)} checked={item.checked} />
    <label style={(item.checked)?{textDecoration: 'line-through'} :null}>{item.description}</label>
    <FaTrashAlt
    role='button'
    tabIndex="0"
    onClick={()=>handleDelete(item.id)}/>
  </li>
  ))}
</ul>
  }
  else{
    return <p> Your list is empty</p>
  }
}

  return (
    <main>
      {renderContent()}
    </main>
  )
}

export default Content