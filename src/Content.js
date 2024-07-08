import React from 'react'
import { useState } from 'react';

const Content = () => {

  const [name, setName]=useState("give")
  function handleNameChange(){
    const names=['give','earn','grow']
    const randomInt=Math.floor(Math.random()*3)
    setName(names[randomInt])
  }

  return (
    <main>
      <p>let's {name} money</p>
      <button onClick={handleNameChange}>subscribe</button>
    </main>
  )
}

export default Content