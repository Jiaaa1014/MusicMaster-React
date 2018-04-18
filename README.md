# Notes
## Template
![](https://github.com/Jiaaa1014/MusicMaster-React/blob/master/public/musicMaster.gif)

## 前置作業
go to the another directory
```shell
$ cd MusicMaster-React\web-api-auth-examples-master\authorization_code
$ node app.js
```
1. 登入Spotify
2. 從url地方拿到完整的access_token
3. 到`src/App.jsx`，複製給予等等要用的變數
```js
 var accessToken = {{fresh token here}}
```
4. 然後
```shell
$ npm start
```

## Reference
* [Get an Artist's Top Tracks](https://developer.spotify.com/web-api/console/get-artist-top-tracks/?country=SE&id=43ZHCT0cAZBISjO8DG9PnE#complete)

## Problems Solved
* [Why Token Expired](https://stackoverflow.com/questions/7030694/why-do-access-tokens-expire)
* [Data Map is not a Function](https://stackoverflow.com/questions/30803168/data-map-is-not-a-function)
* [Some preview_urls do not exist. So dont worry.](https://github.com/spotify/web-api/issues/564)

## Token
* [OAuth 2.0 筆記](https://blog.yorkxin.org/2013/09/30/oauth2-1-introduction)
* [Refresh Tokens: When to Use Them and How They Interact with JWTs](https://auth0.com/blog/refresh-tokens-what-are-they-and-when-to-use-them/)
* [Why Does OAuth v2 Have Both Access and Refresh Tokens?](https://stackoverflow.com/questions/3487991/why-does-oauth-v2-have-both-access-and-refresh-tokens)
* [How to get access token](https://www.youtube.com/watch?v=m3YpkqhHKdk&t=1s)
](https://stackoverflow.com/questions/3487991/why-does-oauth-v2-have-both-access-and-refresh-tokens)
## Request & Response
```
GET /v1/artists/43ZHCT0cAZBISjO8DG9PnE/top-tracks?country=TW HTTP/1.1
Host: api.spotify.com
Accept: application/json
Content-Type: application/json
Accept-Encoding: gzip, deflate, compress
Authorization: Bearer BQAz0dWQ4uEGTvzDwHFsqHuo5482JrBoq2lHOsCBYqLpT33iOz7NjujrpdLw9TJzArZWQeVqQl9HEVaWDotz-B3hL17hpngl6vIbK5NpRm7c9iRGPyUp0sr_pXodZW-np9HA9cna4xwWTeANtm7tY3FbfH9kxs7nJaI&refresh_token=AQAspe1TbdA4fBvg3WtBt-cquWvM4MuUJORTBxKe-3ReCrjs9WEraptGuHCvztz2cvNO4gCfUfmwUkdbRc-puaEggeQ672NFbVgo4XCJZFBqSnlNFVcT5ORTjKq4RhEo0xc
User-Agent: Spotify API Console v0.1
```
```
HTTP/1.1 401 Unauthorized
Access-Control-Allow-Headers: Accept, Authorization, Origin, Content-Type
Access-Control-Max-Age: 604800
Transfer-Encoding: chunked
Content-Encoding: gzip
Keep-Alive: timeout=600
Server: nginx
Connection: keep-alive
Access-Control-Allow-Credentials: true
Date: Wed, 20 Dec 2017 04:26:54 GMT
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE
Content-Type: application/json
Www-Authenticate: Bearer realm="spotify", error="invalid_token", error_description="The access token expired"
```
## GitHubs
* [Spotify/web-api-auth-examples](https://github.com/spotify/web-api-auth-examples)
> Using it to refresh my own token
* [Spotify Example](https://github.com/angularcity/spotifyexample/tree/master/src)
