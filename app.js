const express = require("express");
const app = express();
const port = 3000;

// importo la rotta riferita a posts
const routerPosts = require("./routers/posts")

app.use("/posts", routerPosts)

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send()
})

app.listen(port, () => {
    console.log("il server è OK!")
})