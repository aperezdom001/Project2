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

    return(
        <div>
            <h1 className='media-title'>~ StArt Media ~</h1>
            <h2 className='article-list-display'>
            {mediaInfo.data && mediaInfo.data.map((article, i) => {
                    return (
                        <Link key={i} to={`/media/${article.id}`}> {article.title}</Link>
                        
                    )
                })}
            </h2>
        </div>
    )
}