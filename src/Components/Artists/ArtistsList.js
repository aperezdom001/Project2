import {Link} from 'react-router-dom';
import { useState, useEffect} from 'react';



export default function ArtistsLists (props) {

    const [artistDetail, setArtistDetail] = useState({});

const getArtistDetails = async() => {
    try{
        const res = await fetch(`https://api.artic.edu/api/v1/artists/${props.match.params.id}`);
        const data = await res.json();
        setArtistDetail(data);
    }catch(err){
        console.log(err);
    }
}

useEffect( () => {
    getArtistDetails();
}, []);

console.log(artistDetail);
    
    return (
        <div>
            <h1>Artist List</h1>
            <div>
                {props.data.map((artist, i) => {
                    return (
                        <Link to={`/artists/${artist.id}`}> {artist.title}</Link>
                        
                    )
                })}

                {/* //<h2>{props.data.artist.title}</h2> */}
            </div>
        </div>
    )
}