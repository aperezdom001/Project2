import { useState, useEffect} from 'react';

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

            <h1>Article Details</h1>
           
            {mediaInfo.data &&
                <div>
                    <h2>{mediaInfo.data.title}</h2>
                    <h3>{mediaInfo.data.date}</h3>
                    <p>{mediaInfo.data.copy}</p>
                </div>
            }

            {/* <h2 className='chosen-article-info'>
                {mediaInfo.data.title}
            </h2>

            <p>{mediaInfo.data.copy}</p> */}


        
        </div>
    )
}