import { Box } from "@mui/material";

// eslint-disable-next-line react/prop-types
export default function  CustomBox({children}){
  return (
    <Box 
      display='flex'
      flexDirection="column"
      gap="7px"
    >{children}</Box>
  )
}