import {Link} from 'react-router-dom';

export default function ArtistsLists ({data}) {
    console.log(data);
    return (
        <div>
            <h1>Artist List</h1>
            <div>
                {data.map((artist, i) => {
                    return (
                        <Link to={`/artists/${artist.id}`}> {artist.title}</Link>
                        
                    )
                })}
            </div>
        </div>
    )
}