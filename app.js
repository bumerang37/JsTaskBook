// index.js
const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
const hbs = require("hbs");
const app = express()
app.engine('.hbs', exphbs({
    defaultLayout: 'home',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'views/layouts')
}))
app.use(express.static(path.join(__dirname, 'public')));
hbs.registerPartials(__dirname + "/views/partials");
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))

app.listen(3000)

app.get('/', (request, response) => {
    // response.render('content', {
    //     name: 'Bumerang37'
    // })
    response.render("home/content",{
     title: 'Home'
    });
})

app.use("/contact", function(request, response){
      
    response.render("contact", {
        title: "Мои контакты",
        emailsVisible: true,
        emails: ["gavgav@mycorp.com", "mioaw@mycorp.com"],
        phone: "+1234567890"
    });
}); 