import { Box, Container} from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { type SelectChangeEvent }  from '@mui/material/Select';
import vehicleData from "./vehicledata.json";
import { useState } from "react";

export function VehicleInformation() {
    const [service, setService] = useState('');

    const vehicleInfo = JSON.parse(vehicleData.data[0].item.routes[1].responses[1].body);
    const services = JSON.parse(vehicleData.data[0].item.routes[2].responses[1].body).services;
    console.log(vehicleInfo);
    console.log(services);

    let activeServices : any = [];
    services.map((service: any)=>{
        if (service.status === "ACTIVE") {
            activeServices.push(service);
        }
    });
    console.log(activeServices);
  
    const handleChange = (event: SelectChangeEvent) => {
      setService(event.target.value);
      if(service !== undefined){
        console.log(service);
      } 
    };
  
    return (
      <Container>
        <Box textAlign={"center"} paddingBottom={3}>
          <h1>Vehicle Information</h1>
        </Box>
        <p>Vehicle Details</p>
        <table style={{
            fontSize: "12px",
            width: "85%",
            border: '1px solid gray'
            }}>
            <tbody>
            <tr>
                <th width={"180px"}>Brand</th>
                <th width={"90px"}>Cassis Series</th>
                <th width={"100px"}>Chassis Number</th>
                <th width={"110px"}>Country of Operation</th>
                <th width={"90px"}>Engine Status</th>
                <th width={"90px"}>Fleet</th>
                <th width={"90px"}>MSIDN</th>
            </tr>
            <tr>
                <td>{vehicleInfo.brand}</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{vehicleInfo.cassisSeries}</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{vehicleInfo.chassisNumber}</td>
                <td>&nbsp;&nbsp;{vehicleInfo.countryOfOperation}</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{vehicleInfo.engineStatus}</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{vehicleInfo.fleet}</td>
                <td>&nbsp;&nbsp;&nbsp;{vehicleInfo.msidn}</td>
                </tr>
            </tbody>
        </table>
                  
        <Box sx={{mt: 4 }}>
          <FormControl sx={{minWidth: 250 }}>
            <InputLabel id="service-id">Active Services</InputLabel>
            <Select
              labelId="service-id-label"
              id="service-id-helper"
              value={service}
              label="service"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {activeServices !== null && activeServices?.map((service: any)=>{
              return(
              <MenuItem>{service.serviceName}</MenuItem>
              )  
            })} 
            </Select>
            <FormHelperText>Active services</FormHelperText>
          </FormControl>
          {service !== '' && <p>{service}</p>}
        </Box>
      </Container>
  );
}
