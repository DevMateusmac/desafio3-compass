import {AppBar, Toolbar, Tabs, Tab, Box} from "@mui/material"
const Links = ["Home", "Getting a Taxi", "Mobile App", "Contact Us"]
// #FBA403 -> cor do home 
export default function Header(){
  return (
    <AppBar
      sx={{
        height: "80px",
        boxShadow: "none",
        position: "sticky"
      }}
    >
      <Toolbar
        sx={{
          bgcolor: "#242424",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems:"center",
          justifyContent: "space-between"
        }}
      >
        <img src="/headerLogo.svg" alt="ride image" />
        <Tabs>
          {Links.map((link, index) => (
            <Tab 
              disableRipple
              key={index} 
              label={link} 
              sx={{
                color: index === 0 ? "#FBA403" : "#FFFFFF",
                fontWeight: 400
              }}
            />
          ))}
        </Tabs>
        <Box
            display="flex"
            justifyContent="space-between"
            width="100px"
          >
            <img src="/bell-icon.svg" alt="bell-icon" />
            <img src="/seperator.svg" alt="separator" />
            <img src="/user-avatar.svg" alt="user-icon" />
          </Box>
      </Toolbar>
    </AppBar>
  )
}