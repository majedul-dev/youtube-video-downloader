## How I made my own YouTube Downloader using JavaScript and Node.js

We used three modules to build the Youtube downloader

`"dependencies": { "cors": "^2.8.5", "express": "^4.17.1", "nodemon": "^2.0.4", "ytdl-core": "^3.2.1" }`

### ytdl-core --

ytdl-core is a module that can be installed in your node project. It allows you to download youtube videos. This awsome module was made by a person called fent. It has a lot of features which are great like ytdl.videoInfo which gives you different information about a video. I have use this feature to create a youtube downloader where you can search for the video or put the link in to download the video. ytdl-core can be used for all different purposes. Let me give you an example. If you want your website to have your video that you uploaded to youtube and you also don’t want it to be blocked in places where youtube is blocked like Schools. Then you can use ytdl-core to download your own video and use it. ytdl also allows you to validate Youtube URLs and validate Youtube video IDs.
