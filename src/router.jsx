import { createBrowserRouter } from "react-router-dom"
import Form from "./components/form/Form"
import SuccessScreen from "./components/success/SuccessScreen"
import RootLayout from "./components/RootLayout"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [
      {
        index: true,
        element: <Form />
      },
      {
        path: "successScreen",
        element: <SuccessScreen/>
      }
    ]
  }
])