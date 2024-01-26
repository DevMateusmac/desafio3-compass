import { Box, Typography} from "@mui/material";
import FieldData from "./form/Form/FieldData";
import Button from "./button/Button";

export default function BodyMainContent(){
  return (
    <Box
      sx={{
        bgcolor: "#242424",
        marginTop: "50px"
      }}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap="100px"
      >
        <img 
          src="/section1-CarImage.svg" 
          alt="taxi-image"
          style={{
            borderRadius: "10px"
          }}
        />
        <Box>
          <Box
            color="#FFFFFF"
            sx={{
              display:"flex",
              flexDirection:"column",
              gap: "10px"
            }}
          >
            <Typography
              variant="h6"
              fontWeight="400"
            >NEED A RIDE?</Typography>
            <Typography
              variant="h3"
              fontWeight="500"
            >Book with <span style={{color: "#FBA403"}}>myRIDE</span> now!</Typography>
          </Box>
          <form
            style={{
              padding: 30,
              marginTop: 20,
              backgroundColor: "#2C2C2C",
              borderRadius: "4px",
              display:"flex",
              flexDirection: "column",
              gap: '15px'
            }}
          >
            <Typography
              variant="h6"
              color="#FFFFFF"
            >Find a ride now</Typography>
            <FieldData id="from" label="Your Pickup"/>
            <FieldData id="to" label="Your Destination"/>
            <Button />
          </form>
        </Box>
      </Box>   
    </Box>
  )
}