import {useState, useEffect} from 'react'
;
export default function Media (props) {
    const [mediaInfo, setMediaInfo] = useState({});

    const getMediaInfo = async () => {
        try {
            const res = await fetch(`https://api.artic.edu/api/v1/articles${props.match.params.id}`);
            const data = await res.json();
            setMediaInfor(data);
        }catch (err){
            console.log(err);
        }
    }

    useEffect( () => {
        getMediaInfo();
    }, []);

    console.log(mediaInfo);

    return(
        <div>
            <h1>DailyArt Media</h1>
            <h2>{props.data.match.params.title}</h2>
        </div>
    )
}