import Button from '@mui/material/Button';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  TextField,
  Typography
} from '@mui/material';
import React, { useState, useRef } from 'react';

export const ReverseStringExercise = () => {
  // eslint-disable-next-line no-unused-vars
  const [reversedString, setReversedString] = useState();
  const [input, setInput] = useState('');
  const inputRef = useRef();
  const fetchReversed = async () => {
    if (input) {
      try {
        const formBody = new URLSearchParams();
        formBody.append('string', input);
        const result = await fetch(
          'http://localhost:8081/api/methods/reversestring',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: formBody.toString()
          }
        );
        const data = await result.text();
        setReversedString(data);
      } catch (e) {
        console.error('fetchReversed', e);
      }
    }
  };

  const onChange = (e) => setInput(e.target.value);

  const clear = () => {
    setReversedString(undefined);
    inputRef.current.select();
  };

  return (
    <Card>
      <CardContent>
        <CardHeader
          titleTypographyProps={{ textAlign: 'center' }}
          title='Reverse string'
        />

        <TextField
          inputRef={inputRef}
          onChange={onChange}
          value={input}
          label='Enter string to reverse'
          variant='filled'
        />
        <Box mt={3} textAlign='center'>
          <Button
            onClick={reversedString ? clear : fetchReversed}
            variant='contained'
          >
            {reversedString ? 'Clear' : 'Reverse!'}
          </Button>
        </Box>
        {reversedString !== undefined && (
          <Typography variant='h4' mt={5} textAlign='center'>
            {reversedString}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};
