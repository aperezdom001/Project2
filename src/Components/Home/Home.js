import artistOfDay from './artistOfDay.json';
import artPrompts from './artPrompts.json';
import funFacts from './funFacts.json';

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
            <h3 className='greeting-intro'>
                Explore the history of art, learn more about
                artists, and observe new art techniques and concepts.
            </h3>
                
            <h3 className='greeting-intro'>
                Improve your creative side and learn how you can 
                use that to your advantage in your daily life.
            </h3>

            <div>
            <h3 className='greeting-intro'>
                Here in ARTDaily, learn some interesting fun facts
                and check out the Artist of the Day along with an
                art prompt!
            </h3>

            
             {artistOfDay[randomIdx] !== undefined && 
             
                    <div className='artistOfDayDisplay'>
                        <h4>
                            {artistOfDay[randomIdx].nameDate}
                            {/* insert random generator code here */}
                             {/* {Math.random({artist.name}) * artistOfDay.length} */}
                        </h4>
                        <h4>
                            {artistOfDay[randomIdx].typeofArt}
                             {/* insert random generator code here */}
                             {/* {Math.random({artist.typeOfArt}) * artistOfDay.length} */}
                        </h4>
                        <h4>
                            {artistOfDay[randomIdx].artwork}
                            {/* insert random generator code here */}
                             {/* {Math.random({artist.artwork}) * artistOfDay.length} */}
                            
                        </h4>
                    </div>  
                        }

                    <div>
                       
                       <h4>Fun fact: {funFacts[randomFactIdx] !== undefined && funFacts[randomFactIdx].fact}</h4>

                        </div>

                    <div>
                        <h4>Prompt of the Day:</h4>
                        <h5>{artPrompts[randomPromptIdx] !== undefined && artPrompts[randomPromptIdx].prompt}</h5>

                    </div>

            </div>
           
           
        </div>
    )
}