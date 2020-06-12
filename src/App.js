import React from 'react';
import './App.scss';



const data = [
  {
    "name": "chachitownfair",
    "link": "https://www.twitch.tv/chachitownfair",
    "platform": "Twitch",
    "platformImg": "TwitchGlitchPurple.png"
  },
  {
    "name": "denec27",
    "link": "Https://www.twitch.tv/denec27",
    "platform": "Twitch",
    "platformImg": "TwitchGlitchPurple.png"
  },
  {
    "name": "gibrias",
    "link": "https://www.twitch.tv/gibrias",
    "platform": "Twitch",
    "platformImg": "TwitchGlitchPurple.png"
  },
  {
    "name": "hinzae",
    "link": "https://www.twitch.tv/hinzae",
    "platform": "Twitch",
    "platformImg": "TwitchGlitchPurple.png"
  },
  {
    "name": "HYPRRR",
    "link": "https://www.facebook.com/HYPRRR/",
    "platform": "Facebook",
    "platformImg": "FbLogoColor.png"
  },
  {
    "name": "john_manhart",
    "link": "https://www.twitch.tv/john_manhart",
    "platform": "Twitch",
    "platformImg": "TwitchGlitchPurple.png"
  },
  {
    "name": "lotis_mindset",
    "link": "https://www.twitch.tv/lotis_mindset",
    "platform": "Twitch",
    "platformImg": "TwitchGlitchPurple.png"
  },
  {
    "name": "Nerdmeat_",
    "link": "https://www.twitch.tv/nerdmeat_",
    "platform": "Twitch",
    "platformImg": "TwitchGlitchPurple.png"
  },
  {
    "name": "sinrin",
    "link": "https://www.twitch.tv/sinrin",
    "platform": "Twitch",
    "platformImg": "TwitchGlitchPurple.png"
  },
  {
    "name": "slamdunkpony",
    "link": "https://www.twitch.tv/slamdunkpony",
    "platform": "Twitch",
    "platformImg": "TwitchGlitchPurple.png"
  },
  {
    "name": "SovereignSyd",
    "link": "https://www.twitch.tv/sovereignsyd",
    "platform": "Twitch",
    "platformImg": "TwitchGlitchPurple.png"
  },
  {
    "name": "starsofnight",
    "link": "https://www.twitch.tv/starsofnight",
    "platform": "Twitch",
    "platformImg": "TwitchGlitchPurple.png"
  },
  {
    "name": "yantzi",
    "link": "https://www.twitch.tv/yantzi",
    "platform": "Twitch",
    "platformImg": "TwitchGlitchPurple.png"
  }
]
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h2>🎮 Kansas City Streamers</h2>
      <p>Last updated 6/10/2020 | <a href="https://twitter.com/JohnManhart">Ask to Join</a></p>
      <ul>
        {data.map((item) => {
          return (
            <li>
              <a
                className="App-link"
                href={item.link}
                key={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4 key={item.name}>{item.name}</h4>
              </a>
              <img key={item.platformImg} src={item.platformImg} alt="Logo" />
            </li>
          )
        })}
      </ul>
      </header>
    </div>
  );
}

export default App;


