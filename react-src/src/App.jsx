import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => (
  <div>
    <div className="widget">
      <h2>Mission Stats</h2>
      <p>Completed Missions: 7</p>
    </div>
    <div className="widget">
      <h2>Shuriken Inventory</h2>
      <p>Remaining: 14</p>
    </div>
    <div className="widget">
      <h2>Stealth Mode</h2>
      <p>Status: Engaged</p>
    </div>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);



// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

export default App