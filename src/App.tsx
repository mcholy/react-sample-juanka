import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import reactLogo from './assets/react.svg';
import MiComponente, { SegundoComponente } from './components/MiComponente';
export default function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/ability/1/")
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.error(error)
      });
  }, [])


  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <MiComponente nombre={"JuanCarlos"} />
      <SegundoComponente />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}




