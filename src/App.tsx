import RootLayout from "./Pages/RootLayout"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Main from "./Pages/Main"
import Profile from "./Pages/Profile"
import ProtectedRoute from "./Pages/ProtectedRoute"
import ProtectedAuth from "./Pages/ProtectedAuth.tsx"
import { useDispatch } from "react-redux"
import { authActions } from "../store/store.ts"
import { logout } from "../store/store.ts"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { preferancesActions } from "../store/preferencesSlice.ts"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { useEffect, useState } from "react"
import { AppDispatch } from '../store/store';
import { getUserPreferencers } from "./util/http.ts"
import ErrorPage from "./Pages/ErrorPage.tsx"


const router = createBrowserRouter([{
  path: "/",
  element: <RootLayout />,
  errorElement: <ErrorPage isNotFound={false} />,

  children: [
    {
      path: "*",
      element: <ErrorPage isNotFound />
    },
    {
      element: <ProtectedRoute />, children: [
        { path: "myprofile", element: <Profile /> },
        { path: "", element: <Main /> },
      ]
    },
    {
      element: <ProtectedAuth />, children: [
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
      ]
    }

  ],

}])
function App() {
  const [isAuth, setIsAuth] = useState(true);
  const dispatch = useDispatch<AppDispatch>();
  const [didLoad, setDidLoad] = useState(false);
  const queryClient = new QueryClient();
  useEffect(() => {
    const token = localStorage.getItem("token");
    const exp = new Date(localStorage.getItem("exp") || "");
    const timeUntilExpDate = exp.getTime() - new Date().getTime()
    if (token === "" || timeUntilExpDate <= 0) {
      dispatch(logout());
      setIsAuth(false);
    } else {
      setTimeout(() => {
        dispatch(logout());
      }, timeUntilExpDate);
      async function fetechPreferencers(Token: string) {
        const preferences = await getUserPreferencers(Token);
        dispatch(preferancesActions.updatePreferences(preferences.preferences.preferences));
        dispatch(authActions.login())
        setDidLoad(true);
      }
      fetechPreferencers(token as string);
    }
  }, [])



  return (
    <QueryClientProvider client={queryClient}>
      {(didLoad || !isAuth) && <RouterProvider router={router} />}
    </QueryClientProvider>
  )
}

export default App

