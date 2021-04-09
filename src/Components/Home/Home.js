export default function Home (props){
    // const artistName:["Leena Teerlinc", Utama ]

    const artistOfDay =[
        {
           nameDate: 'Levina Teerlinc - 1510s-1576',
           typeofArt: 'Flemish Renassaince miniaturist',
           artwork: 'Potrait of Katherine Grey (late 1550s to early 1560s'
        },

        {
            nameDate: 'Utamaro - 1754-1806',
            typeofArt: 'Ukiyo-e woodblock prints',
            artwork: 'Three Beauties of the Present Day (1793)'
         },

         {
            nameDate: 'María Izquierdo - 1902-1955',
            typeofArt: 'Mexican Modernism',
            artwork: 'Bride from Papantla (1944)'
         },

         {
            nameDate: 'Roy Lichtenstein - 1923-1997',
            typeofArt: 'Pop Art',
            artwork: 'In the Car (1963)'
         },

         {
            nameDate: 'Ayami Kojima',
            typeofArt: 'Concept Artist - Gothic Designs',
            artwork: 'Castlevania: Lament of Innocence(2003)'
         },

         {
            nameDate: 'Nell Brinkley - 1886-1944',
            typeofArt: 'Illustration and Comic Art',
            artwork: 'Golden Eyes - (1918)'
         },
             
    ]

  const funFacts = [
      {
          fact: 'Painting the Mona Lisas lips took Leonardo da Vinci 12 years!'
      }, 

      {
        fact: 'The sculpture of David was originally going to be a statue of Hercules!'
      },

      {
        fact: 'Art competitions were once part of the Olympics. Between 1912 and 1948, medals were awarded for painting, sculpting, music, architecture, and literature. Olympic athletes were required to be amateurs in the arts for them to qualify.'
       },

       {
        fact: 'Kim Dong Yoo created a painting of Albert Einstein using portraits of Marilyn Monroe.'
      },

      {
        fact: 'There are 12 definitions of the word art in the Oxford Dictionary.'
      },

      {
        fact: 'Van Gogh only sold one painting during his lifetime!'
      },

      {
        fact: 'New Jersey feautures a museum dedicated to spoons.'
      },
    ]

    const artPrompt = [
        {
            prompt: "With the media of your choosing, create a tree using the triad color scheme."
        },

        {
            prompt: "Create a piece of your favorite food using your three least favorite colors."
        },

        {
            prompt: "Pick a random song through your favorite playlist and look at the first line of the chorus. Sketch a representation of that particular line."
        },

        {
            prompt: "Cut out images from magazines, and create your own self-potrait."
        },

        {
            prompt: "Recreate a work by your favorite artist with the media of your choosing."
        },

        {
            prompt: "Create a piece inspired by your favorite Disney Princess."
        },

        {
            prompt: "Choose your least favorite song. Create an abstract painting (with the paints of your choice) by listening to the beats,rhythm, and vocals. Reflect on why and how you created what you created."
        },

        {
            prompt: "Create an illustration about your first time meeting a creature from outer space."
        },

        {
            prompt: "Use coffee or wine to create a piece about your bad habits. "
        },

    ]
    return(
        <div>
            <h1>StArt Home</h1>
            <h3>
                Explore the history of art, learn more about
                artists, and observe new art techniques and concepts.
            </h3>
                
            <h3>
                Improve your creative side and how you can 
                use that to your advantage in your daily life.
            </h3>

            <h3>
                Here in ARTDaily, learn some interesting fun facts
                and check out the Artist of the Day along with an
                art prompt!
            </h3>
        </div>
    )
}