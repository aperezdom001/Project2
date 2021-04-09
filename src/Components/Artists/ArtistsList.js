import './artists.css';
import {Link} from 'react-router-dom';
import { useState, useEffect} from 'react';


export default function ArtistsLists (props) {

    
    return (
        <div>
            <h1 className='artist-list-heading'>Learn about the Legendary Artists</h1>
            <div>
                <h3 className='artist-list-display'>
                {props.data.map((artist, i) => {
                    return (
                        <Link to={`/artists/${artist.id}`}> {artist.title}</Link>
                        
                    )
                })}
                </h3>
                {/* //<h2>{props.data.artist.title}</h2> */}
            </div>
        </div>
    )
}