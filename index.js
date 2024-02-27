console.log('hello')
require('dotenv').config()


const express = require('express')
const app = express()
const port = 3000

const githubData={
    "login": "SamiranDas2004",
    "id": 145705457,
    "node_id": "U_kgDOCK9J8Q",
    "avatar_url": "https://avatars.githubusercontent.com/u/145705457?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/SamiranDas2004",
    "html_url": "https://github.com/SamiranDas2004",
    "followers_url": "https://api.github.com/users/SamiranDas2004/followers",
    "following_url": "https://api.github.com/users/SamiranDas2004/following{/other_user}",
    "gists_url": "https://api.github.com/users/SamiranDas2004/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/SamiranDas2004/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/SamiranDas2004/subscriptions",
    "organizations_url": "https://api.github.com/users/SamiranDas2004/orgs",
    "repos_url": "https://api.github.com/users/SamiranDas2004/repos",
    "events_url": "https://api.github.com/users/SamiranDas2004/events{/privacy}",
    "received_events_url": "https://api.github.com/users/SamiranDas2004/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Samiran_Das",
    "company": null,
    "blog": "",
    "location": "India",
    "email": null,
    "hireable": null,
    "bio": "👨‍💻I'm  Samiran | Passionate about Development & Coding | 🖥️ Crafting the future through code | 🌱 Lifelong Learner🚀",
    "twitter_username": "SamiranDas2004",
    "public_repos": 19,
    "public_gists": 0,
    "followers": 2,
    "following": 2,
    "created_at": "2023-09-21T17:25:55Z",
    "updated_at": "2023-11-16T05:44:43Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/love',(req,res)=>{
    res.send('i love you')
})

app.get('/login',(req,res)=>{
    res.send('<h1>please login </h1>')
})

app.get('/github',(req,res)=>{
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})