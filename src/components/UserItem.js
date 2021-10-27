import React from 'react';
import { Link } from 'react-router-dom';

import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function UserItem({ userData }) {
  const { id, picture, firstName, lastName } = userData;

  return (
    <Button component={Link} to={`/user/${id}`}>
      <ListItem alignItems='flex-start'>
        <ListItemAvatar>
          <Avatar alt='Remy Sharp' src={picture} />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography
              sx={{ display: 'inline' }}
              component='span'
              variant='body2'
              color='text.primary'
            >
              {`${firstName} ${lastName}`}
            </Typography>
          }
        />
      </ListItem>
      <Divider variant='inset' component='li' />
    </Button>
  );
}
