import './App.css';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ArtistsLists from './Components/Artists/ArtistsList';
import Media from './Components/Media/Media';
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
    Component: ArtistsLists,
    key:'ArtistsLists',
    path: '/artistslist'

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
      const res = await fetch('https://api.artic.edu/api/v1/artists/?fields=id,title');
    const data = await res.json();
    setArtistsData(data.data);
    }catch (err){
      console.log(err);
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

              component={props => <Component 
                data={ path === '/artistslist' ? artistsData : null}
                {...props} page={key} />}
              />))
        }
      </Switch>
    </Router>
  )
}