const express = require('express')
const path = require('path')
const port = process.env.PORT || 8000

const app = express()

// Setup static folder
// app.use(express.(path.join(__dirname, 'public')))

let posts = [
  { id: 1, title: 'Post one'},
  { id: 2, title: 'Post two'},
  { id: 3, title: 'Post three'}
]
// get all posts
app.get('/api/posts', (req, res) => {
  const limit = parseInt(req.query.limit)

  if (!isNaN(limit) && limit > 0) {
    res.json(posts.slice(0, limit))
  } else {
    res.json(posts)
  }
})
// Get a single post
app.get('/api/posts/:id', (req, res) => {
  const id = parseInt(req.params.id)
  res.json(posts.filter((post) => post.id === id)) // if its id is equal to id past in then respond w/ that
})

app.listen(8000, () => console.log(`Server is running on port ${port}`))
