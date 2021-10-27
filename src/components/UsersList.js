import UserItem from './UserItem';
import useFetch from '../hooks/useFetch';
import configData from '../config.json';
import Error from './Error';

import CircularProgress from '@mui/material/CircularProgress';
import List from '@mui/material/List';

export default function UsersList() {
  const { BASE_API_URL, API_USER, LIMIT_USERS } = configData;
  const url = `${BASE_API_URL}${API_USER}?limit=${LIMIT_USERS}`;
  const { data: allUsers, loading, error } = useFetch(url);

  return (
    <List sx={{ width: '100%', maxWidth: 360 }}>
      {loading && <CircularProgress />}
      {allUsers &&
        allUsers.map((userData) => {
          return <UserItem userData={userData} key={userData.id} />;
        })}
      {error && <Error />}
    </List>
  );
}
