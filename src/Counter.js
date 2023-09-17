import React, { useEffect, useState } from 'react'

export default function Counter() {

    const [state, setState] = useState(0);

    useEffect(() =>{
console.log('counter component changed');

return () =>{
    console.log('component unmounted')
}
    }, [])

  return (
    <div>
        <h1>
            {state}
        </h1>
        <button onClick={() => setState(s => s+1)}>+</button>
    </div>
  )
}
