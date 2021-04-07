import './App.css';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { useStatement, useEffect } from 'react';
import Artists from './Artists';
import Media from './Media';
import Home from './Home';

// Save the Component, key and path in an array of objects for each Route
// You could write all routes by hand but I'm lazy annd this lets me use
// the map method to just loop over them and make my routes
// SWITCH is used so that it only ever matches one route at a time
// If you don't want to use react router just rewrite the app component to not use it

const routes = [
  {
    Component: Media,
    key: 'Media',
    path: '/media'
  },
  {
    Component: Artists,
    key: 'Artists',
    path: '/artists'
  },
  {
    Component: Home,
    key: 'Home',
    path: '/'
  }
]

export default function App () {
  const [artistsData, setArtistsData] = useState([]);

  const getArtistsData = async () => { 
    try{
      const res = await fetch('https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,date_display,main_reference_number');
    const data = await res.json();
    console.log(data);
    }catch (err){
      console.log(error);
    }
  }

  useEffect(() => {
    getArtistsData();
  }, []);
  return (
    <Router>
      <nav>
        {routes.map(route => <Link key={route.key} to={route.path}>{route.key}</Link>)}
      </nav>
      <Switch>
        {
          routes.map(({key, Component, path}) => (
            <Route
              key={key}
              path={path}
              component={props => <Component {...props} page={key} />}
              />))
        }
      </Switch>
    </Router>
  )
}
