import { useState, useEffect} from 'react';

export default function MediaDetail(props){
    const [articleInfo, setArticleInfo] = useState({});

    const getArticleInfo = async () => {
        try{
            const res = await fetch('https://api.artic.edu/api/v1/articles');
            const data = await res.json();
            setArticleInfo(data);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        getArticleInfo();
    }, []);
    console.log(articleInfo);

    return(
        <div>

            <h1>Article Details</h1>
           
            {articleInfo.data &&
                <div>
                    <h2>{articleInfo.data.title}</h2>
                </div>
            }

            {/* <h2 className='chosen-article-info'>
                {mediaInfo.data.title}
            </h2>

            <p>{mediaInfo.data.copy}</p> */}


        
        </div>
    )
}