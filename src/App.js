import React, {useState, useEffect} from 'react'

export default function App() {
  const [name, setName] = useState('ITC')
  
  useEffect(()=>{
    return(
      alert(name)
    )
  })

  return (
    <div>
      <h1>name is : {name}</h1>
      <button 
        onClick={()=>setName('Adam')}
        >change name</button>
    </div>
  )
}
