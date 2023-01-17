import { useContext } from "react";
import { DemoContext } from "../App";

function Three() {
  const name = useContext(DemoContext);
  return (
    <div>
      <h2>Component: Three</h2>
      <p><strong>{name}</strong></p>
    </div>
  )
}
export default Three;
