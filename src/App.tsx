import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Kalastus</h1>
      <div className="card">

        <p>
          Luvat
        </p>
      </div>
      <p className="read-the-docs">
        Test
      </p>
    </>
  )
}

export default App
