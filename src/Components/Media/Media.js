import {useState, useEffect} from 'react'
;
export default function Media (props) {
    const [mediaInfo, setMediaInfo] = useState({});

    const getMediaInfo = async () => {
        try {
            const res = await fetch(`https://api.artic.edu/api/v1/articles`);
            const data = await res.json();
            setMediaInfo(data);
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
        </div>
    )
}