import { Outlet } from "react-router-dom";
import Form from './Form'

function RickMorty() {
  return (
    <>
      <Form />
      <Outlet />
    </>
  )
}
export default RickMorty;
