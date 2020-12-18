
// "https://api.twitch.tv/helix/streams?user_id=269187200&user_id=140719340"

// ttps://api.twitch.tv/helix/users?login=foozlegaming&login=itsmanhart

// let urlStart = "https://api.twitch.tv/users?";
// let params = [];
// params.push("login=foozlegaming");
// params.push("login=itsmanhart");
// let url = urlStart + "?" + params.join("&");
// console.log(url);

// let urlStart = "https://api.twitch.tv/";
// let params = [];
// params.push('login=foozlegaming');
// params.push('login=itsmanhart');
// let url = urlStart + '?' + params.join('&');
// console.log(url);

// https://api.twitch.tv/helix/users?login=foozlegaming&login=itsmanhart

// 1. Get list of user name with users?login (Only needs to be done once!)
// 2. this gets their user ID to populate the get live function (Needs to be checked every 5 mins)

// https://api.twitch.tv/helix/users?login=foozlegaming

// https://api.twitch.tv/helix/users?id=44322889

// https://api.twitch.tv/helix/streams?query=269187200


// SAFE STUFF
// https://api.twitch.tv/helix/search/channels?query=itsmanhart"

// Foozle ID = 269187200
// "https://api.twitch.tv/helix/streams?user_id=269187200"

// useEffect(() => {
//     // Need to do this once before build to get the twitch user id.
//     // Than use the user id to get the status.
//     const fetchStreamList = async () => {
//         let urlStart = "https://api.twitch.tv/helix/users?login=";
//         const slugs = StreamerData.map(channel => channel.slug)
//         let url = urlStart + slugs.join("&login=");
//         const result = await api.get(url);
//         console.log(result);
//     };
//     fetchStreamList()
//   })


// {
//     "name": "MnMenace86",
//     "slug": "MnMenace86",
//     "link": "https://www.facebook.com/MnMenace86/",
//     "platform": "Facebook",
//     "platformImg": "FbLogoColor.png"
//   },