import One from "./components/One";
import { createContext, useState } from "react";
export const DemoContext = createContext();

function App() {
  const [name, setName] = useState('Narciso Lobo');

  return (
    <div className="container">
      <h1>Context API</h1>
      <h2>Component: APP</h2>
      <DemoContext.Provider value={name}>
        <One />
      </DemoContext.Provider>
    </div>
  )
}
export default App;
