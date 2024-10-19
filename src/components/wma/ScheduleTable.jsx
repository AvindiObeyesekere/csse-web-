// src/ScheduleTable.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  CircularProgress,
  Box,
  Button,
} from '@mui/material';

const ScheduleTable = () => {
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/schedules');
        setSchedules(response.data);
      } catch (err) {
        console.error('Error fetching schedules:', err);
        setError('Failed to fetch schedules.');
      } finally {
        setLoading(false);
      }
    };

    fetchSchedules();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/schedules/${id}`);
      setSchedules(schedules.filter(schedule => schedule.id !== id));
    } catch (err) {
      console.error('Error deleting schedule:', err);
      setError('Failed to delete schedule.');
    }
  };

  const handleUpdate = (id) => {
    // You can redirect or open a modal to update the schedule
    console.log('Update schedule with ID:', id);
    // Add your update logic here
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography color="error" sx={{ textAlign: 'center', mt: 2 }}>
        {error}
      </Typography>
    );
  }

  return (
    <TableContainer
      component={Paper}
      sx={{
        maxWidth: 900,
        margin: 'auto',
        mt: 5,
        backgroundColor: '#b2dfdb',
        padding: '20px',
        borderRadius: '10px',
      }}
    >
      <Typography
        variant="h5"
        sx={{
          p: 2,
          textAlign: 'center',
          fontWeight: 'bold',
          color: '#234e3d',
        }}
      >
        Schedules
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold', bgcolor: '#f0f7f4', color: '#234e3d', padding: '16px' }}>
              Time of Schedule
            </TableCell>
            <TableCell sx={{ fontWeight: 'bold', bgcolor: '#f0f7f4', color: '#234e3d', padding: '16px' }}>
              Date of Schedule
            </TableCell>
            <TableCell sx={{ fontWeight: 'bold', bgcolor: '#f0f7f4', color: '#234e3d', padding: '16px' }}>
              No. of Trucks Needed
            </TableCell>
            <TableCell sx={{ fontWeight: 'bold', bgcolor: '#f0f7f4', color: '#234e3d', padding: '16px' }}>
              Name of WMA
            </TableCell>
            <TableCell sx={{ fontWeight: 'bold', bgcolor: '#f0f7f4', color: '#234e3d', padding: '16px' }}>
              Cities Included
            </TableCell>
            <TableCell sx={{ fontWeight: 'bold', bgcolor: '#f0f7f4', color: '#234e3d', padding: '16px' }}>
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {schedules.map((schedule) => (
            <TableRow key={schedule.id} sx={{ '&:nth-of-type(even)': { backgroundColor: '#f7faf9' } }}>
              <TableCell sx={{ padding: '16px' }}>{schedule.timeOfSchedule}</TableCell>
              <TableCell sx={{ padding: '16px' }}>{schedule.dateOfSchedule}</TableCell>
              <TableCell sx={{ padding: '16px' }}>{schedule.noOfTrucksNeeded}</TableCell>
              <TableCell sx={{ padding: '16px' }}>{schedule.nameOfWMA}</TableCell>
              <TableCell sx={{ padding: '16px' }}>{schedule.citiesIncluded.join(', ')}</TableCell>
              <TableCell sx={{ padding: '16px' }}>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={() => handleUpdate(schedule.id)}
                  >
                    Update
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    size="small"
                    onClick={() => handleDelete(schedule.id)}
                  >
                    Delete
                  </Button>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ScheduleTable;
