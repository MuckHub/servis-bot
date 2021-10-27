import { useParams } from 'react-router-dom';
import Error from './Error';
import useFetch from '../hooks/useFetch';
import Post from './Post';
import configData from '../config.json';

import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function UserPosts() {
  const { BASE_API_URL, API_USER, LIMIT_POSTS } = configData;
  const { id } = useParams();
  const url = `${BASE_API_URL}${API_USER}${id}/post?limit=${LIMIT_POSTS}`;
  const { data: allPosts, loading, error } = useFetch(url);

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {loading && <CircularProgress />}
        {allPosts &&
          allPosts.map((post) => (
            <Grid item xs={6} key={post.id}>
              <Post post={post} />
            </Grid>
          ))}
        {error && <Error />}
      </Grid>
    </Box>
  );
}
