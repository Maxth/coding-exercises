import Button from '@mui/material/Button';
import { Box, Card, CardContent, CardHeader, List } from '@mui/material';
import React, { useState } from 'react';
import { UserListItem } from './UserListItem';

export const PalindromExercise = () => {
  const [reversedNames, setReversedNames] = useState();

  const fetchReversedNames = async () => {
    if (reversedNames === undefined) {
      try {
        const result = await fetch(
          'http://localhost:8081/api/methods/userswithreversednames'
        );
        const data = await result.json();
        setReversedNames(data);
      } catch (e) {
        console.error('fetchReversedNames', e);
      }
    } else {
      setReversedNames(undefined);
    }
  };

  return (
    <Card>
      <CardContent>
        <CardHeader
          titleTypographyProps={{ textAlign: 'center' }}
          title='Users with palindrom flag'
        />
        <Box textAlign='center'>
          <Button onClick={fetchReversedNames} variant='contained'>
            {reversedNames ? 'Clear' : 'Fetch users'}
          </Button>
        </Box>
        {reversedNames !== undefined && (
          <List>
            {reversedNames.map((user, index) => (
              <UserListItem key={user.id} user={user} />
            ))}
          </List>
        )}
      </CardContent>
    </Card>
  );
};
