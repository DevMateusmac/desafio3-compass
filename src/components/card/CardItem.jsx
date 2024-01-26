import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

// eslint-disable-next-line react/prop-types
export default function CardItem({image, title, description}){
  return (
    <Box>
      <Card
        sx={{
          height: "415px",
          width: "307px",
          backgroundColor:"#383838",
          boxShadow: "none"
        }}
      >
        <CardMedia
          component="img"
          image={image}
          alt={title}
        >
        </CardMedia>
        <CardContent
        >
          <Typography
            color="#FFFFFF"
            variant="h6"
            fontWeight="500"
          >{title}</Typography>
          <Typography
            color="#B3B3B3"
            marginTop='5px'
          >{description}</Typography>
        </CardContent>
        <CardActions
          sx={{
            display:"flex",
            justifyContent: "end",
          }}
        >
          <Button
            disableRipple

            href={`https://www.google.com/search?q=${title}+car`}
            target="_blank"
            type="button"
            sx={{
              color: "#FBA403",
              marginRight: "10px",
              "&:hover": {bgcolor: "transparent"}
            }}
          >LEARN MORE</Button>
        </CardActions>
      </Card>
    </Box>
  )
}