import { RouterProvider } from "react-router-dom"
import { router } from "./presentation/router/routers"



export function App() {

  return (
   <RouterProvider router={router}/>
  )
}

