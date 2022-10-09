import React from 'react';
import { Box, createTheme, ThemeProvider } from '@mui/material';
import { PalindromExercise } from './components/PalindromExercise/PalindromExercise';
import { NthLargestExercise } from './components/NthLargestExercise/NthLargestExercise';

function App () {
  const theme = createTheme({
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ].join(',')
    },
    components: {
      MuiCard: {
        defaultProps: {
          elevation: 10
        }
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        p={12}
        display='flex'
        minHeight='100vh'
        alignItems='flex-start'
        justifyContent='space-evenly'
      >
        <Box>
          <PalindromExercise />
        </Box>
        <Box>
          <NthLargestExercise />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
