import { useForm } from "react-hook-form"
import { Box, TextField, Stack, FormControlLabel, Switch, Typography, Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import countryAndCity from "../../utils/countries-and-cities.js"
import images from "../../utils/images.js"
import { useState } from "react";
import ErrorElement from "../errorElement/ErrorElement.jsx";
import CustomBox from "../box/CustomBox.jsx";
import {postDriveData } from "../../helper/helperAPI.js"
import { useNavigate } from "react-router-dom";
let countries = Object.keys(countryAndCity)

export default function Form(){
  const navigate = useNavigate()
  const [country, setCountry] = useState("")
  const [city, setCity] = useState('')
  const [isActive, setIsActive] = useState(false)

  const {
    register, 
    handleSubmit, 
    formState:{errors}
  } = useForm()

  const onSubmit = (data) =>{
    try {
      if(!isActive){
        delete data.carType
      }
      postDriveData(data)
    } catch (error) {
      return console.log(error)
    }finally{
      navigate('/successScreen')
    }
  }
  
  return (
    <Box
      margin={5}
      bgcolor="#282828"
      padding={5}
      height={(isActive ? "871px" : "730px") || isActive && errors ? "" : "1000px"}
    >
      <Box
        display="flex"
        alignItems="center"
      >
        <img src="/formCar.svg" alt="yellow car icon" />
        <Box>
          <Typography
            variant="h5"
            fontSize="27px"
            color="#FBA403"
            fontWeight="700"
          >Drive with MyRide</Typography>
          <Typography
            color="#FFFFFF"
            variant="body1"
            fontWeight="400"
          >Register as a driver using the form below. Our team will assess and get back to you within 48 hours.</Typography>
        </Box>
      </Box>
      <form
        style={{
          margin: "25px 0px"
        }}
      >
        <Stack 
          sx={{
            display: "flex",
            gap: "15px"
          }}
        >
          <CustomBox>
          <TextField 
            sx={{width: "100%"}}
            label="Full Name"
            {...register('name', {required: true, minLength: 10, pattern: /^(?=.*[a-zA-Z])[a-zA-Z]/g})}
            InputLabelProps={{className: "textField"}}
          />
          {(errors?.name?.type === "required" || errors?.name?.type ==="minLength" || errors?.name?.type ==="pattern") && <ErrorElement message="Invalid name"/> }
          </CustomBox>
          <CustomBox>
          <TextField
            label="Email Address"
            {...register('email', {required: true, pattern: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]/i})}
          />
            {(errors?.email?.type === "required" || errors?.email?.type === "pattern")&& <ErrorElement message="Invalid email"/>}
          </CustomBox>
          <CustomBox>
            <FormControl>
              <InputLabel>Country</InputLabel>
              <Select
                {...register('country', {required: true})}
                value={country}
                onChange={(ev) => setCountry(ev.target.value)}
              >
                {countries.map((country, index) => (
                  <MenuItem 
                    key={index} 
                    value={country}
                  >{country}</MenuItem>
                ))}
              </Select>
            </FormControl>
            {errors?.country?.type === "required" && <ErrorElement message="Invalid country"/>} 
            </CustomBox>
           <CustomBox> 
            <FormControl>
              <InputLabel>City</InputLabel>
              <Select
                {...register('city', {required: true})}
                value={city}
                onChange={(ev) => setCity(ev.target.value)}
                disabled={country === "" ? true : false}
                
              >
                {country && countryAndCity[country].map((city, index) => (
                  <MenuItem 
                    key={index} 
                    value={city}
                  >{city}</MenuItem>
                ))}
              </Select>
            </FormControl> 
            {errors?.city?.type === "required" && <ErrorElement message="Invalid city"/>}  
          </CustomBox>
          <CustomBox>   
            <TextField 
              label="Referral Code"
              {...register('code', {required: true, pattern: /[A-Z]{3}-[0-9]{3}/})}
            />
            {(errors?.code?.type === "required" || errors?.code?.type === "pattern") && <ErrorElement message="Invalid code"/>}
          </CustomBox>
        </Stack>
        <Box>
          <FormControlLabel
            sx={{
              display: "flex",
              margin: "13px 0px",
              flexDirection: "row-reverse",
              justifyContent: "space-between",
              color:"#FFFFFF",
            }}  
            label="I drive my own car" 
            control={<Switch color= "secondary" onChange={() => setIsActive(!isActive)}/>} 
            />
          
          {isActive && 
          <Box 
            display="flex"
            flexDirection="column"
          >
            <Typography 
              color="#FBA403"
              fontWeight="500"
            >Select your car type</Typography>
            <Box
              display="flex"
              marginTop={2}
            >
              {images.map(image => (
                <Box key={image.id}>
                  <label htmlFor={image.id}>
                    <img 
                      src={image.imageURL} 
                      alt={image.type}
                      className="img-form"
                      style={{cursor: "pointer"}}
                    />
                  </label>
                  <input {...register('carType', {required: true})} value={image.type} type="radio" id={image.id} className="images" />
                </Box>
              ))}
            </Box>
            {isActive && errors?.carType?.type === "required" && <ErrorElement message="Select a vehicle type"/>}      
          </Box>}
        </Box>
        <Button
          variant="contained"
          sx={{
            backgroundColor:"#FBA403",
            width: "200px",
            height: "56px",
            marginTop: isActive ? "20px" : null
          }}
          color="warning"
          onClick={() => handleSubmit(onSubmit)()}
        >SUBMIT</Button>
      </form>
    </Box>
  )
}