import { Box, Container} from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { type SelectChangeEvent } from '@mui/material/Select';
import vehicleData from "./vehicledata.json";
import { useState } from "react"; 

export function Service() {
    const [service, setService] = useState('');
    const [status, setStatus] = useState('');
       
    const services = JSON.parse(vehicleData.data[0].item.routes[2].responses[1].body).services;
    const serviceInfo = services[2];
    console.log(serviceInfo);
    console.log(services);

    let activeServices : any = [];
    services.map((service: any)=>{
        if (service.status === "ERROR") {
            activeServices.push(service);
        }
    });
    console.log(activeServices);
    
    const handleServiceChange = (event: SelectChangeEvent) => {
        setService(event.target.value);
        if(service !== undefined){
        console.log(service);
        } 
    };

    const handleStatusChange = (event: SelectChangeEvent) => {
        setStatus(event.target.value);
        if(status !== undefined){
        console.log(status);
        } 
    };
    
    return (
        <Container>
        <Box textAlign={"center"}>
            <h1>Services</h1>
        </Box>
        <Box sx={{mt: 4, mb: 4 }}>
            <FormControl sx={{minWidth: 250 }}>
            <InputLabel id="service-id">All Services</InputLabel>
            <Select
                labelId="service-id-label"
                id="service-id-helper"
                value={service}
                label="service"
                onChange={handleServiceChange}
            >
                <MenuItem value="">
                <em>None</em>
                </MenuItem>
                {services !== null && services?.map((service: any)=>{
                return(
                <MenuItem>{service.serviceName}</MenuItem>
                )  
            })} 
            </Select>
            <FormHelperText>All services</FormHelperText>
            </FormControl>
            {service !== '' && <p>{service}</p>}
        </Box>
        <table style={{
            fontSize: "12px",
            width: "60%",
            border: '1px solid gray'
            }}>
            <tbody>
            <tr>
                <th>Service name</th>
                <th>Status</th>
                <th>Reason</th>
                <th>Last Updated</th>
            </tr>
            <tr>
                <td>{serviceInfo.serviceName}</td>
                <td>{serviceInfo.status}</td>
                <td>{serviceInfo.reason}</td>
                <td>{serviceInfo.lastUpdate}</td>
            </tr>
            </tbody>
        </table>
                    
        <Box sx={{ mt: 4 }}>
            <FormControl sx={{minWidth: 250 }}>
            <InputLabel id="service-id">Service status</InputLabel>
            <Select
                labelId="status-id-label"
                id="status-id-helper"
                value={status}
                label="status"
                onChange={handleStatusChange}
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
            <FormHelperText>Selected service status</FormHelperText>
            </FormControl>
            {service !== '' && <p>{service}</p>}
        </Box>
        </Container>
    );
}
