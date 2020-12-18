import React, {useState, useEffect} from 'react';
import api from '../api';
import StreamerData from '../streamer-data.js';

{/*
fullList = [] (Get this from streamer-data)
onlineList = [] (Make an API call)
offlineList = [] (Remove Online people from this list)
*/}

export default function Games() {
  let fullStreamerList = StreamerData.map(channel => channel.name)
  console.log(fullStreamerList)
  const [liveStreames, setLiveStreamers] = useState([])
  useEffect(() => {
    const fetchLiveStreamers = async () => {
        let urlStart = "https://api.twitch.tv/helix/streams?user_id=";
        let getUserId = StreamerData.map(channel => channel.user_id)
        let url = urlStart + getUserId.join("&user_id=");
        const result = await api.get(url);
        setLiveStreamers(result.data.data);
    };
    // fetchLiveStreamers()
  })

  return (
    <div>
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

      {}
  </div>
  );
}
