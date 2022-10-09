import React from 'react';
import { Divider, ListItem, ListItemText, Typography } from '@mui/material';
import FlagIcon from '@mui/icons-material/Flag';

export const UserListItem = ({ user }) => {
  return (
    <>
      <Divider />
      <ListItem>
        <ListItemText>
          <Typography variant='h6'>{'Firstname: ' + user.firstName}</Typography>
          <Typography variant='h6'>{'Lastname: ' + user.lastName}</Typography>
          <Typography variant='h6'>{'Age: ' + user.age}</Typography>
          <Typography variant='h6'>{'Username: ' + user.userName}</Typography>
          <Typography variant='h6'>
            {'Reversed firstname: ' + user.reversedName}
          </Typography>
        </ListItemText>
        {user.isPalindrom && <FlagIcon fontSize='large' color={'info'} />}
      </ListItem>
      <Divider />
    </>
  );
};
