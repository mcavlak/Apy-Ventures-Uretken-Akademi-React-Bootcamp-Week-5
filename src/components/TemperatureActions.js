import { AddRounded } from "@mui/icons-material";
import { Alert, Box, Button } from "@mui/material";
import { Component } from "react";

class TemperatureAction extends Component {

    render() {
        return (
            <Box display="flex" justifyContent="space-between" flexWrap="wrap" gap={2} >
                <Alert icon={false}
                    severity={this.props.temperature < 5 ? "info" : this.props.temperature < 20 ? "warning" : "error"}
                    sx={{ fontSize: "1rem", borderRadius: ".5rem" }}>
                    Şuan sıcaklık <b>{this.props.temperature}</b> derece
                </Alert>
                <Button onClick={() => this.props.changeTemperature()} sx={{ borderRadius: ".5rem" }} variant="contained" disableElevation startIcon={<AddRounded />}>SICAKLIĞI ARTTIR</Button>
            </Box>
        );
    }
}

export default TemperatureAction;