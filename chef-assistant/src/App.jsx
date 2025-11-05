import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/header"
import FormPanel from './components/formPanel'
import ActionsBar from './components/ActionsBar'

function App() {
  const [count, setCount] = useState(0)
//original Vite page
  // return (
  //   <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )

  const handleReset = () => {
    console.log("Reset clicked");
  };

  const handleRegenerate = () => {
    console.log("Regenerate clicked, will reuse last inputs");
  };

  const handleCopy = () => {
    console.log("Copy clicked will copy, once rendered");
  };
  const handlePrint = () => {
    window.print();
  }
  return (
    <>
    <Header />
    <FormPanel />
    <ActionsBar 
    onReset={handleReset}
    onRegenerate={handleRegenerate}
    onCopy={handleCopy}
    onPrint={handlePrint}
    hasResult={false} //set true once resultPanel is showing recipe
    canRegnerate={false} //set true after first generate
    /> 
    </>
  )
}

export default App
