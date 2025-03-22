import { Box, Container} from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import vehicleData from "./vehicledata.json";

export function VehicleInformation() {
  const allVehicles = JSON.parse(vehicleData.data[0].item.routes[0].responses[0].body).vehicles;
  console.log(allVehicles);

  return (
    <Container
        className="dashboard-view"
        sx={{ pt: { xs: 0, md: "30px" }, px: 0 }}
    >
      <Box textAlign={"center"}>
        <h1>Vehicles</h1>
      </Box>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="session-id">Session ID</InputLabel>
        <Select
          labelId="session-id-label"
          id="session-id-helper"
          value={sessionId}
          label="Session ID"
          onChange={handleSessionIdChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {sortedTrainingList !== null && sortedTrainingList.map((training, index)=>{
            return(
            <MenuItem value={index}>{training.id}</MenuItem>
            )  
          })}
        </Select>
        <FormHelperText>Please select another Session ID to compare force curve</FormHelperText>
      </FormControl>
    </Container>
  );
}
