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
    res.status(200).json(posts.slice(0, limit))
  } else {
    res.status(200).json(posts)
  }
})
// Get a single post
app.get('/api/posts/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const post = posts.find((post) => post.id === id)
  if (!post) {
    res.status(404).json({ msg: `A post with the id of ${id} was not found` })
  } else {
    res.status(200).json(post)
  }
})

app.listen(8000, () => console.log(`Server is running on port ${port}`))
