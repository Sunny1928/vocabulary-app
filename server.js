//import
const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 5001
var path = require('path')

//static files
// app.use(express.urlencoded({ extended: true }))
// app.use(express.json())
app.use(express.static('public'))
app.use('/css', express.static(path.join(__dirname, 'public')))
app.use('/js',express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

// set Templete Engine
app.use(expressLayouts)
app.set('layout', './layouts/full-width')
app.set('view engine', 'ejs')

// navigation
app.get('', (req, res)=>{
    res.render('i', {title: 'Home Page'})
})

const unitRouter = require('./routes/unit')
app.use('/unitvoc', unitRouter)

const testRouter = require('./routes/test')
app.use('/weeklytest', testRouter)

app.get('/fav', (req, res)=>{
    res.render('fav', {title: 'Hard Words'})
})
app.get('/login', (req, res)=>{
    res.render('login', {title: 'Login'})
})

app.listen(port, ()=>{console.info(`app listening on port ${port}`)})