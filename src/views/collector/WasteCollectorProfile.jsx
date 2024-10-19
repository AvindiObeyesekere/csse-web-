import React from "react";
import {
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  Rating,
} from "@mui/material"; // import MUI components
import Map from "../../components/collector/Map";

const WasteCollectorProfile = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Waste Collectors
      </Typography>
      <Grid container spacing={2}>
        {/* Profile Section */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: "16px" }}>
            <Typography variant="h6">Profile</Typography>
            <Typography>Name: Desan Wickramasooriya</Typography>
            <Typography>ID: IW 002</Typography>
            <Typography>Status: Working</Typography>
            <Typography variant="h6" style={{ marginTop: "16px" }}>
              Performance
            </Typography>
            <Typography>Routes Completed: 04</Typography>
            <Typography>Average Time on Route: 1h 30m</Typography>
            <Typography>No. of Complaints: N/A</Typography>
            <Rating name="read-only" value={4} readOnly />
          </Paper>
        </Grid>

        {/* Assigned Route Section */}
        <Grid item xs={12} sm={6} md={8}>
          <Paper elevation={3} style={{ padding: "16px" }}>
            <Typography variant="h6">Assigned Route</Typography>
            <Typography>Route Assigned: Route D01</Typography>
            <Typography>Region: Colombo Suburbs</Typography>
            <Typography>From: Kadawela</Typography>
            <Typography>To: Malibbe</Typography>
            <div style={{ height: "300px", marginTop: "16px" }}>
              <Map /> {/* Placeholder for Map component */}
            </div>
            <Button variant="contained" style={{ marginTop: "16px" }}>
              View Assigned Route History
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default WasteCollectorProfile;
