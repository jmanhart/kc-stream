import React from 'react';
import './App.scss';
import Games from './components/Games.js';



function App() {
 
  return (
    <div className="App">
    <header className="App-header">
    <h2><span role="img" aria-label="sheep">🎮</span> Kansas City Streameeers</h2>
    <p>Last updated 9/18/2020 | <a href="https://twitter.com/JohnManhart">Ask to Join</a></p>
    <Games />
    </header>
  </div>
  );
}

export default App;




// How to check if online
// curl -X GET 'https://api.twitch.tv/helix/search/channels?query=foozlegaming' \
// -H 'Authorization: Bearer 08vc8yeui68yp2u5ern07wv9yf4gqb' \
// -H 'Client-Id: gp762nuuoqcoxypju8c569th9wz7q5'




