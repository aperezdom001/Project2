import './media.css';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

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
            <h1 className='media-title'>~ StArt Media ~</h1>
            {mediaInfo.data && mediaInfo.data.map((article, i) => {
                    return (
                        <Link to={`/media/${article.id}`}> {article.title}</Link>
                        
                    )
                })}
        </div>
    )
}