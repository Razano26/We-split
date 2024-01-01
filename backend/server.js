const crypto = require('crypto');
const express = require('express')
const cookieParser = require('cookie-parser');
const app = express()

app.use(express.json());
app.use(cookieParser());
const port = process.env.PORT || 8080;
let session = {};
const credentials = {
    username: 'admin',
    password: 'admin'
}
app.get('/', (req ,res) => {
    const sessionId = req.cookies.sessionId
    if (sessionId && session[sessionId]){
        return res.status(200).json({ username: session[sessionId].username})
    } else {
        return res.status(401).json({message: 'Not Log'})
    }
})

app.get('/login', (req,res) => {

    const {username, password} = req.query
    const user = req.cookies.sessionId

    if (user && session[user])
        return res.status(200).json({message: 'Already connect'})

    if(username === credentials.username && password === credentials.password){
        const sessionId = crypto.randomUUID()
        session[sessionId] = { username }
        res.cookie('sessionId' , sessionId, {httpOnly: true});
        return res.status(200).json({message: 'Login successful'})
    } else {
        return res.status(401).json({message: 'Invalid credentials'})
    }
})

app.get('/logout', (req,res) => {
    const user = req.cookies.sessionId
    if (user && session[user]){
        delete session[user]
        res.clearCookie('sessionId');
        return res.status(200).json({message: 'Logout successful'})
    } else {
        return res.status(401) .json({message: 'Error user not log'})
    }

})

app.get('/session', (req,res) => {
    return res.status(200).json(session)
})

app.listen(port, () => {
    console.log(`Server listening on ${port}`)
})