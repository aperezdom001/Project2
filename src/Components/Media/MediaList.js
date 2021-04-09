import {Link} from 'react-router-dom';

export default function MediaList(props){

    return(
        <div>
            <h1>Media List</h1>
            <div>
                {props.data.map((article, j) => {
                    return(
                        <Link to={`/media/${article.id}`}>{article.title}</Link>
                    )
                })}

            
            </div>
        </div>
    )
}