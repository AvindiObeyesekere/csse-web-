import React from 'react';
import { Box, Typography } from '@mui/material';

const ScheduleDisplay = ({ formData }) => {
  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', mt: 5, p: 3, backgroundColor: '#e0f7fa', borderRadius: 2 }}>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold', color: '#00695c' }}>
        Schedule Details
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 1, color: '#004d40' }}>
        Here are the details of the schedule you created:
      </Typography>

      <Typography variant="body1" sx={{ mb: 1 }}>
        <strong>Start Time:</strong> {formData.timeOfSchedule}
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        <strong>Date:</strong> {formData.dateOfSchedule ? formData.dateOfSchedule.format('MM/DD/YYYY') : 'Not specified'}
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        <strong>Number of Trucks Needed:</strong> {formData.noOfTrucksNeeded}
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        <strong>Name of WMA:</strong> {formData.nameOfWMA}
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        <strong>Cities Included:</strong> {formData.citiesIncluded.join(', ') || 'None'}
      </Typography>
    </Box>
  );
};

export default ScheduleDisplay;
