import React from 'react'

function App() { 
    const First  = <h1>Hello</h1>
    const Second = React.createElement('h1', {}, "Hello");
  return ( 
    <> 
     <div>{First == Second ? "YES" : "NO"}</div> 
     <div>{First}: JSX bala</div>
     <div>{Second}: createElement APi bala</div>
    </>
   
  )
}

export default App 
