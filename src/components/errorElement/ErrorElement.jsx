import { Typography } from "@mui/material";

// eslint-disable-next-line react/prop-types
export default function ErrorElement({message}){
  return (
    <Typography 
      sx={{
        color: "#E32200", 
        display: "flex", 
        alignItems: "center", 
        gap: "5px",
        marginBottom:''
      }}><img src="/errorIcon.svg" alt="error-icon"/>{message}</Typography>
  )
}