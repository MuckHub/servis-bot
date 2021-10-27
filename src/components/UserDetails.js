import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Error from './Error'
import useFetch from '../hooks/useFetch';
import configData from '../config.json';

import CircularProgress from '@mui/material/CircularProgress';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

export default function UserDetails() {
  const { BASE_API_URL, API_USER } = configData;
  const { id } = useParams();
  const url = `${BASE_API_URL}${API_USER}${id}`;
  const { data: userDetails, loading, error } = useFetch(url, true);

  return (
    <>
      {loading && <CircularProgress />}
      {error && <Error/>}
      {userDetails && (
        <Card style={{ margin: 'auto' }}>
          <CardContent>
            <Avatar src={userDetails.picture} />
            <h3>
              {userDetails.firstName} {userDetails.lastName}
            </h3>
            <div>Date of Birth: {userDetails.dateOfBirthFormated}</div>
            <div>Email: {userDetails.email}</div>
            <div>
              Address: {userDetails.location.street} {userDetails.location.city}
            </div>
            <div>Phone: {userDetails.phone}</div>
            <Button
              style={{ marginTop: '10px' }}
              component={Link}
              to={`/user/${userDetails.id}/posts`}
              variant='outlined'
            >
              Show posts
            </Button>
          </CardContent>
        </Card>
      )}
    </>
  );
}
