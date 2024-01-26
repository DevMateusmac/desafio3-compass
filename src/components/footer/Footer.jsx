import { Box, Typography } from "@mui/material";


export default function Footer(){
  return (
    <Box
      height="240px"
      bgcolor="#242424"
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      color="#FFFFFF"
    >
      <Box
        width="332px"
        height="152px"
        display="flex"
        flexDirection="column"
        alignItems="start"
        justifyContent="space-between"
      >
        <img src="/footerLogo.svg" alt="footer-logo" />
        <Typography
          color="#B3B3B3"
        >MyRide Inc., 2nd Floor, New York, NY 10016</Typography>
        <Box
          width="160px"
          display="flex"
          gap="20px"
        >
          <img src="/fbIcon.svg" alt="facebook-icon" />
          <img src="/InstaIcon.svg" alt="instagram-icon"/>
          <img src="/twitterIcon.svg" alt="twitter-icon"/>
        </Box>
      </Box>
      <Box
        display="flex"
        width="868px"
        gap="50px"
        justifyContent="start"
      >
        <Box
          width="183px"
        >
          <Typography
            variant="h6"
          >Company</Typography>
          <Box
            marginTop="18px"
            display="flex"
            flexDirection="column"
            gap="8px"
          >
            <Typography>About Us</Typography>
            <Typography>News</Typography>
            <Typography>Careers</Typography>
            <Typography>How we work</Typography>
          </Box>
        </Box>
        <Box
          width="183px"
        >
          <Typography
            variant="h6"
          >Support</Typography>
          <Box
            marginTop="18px"
            display="flex"
            flexDirection="column"
            gap="8px"
          >
            <Typography>FAQ</Typography>
            <Typography>US Office</Typography>
            <Typography>Asia Office</Typography>
            <Typography>Help Center</Typography>
          </Box>
        </Box>
        <Box
          width="183px"
        >
          <Typography
            variant="h6"
          >More</Typography>
          <Box
            marginTop="18px"
            display="flex"
            flexDirection="column"
            gap="8px"
          >
            <Typography>Become a partner</Typography>
            <Typography>Partner Support</Typography>
            <Typography>Mobile app links</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}