import artistOfDay from './artistOfDay.json';
import artPrompts from './artPrompts.json';
import funFacts from './funFacts.json';
import './Home.css';

export default function Home (props){
  console.log(artistOfDay);
  console.log(artPrompts);
  console.log(funFacts);

  const randomIdx = Math.floor(Math.random()* artistOfDay.length-1);
  console.log(artistOfDay[randomIdx]);

  const randomFactIdx = Math.floor(Math.random() * funFacts.length-1);

  const randomPromptIdx = Math.floor(Math.random() * artPrompts.length-1);
  
 
    return(
        <div>
            <h1 className="home-page-title">~ StArt Home ~</h1>
        

            <div className='border-wrap-home'>
            <p className='greeting-intro'>
                Explore the history of art, learn more about
                artists, and observe new art techniques and concepts.
               
            </p>
                
            <p className='greeting-intro'>
                Improve your creative side and learn how you can 
                use that to your advantage in your daily life.
            </p>
            <p className='greeting-intro'>
                Here in ARTDaily, learn some interesting fun facts
                and check out the Artist of the Day along with an
                art prompt!
            </p>

            
             {artistOfDay[randomIdx] !== undefined && 
             
                    <div>
                        <h2 className='artist-day-title'>~ Artist of the Day ~</h2>
                        <h4 className='artist-of-day'>
                            {artistOfDay[randomIdx].nameDate}
                            {/* insert random generator code here */}
                             {/* {Math.random({artist.name}) * artistOfDay.length} */}
                        </h4>
                        <h5 classname='artist-of-day-type'>
                            {artistOfDay[randomIdx].typeofArt}
                             {/* insert random generator code here */}
                             {/* {Math.random({artist.typeOfArt}) * artistOfDay.length} */}
                        </h5>
                        <h5 className='artist-of-day-artwork'>
                            {artistOfDay[randomIdx].artwork}
                            {/* insert random generator code here */}
                             {/* {Math.random({artist.artwork}) * artistOfDay.length} */}
                            
                        </h5>
                    </div>  
                        }

                    <div>
                       
                       <h2 className='fun-fact-title'>~ Fun Fact ~</h2>
                       <h3 className='fun-facts'> {funFacts[randomFactIdx] !== undefined && funFacts[randomFactIdx].fact}</h3>

                        </div>

                    <div>
                        <h2 className='art-prompt-title'>~ Prompt of the Day ~</h2>
                        <h3 className='art-prompt'>{artPrompts[randomPromptIdx] !== undefined && artPrompts[randomPromptIdx].prompt}</h3>

                    </div>

            </div>
           
           
        </div>
    )
}