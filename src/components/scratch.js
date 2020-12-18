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