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
        <h1>This is the Artists Component</h1>
    )
}