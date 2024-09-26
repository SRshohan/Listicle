const express = require('express')
const path = require('path')
const companies = require('./data')


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for serving static files
app.use(express.static(path.join(__dirname, 'public')));

// Route for displaying all the companies
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.get('/company/:id', (req, res) => {
    const company = companies.find(c => c.id === parseInt(req.params.id));
    res.json(company)
})

// Middleware for handling 404 errors
app.use((req, res) => {
    res.status(404).render('404');
  });

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
