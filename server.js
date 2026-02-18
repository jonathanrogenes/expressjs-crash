const express = require('express')
const path = require('path')
const port = process.env.PORT || 8000
const posts = require('./routes/posts')

const app = express()

// Setup static folder
// app.use(express.(path.join(__dirname, 'public')))

// Routes
app.use('/api/posts', posts)



app.listen(8000, () => console.log(`Server is running on port ${port}`))
