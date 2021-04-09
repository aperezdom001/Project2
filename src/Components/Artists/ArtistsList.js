import {Link} from 'react-router-dom';

export default function ArtistsLists (props) {

    
    return (
        <div>
            <h1>Artist List</h1>
            <div className='artistlist'>
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