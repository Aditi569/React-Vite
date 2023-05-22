import './App.css'
import { useState } from 'react'

function App() {

  const [count, setCount] = useState(0)

  // count = 1  in js we change varibale like this
  // setCount(1) in react we use like this as func. argument

  return (



    <div className='main-container'>
      <div className="local-container">
        <h1>{count}</h1>
        {/* in onclick we can directly pass callback func. */}
        <div className='button-container'>
          <button className='btn-count' onClick={() => { setCount(count - 1) }}>-</button>
          <button className='btn-count' onClick={() => { setCount(count + 1) }}>+</button>
        </div>
      </div>
    </div>

  )
}

export default App
