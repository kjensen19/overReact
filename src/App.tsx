import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Book from './components/Book'
import Tome from './models/Tome'

function App() {
  const [count, setCount] = useState(0)

  const book = new Tome('https://m.media-amazon.com/images/I/71F4+7rk2eL.jpg', 'Atomic Habits', 'James Clear')
  console.log(book)
  return (
    <div className="App">
     <Book {...book}/>
    </div>
  )
}

export default App
