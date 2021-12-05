const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// to access public dir such as css
app.use(express.static("public"));

app.get("/", (req, res) => {
	res.render("index.ejs", { title: "Home" });
});

app.get("/about", (req, res) => {
	res.render("about.ejs");
});

app.get("/blogs/create", (req, res) => {
	res.render("create.ejs");
});

//404 page
app.use((req, res) => {
	res.status(404).render("404.ejs");
});

app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
});
