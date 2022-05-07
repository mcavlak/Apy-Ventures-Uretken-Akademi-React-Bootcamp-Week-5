import { Grid, Typography } from "@mui/material";
import { Component } from "react";

class Fahrenheit extends Component {
    render() {
        let calculatedFahrenheit = (this.props.temperature * 1.8 + 32).toFixed(2);
        return (
            <Grid item xs={12} md={4}>
                <Typography variant="body1">Fahrenheit: {calculatedFahrenheit}</Typography>
            </Grid>
        );
    }
}

export default Fahrenheit;