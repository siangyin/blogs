const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// to access public dir such as css
app.use(express.static("public"));

const blogs = [
	{
		title: "Yoshi finds eggs",
		snippet: "Lorem ipsum dolor sit amet consectetur",
	},
	{
		title: "Mario finds stars",
		snippet: "Lorem ipsum dolor sit amet consectetur",
	},
	{
		title: "How to defeat bowser",
		snippet: "Lorem ipsum dolor sit amet consectetur",
	},
];

app.get("/", (req, res) => {
	res.render("index.ejs", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
	res.render("about.ejs", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
	res.render("create.ejs", { title: "Create a new blog" });
});

//404 page
app.use((req, res) => {
	res.status(404).render("404.ejs", { title: "404" });
});

app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
});
