import express from 'express'
import path from 'path'
import posts from './routes/posts.js'
const port = process.env.PORT || 8000

const app = express()

// body parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Setup static folder
// app.use(express.(path.join(__dirname, 'public')))

// Routes
app.use('/api/posts', posts)



app.listen(8000, () => console.log(`Server is running on port ${port}`))
