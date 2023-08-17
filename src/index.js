const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");


const staticPath = path.join(__dirname,"../public");
const templatePath = path.join(__dirname,"../templates/views");
const partialsPath = path.join(__dirname,"../templates/partials");

// to set the view engine
app.set("view engine","hbs");
app.set("views",templatePath); // set views path to templates directory
hbs.registerPartials(partialsPath);

// template engine route
app.get("/", (req, res) => {
    res.render("index.hbs",{
        name : "Yash pal",
    });
});

// built-in middleware
app.use(express.static(staticPath));

app.get("/about", (req, res) => {
    res.render("about");
});

//error routes
app.get("/about/*", (req, res) => {
    res.render("404",{
        errorComment : "404 ,The requested page does not exist",
    });
});

app.get("*", (req, res) => {
    res.render("404",{
        errorComment : "The requested page does not exist",
    });
});

// app.get("/contact", (req, res) => {
//     res.send(" contact page");
// });

app.listen(3000, () => {
    console.log("listening on port 3000");
});