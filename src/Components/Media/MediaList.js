import {Link} from 'react-router-dom';

export default function MediaList(){

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