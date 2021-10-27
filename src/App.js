import Container from '@mui/material/Container';
import UsersList from './components/UsersList';
import UserDetails from './components/UserDetails';
import UserPosts from './components/UserPosts';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Container maxWidth='sm'>
        <Switch>
          <Route exact path='/'>
            <UsersList />
          </Route>
          <Route exact path='/user/:id'>
            <UserDetails />
          </Route>
          <Route exact path='/user/:id/posts'>
            <UserPosts />
          </Route>
          <Route path='*'>
            <Redirect to='/' />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}
