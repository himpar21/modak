import { useRef, useState } from "react";
import Timeline from "./components/Timeline";
import EnvelopeLogin from "./components/EnvelopeLogin";

import MusicPlayer from "./components/MusicPlayer";
import { reasons } from "./reasons";


function Navbar({ onWhyLoveClick }) {
  // Inject Google Fonts for romantic style (Dancing Script)
  if (!document.getElementById('romantic-font')) {
    const link = document.createElement('link');
    link.id = 'romantic-font';
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap';
    document.head.appendChild(link);
  }
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '48px',
      padding: '24px 0 0 0',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      zIndex: 1000,
      background: 'transparent',
      boxShadow: 'none',
      fontFamily: '"Dancing Script", cursive',
      fontSize: '2.1rem',
      fontWeight: 700,
      color: '#b83260',
      letterSpacing: '0.03em',
      userSelect: 'none',
      textShadow: '0 2px 8px #fff6, 0 1px 0 #fff8',
    }}>
      <a href="#our-story" style={{ textDecoration: 'none', color: '#b83260' }}>Our Story</a>
    </nav>
  );
}

function App() {
  const [unlocked, setUnlocked] = useState(false);
  const [showTimeline, setShowTimeline] = useState(false);
  const [showWhyLove, setShowWhyLove] = useState(false);
  const musicRef = useRef(null);

  const events = [
  {
    date: "22 August 2025",
    text: "Our first conversation on Hinge",
    image: "/images/22aug.jpeg",
    note: `The conversation which started with me looking like Chahal and vo chalta gaya Virat Anushka tk`
  },
  {
    date: "25 August 2025",
    text: "Started talking on Instagram",
    image: "/images/aug25.png",
    note: `Pahli baar we connected on Instagram i was in train to my home and we had such a good conversation kya kya discuss nhi kya tha humne from assignments to anime to love`
  },
  {
    date: "30 August 2025",
    text: "First WhatsApp text and our first call",
    image: "/images/30aug.png",
    note: `Jab humne pahli baar baat ki thi i heard your voice for the first time it was the voice which i knew i will never forget even we spoke for few minutes but it felt like hours and uske baad we started talking jab bhi m bahar jaata tha bike p`
  },
  {
    date: "1 September 2025",
    text: "I said I love you",
    image: "/images/1sep.png",
    note: `I had already fallen in love with you and mujhse raha nhi gaya to maine love you bol diya tha i was very afraid ki tum kya sochogi but i had really started falling in love with you`
  },
  {
    date: "12 September 2025",
    text: "Our first video call",
    image: "/images/12sep.jpeg",
    note: `From texts to call and then phir video call. I saw you for the first time on video call and i was just smiling and blushing and i was like ki kitni pyari ho tum i was just looking at you `
  },
  {
    date: "28 September 2025",
    text: "You said luv you too, sweetie",
    image: "/images/28sep.png",
    note: `Hehe it was so cute m baar baar ye message padhke blush kr rha tha i dont know maine kitni baar vo message padha hoga`
  },
  {
    date: "1 October 2025",
    text: "Text proposal to you",
    image: "/images/1oct.png",
    note: `I wanted to lock it in...
I was very nervous when i was typing the whole proposal and i was like ki tum gussa to nhi krogi it was maha navami of navratri when i asked you to be mine`
  },
  {
    date: "31 October 2025",
    text: "We met for the first time",
    image: "/images/31oct.jpg",
    note: `Mujhe vo pura din ekdum ache se yaad h i was waiting for you and tum chalte hue aa rhi ho then we hug and i was so nervous jab tumne mera arm hold kiya tha and uske baad we went to mandir and phir auto m jab hath pakda tha i was so nervous but you made me comfortable tumne jab pahli kissi kari hehe phir humari auto m kissi and humare Adams m cute moments i can never forget that this was THE BEST day of my life and i will always the cherish the memories forever `
  },
  {
    date: "19 November 2025",
    text: "You sent me flowers",
    image: "/images/19nov.jpeg",
    note: `I was so happy that day jab tumne mere liye flowers bheje the i couldn't stop smiling and blushing and looking at the flowers i slept with the flowers beside me`
  },
  {
    date: "3 January 2026",
    text: "Our first trip together to Chennai",
    image: "/images/3jan1.jpeg",
    note: `After so much planning we met in Chennai and seeing you again at airport i was so happy and excited Tum aise chalte hue aa rhi thi airport p and i was just looking at you and smiling and then i hugged you and i was like finally hum sath m h `
  },
  {
    date: "3 January 2026",
    text: "Our Museum Visit",
    image: "/images/3jan2.jpeg",
    note: `Art galleries k through explore krna and having dal roti and we clicked so many good photos together`
  },
  {
    date: "3 January 2026",
    text: "Our Beach Visit",
    image: "/images/3jan3.jpeg",
    note: `This was one of the best day of my life seeing you so much happy smiling and laughing it was a very beautiful moment for me tum itni pyari lag rhi thi mujhe bas dekhte rehne ka mann kr rha tha`
  },
  {
    date: "4 January 2026",
    text: "Our Temple Visit",
    image: "/images/4jan.jpeg",
    note: `Going to temple vo bhi sath m ek dusre ka hath pakadke it was a very peaceful and cute moment for us Bhagwan ji ki blessings li sath m`
  },
  {
    date: "4 January 2026",
    text: "Mall & Shopping",
    image: "/images/4jan2.jpeg",
    note: `Hum log mall gae the shopping k lie and tumne red dress pahni thi it is one of my favourite dress and you looked so pretty in it. We did shopping and phir khana bhi khaya it was a good day spent`
  },
  {
    date: "4 January 2026",
    text: "Cute Polaroids",
    image: "/images/4jan3.jpeg",
    note: `Mall m we went to click the polaroids we posed kitne retakes liye humne and we got our cute clicks i have the polaroids on the card jo tumne mere lie bheja tha and u wrote cute things on it and uspe tumhari kissi bhi h hehe i always keep it with me wherever i go`
  },
  {
    date: "14th February 2026",
    text: "Our first Valentine together",
    image: "/images/14feb1.jpeg",
    note: `Humara pura valentine week was so cute we sent flowers chocolates to each other i proposed you ek cute si humari drawing bhi banai thi ekdum pyare pyare moments the saare`
  },
  {
    date: "14 February 2026",
    text: "Our first Valentine together",
    image: "/images/14feb2.jpeg",
    note: `Humari first Valentine it was so cute we ordered dinner and ate together tumne mere liye flowers bhi bheje the i have preserved all of those in my diary.`
  },
  {
    date: "6 March 2026",
    text: "Our Zaitoon Date",
    image: "/images/6mar.jpeg",
    note: `The day we met again, m vahi p wait kar rha tha jaha m humari first date k din wait kr rha tha and u came walking in the same way in your mustard top mujhe first date k flashbacks aa rhe the and then we went to hotel and we hugged each other exchanged gifts mujhe bracelet bahut pasand aaya tha i wear it everytime and i love it so much i feel very close to u and it always reminds me of you phir hum zaitoon m gae the khane and vapis jaate time i pluck a flower from the tree and tumhare baalon m lagaya tha it is one of my favourite memory`
  },
  {
    date: "7 March 2026",
    text: "Our Fortune Park Date",
    image: "/images/7mar.jpeg",
    note: `Humne is din humari pahli movie dekhi sath m 'Chunking Express' and i always get flashbacks hum hug krke cuddle krke movie dekh rhe the bich bich m kissi kr rhe the it was very cute phir bahar jaane k lie jab ready ho rhe the helping in your makeup and tumne jo mera jacket pahna i havent washed it yet it smells like you so i dont want to wash it. And phir hum khana khane gae the we clicked photos and bahut saari achi photos li humne m baar baar saari photos dekhta hu`
  },
  {
    date: "8 March 2026",
    text: "Last Day of March Trip",
    image: "/images/8mar.jpeg",
    note: `It has been always tough for me to say goodbye to you. Jab tum hostel vapis jaa rhi thi I was watching you from gaps of the compound grils. We spent a really good time together and phirse alag jaana in long distance bahut bura lag rha tha aisa lag rha tha tumhe chodkar jau hi nhi kahi p.`
  }
];

  const handleUnlock = () => {
    setUnlocked(true);

    // ✅ START MUSIC ON USER CLICK
    musicRef.current?.startMusic();

    setTimeout(() => {
      setShowTimeline(true);
    }, 900);
  };

  return (
    <>
      <div className="mobile-blocker">
        <p>Please open this beautiful memory on a laptop ❤️</p>
      </div>
      
      <div className="desktop-app">
      <MusicPlayer ref={musicRef} />

      {!showTimeline && (
        <div className={`scene ${unlocked ? "scene-exit" : ""}`}>
          <div className="scene-inner">
            <EnvelopeLogin onLogin={handleUnlock} />
          </div>
        </div>
      )}

      {unlocked && <Navbar onWhyLoveClick={() => setShowWhyLove(true)} />}

      {showTimeline && !showWhyLove && (
        <div className="scene">
          <div className="scene-inner scene-enter">
            <div className="page">
              {/* <h1 className="title" id="our-story">Our Story</h1> */}
              <Timeline events={events} />
            </div>
          </div>
        </div>
      )}

      {showWhyLove && (
        <div className="letter-overlay" style={{ zIndex: 3000 }}>
          <div className="letter-paper" style={{ position: 'relative' }}>
            <button className="letter-close" onClick={() => setShowWhyLove(false)}>&times;</button>
            <div className="letter-content">
              <h2 style={{textAlign:'center',marginTop:0}}>100 Reasons Why I Love You</h2>
              <ol className="reasons-list">
                {reasons.map((reason, index) => (
                  <li key={index} style={{ animationDelay: `${(index % 20) * 0.05}s` }}>
                    {reason}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      )}
      </div>
    </>
  );
}

export default App;
