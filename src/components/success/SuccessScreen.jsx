import { Box, Button, Table, TableBody, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getDriveData } from "../../helper/helperAPI";
import CustomTablecell from "../table/CustomTablecell";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function SuccessScreen(){
  const navigate = useNavigate()
  const [data, setData] = useState({})
  useEffect(() => {
    async function fetchDriveData (){
      try {
        let driveData = await getDriveData()
        setData(driveData)
      } catch (error) {
        return console.log(error)
      }
    }
    fetchDriveData()
  }, [])
  console.log(data)

  
  async function handleDelete(){
    const id = data[0].id
    await fetch(`http://localhost:5000/drives/${id}`, {
      method: 'DELETE'
    }).then(res => console.log(res))
    navigate('/')
  }


  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap="30px"
    >
      <Box
        display="flex"
        gap="5px"
      >
        <img style={{height: "45px", width: "45px"}} src="/checkIconForm.svg" alt="check-icon"/>
        <Typography
          variant="h4"
          color="#FFFFFF"
        >
        Welcome, {data.name}</Typography>
      </Box>
      <Box>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <CustomTablecell align="center">Full name</CustomTablecell>
              <CustomTablecell align="center">Email</CustomTablecell>
              <CustomTablecell align="center">Country</CustomTablecell>
              <CustomTablecell align="center">City</CustomTablecell>
              <CustomTablecell align="center">Code</CustomTablecell>
              <CustomTablecell align="center">Car type</CustomTablecell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <CustomTablecell align="right">{data.fullName}</CustomTablecell>
              <CustomTablecell align="center">{data.email}</CustomTablecell>
              <CustomTablecell align="center">{data.country}</CustomTablecell>
              <CustomTablecell align="center">{data.city}</CustomTablecell>
              <CustomTablecell align="center">{data.code}</CustomTablecell>
              <CustomTablecell align="center">{data.carType ? data.carType : "none"}</CustomTablecell>
            </TableRow>          
          </TableBody>
      </Table>
    </TableContainer>
      </Box>
      <Button
         variant="contained"
         color="warning"
         sx={{
           backgroundColor:"#FBA403",
           width: "200px",
           height: "56px",
         }}
         onClick={handleDelete}
      >SUBMIT A NEW CAR</Button>
    </Box>       
  ) 
} 