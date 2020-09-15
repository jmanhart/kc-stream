import React from 'react';
import './App.scss';
import StreamerData from './streamer-data.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h2>🎮 Kansas City Streamers</h2>
      <p>Last updated 9/15/2020 | <a href="https://twitter.com/JohnManhart">Ask to Join</a></p>
      <ul>
        {StreamerData.map((item) => {
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


