import RootLayout from "./Pages/RootLayout"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Main from "./Pages/Main"
import Profile from "./Pages/Profile"
import ProtectedRoute from "./Pages/ProtectedRoute"
import { Provider } from "react-redux"
import store from "../store/store.js"
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom"

const router = createBrowserRouter([{
  path: "/",
  element: <RootLayout />,
  children: [
    {
      element: <ProtectedRoute />, children: [
        { path: "myprofile", element: <Profile /> },
        { path: "", element: <Main /> },
      ]
    },
    { path: "login", element: <Login /> },
    { path: "register", element: <Register /> },

  ],

}])
function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
