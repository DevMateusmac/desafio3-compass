import RootLayout from "./components/RootLayout";
import { createTheme, ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
 
const theme = createTheme({
    palette: {
      primary: {
        main: '#FFFFFF',
      },
      secondary:{
        main: '#FBA403'
      }
    },
    components:{
      MuiTextField:{
        defaultProps:{
          variant: 'outlined',
        },
        styleOverrides:{
          root:{
            '& .MuiOutlinedInput-notchedOutline':{
              borderColor: '#FFFFFF',
            },
            '--TextField-brandBorderColor': 'red',
            '--TextField-brandBorderHoverColor': '#FFFFFF',
            '--TextField-brandBorderFocusedColor': '#FFFFFF',
            '& label.Mui-focused': {
              color: 'var(--TextField-brandBorderFocusedColor)',
            },  
          }

        }
      }
    }
  });


function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}>
        <RootLayout/>
      </RouterProvider>
    </ThemeProvider>
  )
}

export default App
