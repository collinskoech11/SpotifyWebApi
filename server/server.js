const express = require('express'); 
const spotifyWebApi = require('spotify-web-api');

const app = express();

app.post('/login', (req, res) => {
    const code = req.body.code;
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId:'b7d4c717a999468487cc8a213f69c46a',
        clientSecret: '11c3a850d1ed4dfaad77b103bd7f206f'
    })

    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    })
    .catch(() => {
        res.sendStatus(400)
    })
})