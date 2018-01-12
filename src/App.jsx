import React, { Component } from "react";
import "./App.css";
import { FormGroup, FormControl, InputGroup, Glyphicon } from "react-bootstrap";
import Profile from "./Profile";
import Gallery from "./Gallery";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      artist: null,
      tracks: []
    };
  }

  search() {
    const BASE_URL = "https://api.spotify.com/v1/search?";
    let FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;
    const ALBUM_URL = "https://api.spotify.com/v1/artists/";
    var accessToken =
      "BQBBGnL1dkGQERq_IYpT1WqC2_AGHbh5e0hVpToMrmjhm42Kr5MwPws7_-apnrpKiO00yPTZlIU1pefvx_7c6ZRc5UO_mU4U8xiWtfz0qfTVe2MpRremHgCe6WOh-IgK40ul_4VFe32Y3O1t3gT6imMvYFaiX_U46RY&refresh_token=AQAyPvdBwVDiJRL3O5rO-d2wG6j7B3wwBvRbBBMTNLKn8SUGQ2WoUX4KhgGFVf2hvWKMntnEKltD54gqY5czDamxBk-vE0R-u_7g-orI_y5V2ryFFEo1WVG0LpKNL-G5iB8";

    var myOptions = {
      method: "GET",
      headers: {
        Authorization: "Bearer " + accessToken
      },
      mode: "cors",
      cache: "default"
    };

    fetch(FETCH_URL, myOptions)
      .then(response => response.json())
      .then(json => {
        const artist = json.artists.items[0];
        this.setState({ artist });

        FETCH_URL = `${ALBUM_URL}${artist.id}/top-tracks?country=TW&`;
        fetch(FETCH_URL, myOptions)
          .then(res => res.json())
          .then(json => {
            const { tracks } = json;
            // const tracks = json.tracks;
            this.setState({ tracks });
          });
      });
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">Spotify Music Search API</div>
        <FormGroup>
          <InputGroup className="i">
            <FormControl
              className="input"
              type="text"
              placeholder="searching for an artist"
              value={this.state.query}
              onChange={e => {
                this.setState({ query: e.target.value });
              }}
              onKeyPress={e => {
                if (e.key === "Enter") this.search();
              }}
            />
            <InputGroup.Addon
              className="input-addon"
              onClick={() => this.search()}
            >
              <Glyphicon glyph="search" />
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        {this.state.artist !== null ? (
          <div>
            <Profile artist={this.state.artist} />
            <Gallery tracks={this.state.tracks} />
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}
export default App;
