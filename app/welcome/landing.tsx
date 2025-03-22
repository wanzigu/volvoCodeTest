import { Box, Container} from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { type SelectChangeEvent } from '@mui/material/Select';
import vehicleData from "./vehicledata.json";
import { useState } from "react";

export function Landing() {
  const [vehicle, setVehicle] = useState('');
  const allVehicles = JSON.parse(vehicleData.data[0].item.routes[0].responses[0].body).vehicles;
  console.log(allVehicles);

  const handleChange = (event: SelectChangeEvent) => {
    setVehicle(event.target.value);
    if(vehicle !== undefined){
      console.log(vehicle);
    } 
  };

  return (
    <Container>
      <Box textAlign={"center"}>
        <h1>Vehicles</h1>
      </Box>
      <Box sx={{ ml: 20, mt: 5 }}>
        <FormControl sx={{minWidth: 250 }}>
          <InputLabel id="vehicle-id">All Vehicles</InputLabel>
          <Select
            labelId="vehicle-id-label"
            id="vehicle-id-helper"
            value={vehicle}
            label="vehicle"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {allVehicles !== null && allVehicles?.map((vehicle: any)=>{
              return(
              <MenuItem>{vehicle.name}</MenuItem>
              )  
            })}
          </Select>
          <FormHelperText>Available vehicles</FormHelperText>
        </FormControl>
        {vehicle !== '' && <p>{vehicle}</p>}
      </Box>
    </Container>
  );
}
