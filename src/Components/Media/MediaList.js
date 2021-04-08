import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';

export default function MediaList(){

    const [articleDetail, setArticleDetail] = useState({});

    const getArticleDetails = async() => {
        try{
            const res = await fetch(`https://api.artic.edu/api/v1/artists/${props.match.params.title}`);
            const data = await res.json();
            setArticleDetail(data);
        }catch(err){
            console.log(err);
        }
    }

    useEffect ( () => {
        getArticleDetails();
    }, []);

    console.log(articleDetail);

    return(
        <div>
            <h1>{props.data.title}</h1>
            <div>
                {props.data.map((article, j) => {
                    return(
                        <Link to={`/media/${article.title}`}></Link>
                    )
                })}
            </div>
        </div>
    )
}