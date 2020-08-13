const path = require("path");
const express = require("express");
const cors = require("cors");
const ytdl = require("ytdl-core");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/download", (req, res) => {
  const URL = req.query.URL;

  res.header("Content-Disposition", 'attachment; filename="video.mp4"');

  ytdl(URL, {
    format: "mp4",
  }).pipe(res);
});

const PORT = 3030 || process.env.PORT;

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
