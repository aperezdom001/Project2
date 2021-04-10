import { useState, useEffect} from 'react';


export default function Artists(props) {
    const [artistInfo, setArtistInfo] = useState({});

    const getArtistInfo = async () => {
        try{
            const res = await fetch(`https://api.artic.edu/api/v1/artists/${props.match.params.id}`);
            const data = await res.json();
            setArtistInfo(data);
        }catch(err){
            console.log(err);
        }
    }

    useEffect( () => {
        getArtistInfo();
    }, []); 
    console.log(artistInfo);
    return(
        <div>
             <h1 className='more-info'>More Information:</h1>
             {artistInfo.data && 
                <div>
                        <h2>{artistInfo.data.title}</h2>
                        <h2>{artistInfo.data.birth_date} - {artistInfo.data.death_date}</h2>
                        {/* <h3>{artistInfo.data.artwork_ids}</h3> */}
                        <p>{artistInfo.data.description}</p>
                    
                </div>
             }
        </div>
       
       
    )
}