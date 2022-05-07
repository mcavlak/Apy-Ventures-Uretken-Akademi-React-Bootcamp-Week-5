import { Grid, Typography } from "@mui/material";
import { Component } from "react";

class Celcius extends Component {

    render() {
        let celcius = this.props.temperature;
        return (
            <Grid item xs={12} md={4}>
                <Typography variant="body1">Celcius: {celcius}</Typography>
            </Grid>
        );
    }
}

export default Celcius;