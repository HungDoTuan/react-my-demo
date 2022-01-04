
import './App.css';
import Navigation from './Navigation'
import HomePage from './HomePage'
import Products from './Products'
import UsersDetail from './UsersDetail'
import Users from './Users'
import Post from './Post'
import { Route, Switch} from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        
        <Route exact path='/'>
        <HomePage />
        </Route>
        
        <Route path='/users' exact >
        <Users/>
        </Route>
        
        <Route path='/products' >
        <Products />
        </Route>
        
        <Route path='/post' >
          <Post />
        </Route>

        < Route path='/users/:id'>
          <UsersDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
