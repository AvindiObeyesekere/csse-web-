import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, InputLabel, FormControl, Box, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import axios from 'axios';
import dayjs from 'dayjs';

const ScheduleForm = () => {
  const [formData, setFormData] = useState({
    timeOfSchedule: '',
    dateOfSchedule: null,
    noOfTrucksNeeded: '',
    nameOfWMA: '',
    citiesIncluded: []
  });

  const cities = ['Chicago', 'Houston', 'Phoenix', 'New York', 'Los Angeles', 'San Francisco'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = (newDate) => {
    setFormData({
      ...formData,
      dateOfSchedule: newDate,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Format the dateOfSchedule for the API request
    const formattedDate = dayjs(formData.dateOfSchedule).isValid() 
    ? dayjs(formData.dateOfSchedule).format('YYYY-MM-DDTHH:mm:ss') 
    : null;
  
  if (!formattedDate) {
    console.error('Invalid date format');
    return;
  }
  
  
    try {
      const response = await axios.post('http://localhost:8080/api/schedules', {
        timeOfSchedule: formData.timeOfSchedule,
        dateOfSchedule: formattedDate, // Use the formatted date here
        noOfTrucksNeeded: formData.noOfTrucksNeeded,
        nameOfWMA: formData.nameOfWMA,
        citiesIncluded: formData.citiesIncluded,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      console.log('Schedule created successfully:', response.data);
      // Optionally reset the form or give feedback to the user
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  
  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', mt: 5, backgroundColor: '#e0f2f1', p: 3, borderRadius: 2 }}>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold', color: '#00695c' }}>
        Generate Schedule For Collection Route
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 3, color: '#004d40' }}>
        Fill Out The Form Below To Add Details to a Route
      </Typography>
      
      <form onSubmit={handleSubmit}>
        {/* Time of Schedule */}
        <TextField
          label="Start time of Collection"
          name="timeOfSchedule"
          value={formData.timeOfSchedule}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
          sx={{ backgroundColor: 'white', borderRadius: 1 }}
        />

        {/* Date of Schedule */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Date of Schedule"
            value={formData.dateOfSchedule}
            onChange={handleDateChange}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                margin="normal"
                required
                sx={{ backgroundColor: 'white', borderRadius: 1 }}
              />
            )}
          />
        </LocalizationProvider>

        {/* Number of Trucks Needed */}
        <TextField
          label="Number of Trucks Needed"
          name="noOfTrucksNeeded"
          type="number"
          value={formData.noOfTrucksNeeded}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
          sx={{ backgroundColor: 'white', borderRadius: 1 }}
        />

        {/* Name of WMA */}
        <TextField
          label="Name of WMA"
          name="nameOfWMA"
          value={formData.nameOfWMA}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
          sx={{ backgroundColor: 'white', borderRadius: 1 }}
        />

        {/* Cities Included */}
        <FormControl fullWidth margin="normal" required sx={{ backgroundColor: 'white', borderRadius: 1 }}>
          <InputLabel>Cities Included</InputLabel>
          <Select
            multiple
            name="citiesIncluded"
            value={formData.citiesIncluded}
            onChange={handleChange}
          >
            {cities.map((city) => (
              <MenuItem key={city} value={city}>
                {city}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            mt: 3,
            backgroundColor: '#00695c',
            '&:hover': { backgroundColor: '#004d40' },
            color: 'white',
            borderRadius: 2,
            padding: '12px',
            fontWeight: 'bold'
          }}
        >
          Create Schedule
        </Button>
      </form>
    </Box>
  );
};

export default ScheduleForm;
