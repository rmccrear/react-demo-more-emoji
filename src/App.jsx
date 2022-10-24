import {useState} from 'react'
import './App.css'
import MoreEmoji from './MoreEmoji'

export default function App() {
  const [show, setShow] = useState(true)
  return (
    <main>
      {
        show ?
        <MoreEmoji emoji="🐗" />
        : ''
      }
      <hr/>
      <button onClick={() => setShow(!show)}>Toggle</button>
    </main>
  )
}
