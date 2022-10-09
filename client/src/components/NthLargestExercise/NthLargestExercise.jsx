import React, { useState } from 'react';
import {
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Slider,
  Typography,
  Box,
  Button,
  CardHeader
} from '@mui/material';
import FlagIcon from '@mui/icons-material/Flag';

const randomNumbers = () =>
  [...Array(10)].map((i) => Math.round(Math.random() * 100));

const generateForm = (nth, numbers) => {
  const formData = new URLSearchParams();
  numbers.forEach((n) => formData.append('numbers', n.toString()));
  formData.append('nthlargestnumber', nth.toString());
  return formData.toString();
};

export const NthLargestExercise = () => {
  const [numbers, setNumbers] = useState();
  const [correctNumber, setCorrectNumber] = useState();
  const [nth, setNth] = useState(1);

  const changeNumbers = () => {
    setCorrectNumber(undefined);
    setNumbers(randomNumbers());
  };

  const handleSlider = (_e, newValue) => setNth(newValue);

  const fetchCorrectNumber = async () => {
    if (numbers !== undefined) {
      try {
        const result = await fetch(
          'http://localhost:8081/api/methods/findnthlargestnumber',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: generateForm(nth, numbers)
          }
        );
        const data = await result.json();
        setCorrectNumber(data);
      } catch (e) {
        console.error('fetchCorrectNumber', e);
      }
    }
  };
  return (
    <Card>
      <CardContent>
        <CardHeader
          titleTypographyProps={{ textAlign: 'center' }}
          title="Find nth largest number"
        />
        <Slider value={nth} step={1} max={10} min={1} onChange={handleSlider} />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%'
          }}
        >
          <Button
            sx={{ marginRight: 5 }}
            onClick={fetchCorrectNumber}
            variant="contained"
          >{`Find ${nth}th largest`}</Button>

          <Button size="small" onClick={changeNumbers} variant="contained">
            Get numbers
          </Button>
        </Box>
        {numbers !== undefined && (
          <List>
            {numbers.map((i, index) => (
              <ListItem
                alignItems="center"
                key={i.toString() + index.toString()}
              >
                <ListItemText>
                  <Typography variant="h6">{i}</Typography>
                </ListItemText>
                {i === correctNumber && <FlagIcon color="info" />}
              </ListItem>
            ))}
          </List>
        )}
      </CardContent>
    </Card>
  );
};
