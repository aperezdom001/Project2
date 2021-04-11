import './App.css';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ArtistsLists from './Components/Artists/ArtistsList';
import Artists from './Components/Artists/Artists';
import Media from './Components/Media/Media';
import MediaDetail from './Components/Media/MediaDetail';
import Home from './Components/Home/Home';


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
    Component: MediaDetail,
    key: 'Media Detail',
    path: '/media/:id'
  },

  {
    Component: Artists,
    key: 'Artists',
    path: '/artists/:id'
  },

  {
    Component: ArtistsLists,
    key:'Artists List',
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
       <h1 className='website-title'>StArt</h1>
        {routes.map(route => 
        {  
          if(route.key !== 'Artists' && route.key !== 'Media Detail'){
           return <Link key={route.key} to={route.path}>{route.key}</Link>
  
          }
      
        })
          }
      </nav>
    
      <Switch>

        {artistsData.length > 0 && routes.map(({key, Component, path}) => (
           <Route
           key={key}
           exact path={path}
           component={props => <Component 
             data={ path === '/artistslist' ? artistsData : null}
             {...props} page={key} />}
           />))
        }
        
      </Switch>
      <footer>
          @AidePerez with SEIR-Erica 2021
          <br></br>
          Credits to: Art Institute of Chicago
        </footer>
    </Router>
    
  )
}