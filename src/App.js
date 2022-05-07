import { Container, Divider, Grid, Typography } from "@mui/material";
import { Component } from "react";
import TemperatureAction from "./components/TemperatureActions";
import Celcius from "./components/Celcius";
import Fahrenheit from "./components/Fahrenheit";
import Kelvin from "./components/Kelvin";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: 0
    }
  }

  changeTemperature = () => {
    this.setState({ temperature: this.state.temperature + 1 })
  }


  render() {
    return (
      <Container sx={{ mt: "5rem" }}>

        <Typography fontSize="3rem" mb={2} variant="h2">Hava nasıl?</Typography>

        <TemperatureAction temperature={this.state.temperature} changeTemperature={this.changeTemperature} />

        <Divider sx={{ my: 4 }} />

        <Typography fontSize="1rem" lineHeight="auto" variant="overline">3 BİRİMDE SICAKLIK ÖLÇÜMÜ</Typography>

        <Grid container spacing={2} >
          <Celcius temperature={this.state.temperature} />
          <Fahrenheit temperature={this.state.temperature} />
          <Kelvin temperature={this.state.temperature} />
        </Grid>
      </Container >
    );
  }
}

export default App;
