import RootLayout from "./Pages/RootLayout"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Main from "./Pages/Main"
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom"

const router = createBrowserRouter([{
  path: "/",
  element: <RootLayout />,
  children: [
    { path: "", element: <Main /> },
    { path: "login", element: <Login /> },
    { path: "register", element: <Register /> },
  ],

}])
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
