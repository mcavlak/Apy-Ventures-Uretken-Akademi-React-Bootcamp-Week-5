import { Grid, Typography } from "@mui/material";
import { Component } from "react";

class Kelvin extends Component {
    render() {
        let calculatedKelvin = (this.props.temperature + 273.15).toFixed(2);
        return (
            <Grid item xs={12} md={4}>
                <Typography variant="body1">Kelvin: {calculatedKelvin}</Typography>
            </Grid>
        );
    }
}

export default Kelvin;