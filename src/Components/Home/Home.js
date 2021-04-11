import artistOfDay from './artistOfDay.json';
import artPrompts from './artPrompts.json';
import funFacts from './funFacts.json';
import './Home.css';

export default function Home (props){
 
// The variables random generator for the Home Page in artist of day, fun facts, and prompts //
  const randomIdx = Math.floor(Math.random()* artistOfDay.length-1);
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
                     To start the day with some art: 
                 </p>

                 <li className='list-start'> 1. Discover a new artist</li>
                 <li className='list-start'> 2. Learn some fun facts</li>
                 <li className='list-start'> 3. Do an art prompt!</li>

                {/* The random generator variables being called with the json files I created for them */}
                {artistOfDay[randomIdx] !== undefined && 
             
                    <div className='home-art-flex-container'>

                        <div className='one'>
                        <h2 className='artist-of-day'>~ Artist of the Day ~</h2>

                        <h4 className='one'>
                            {artistOfDay[randomIdx].nameDate}
                        </h4>

                        <h5 className='one'>
                            {artistOfDay[randomIdx].typeofArt}
                        </h5>

                        <h5 className='one'>
                            {artistOfDay[randomIdx].artwork}
                        </h5>
                        </div>

                    </div>  
                        }

                    <div className='home-art-flex-container'>
                       <h2 className='art-fun-prompt'>~ Fun Fact ~</h2>

                       <h3 className='art-fun-prompt'> {funFacts[randomFactIdx] !== undefined && funFacts[randomFactIdx].fact}</h3>

                    </div>

                    <div className='home-art-flex-container'>
                        <h2 className='art-fun-prompt'>~ Prompt of the Day ~</h2>

                        <h3 className='art-fun-prompt'>{artPrompts[randomPromptIdx] !== undefined && artPrompts[randomPromptIdx].prompt}</h3>

                    </div>

            </div>
           
           
        </div>
    )
}