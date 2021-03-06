import { useState, useEffect} from 'react';

export default function Media (props) {
    const [mediaInfo, setMediaInfo] = useState({});

    const getMediaInfo = async () => {
        try {
            const res = await fetch(`https://api.artic.edu/api/v1/articles/${props.match.params.id}`);
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

            <h1 className='heading-detail'>~ Article Details ~</h1>
           
            {mediaInfo.data &&
                <div>
                    <h2 className='article-title'>{mediaInfo.data.title}</h2>
                    <h3 className='article-date'>{mediaInfo.data.date}</h3>
                    <p className='article-piece' dangerouslySetInnerHTML={{ __html:mediaInfo.data.copy }}></p>
                </div>
            }
        </div>
    )
}