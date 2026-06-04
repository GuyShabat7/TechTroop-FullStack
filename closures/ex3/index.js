const SongsManager = function () {
    const songs = {};
    const youtubeBaseUrl = "https://www.youtube.com/watch?v=";

    const addSong = (name, url) => {
        const videoId = url.split('v=')[1];
        songs[name] = videoId;
    }
    const fullUrl = name => youtubeBaseUrl + songs[name];   
    const getSong = name => console.log(fullUrl(name));

    return {
        addSong: addSong,
        getSong: getSong
    };
}

const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ