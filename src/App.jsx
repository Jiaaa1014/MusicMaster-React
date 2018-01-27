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
      "BQB_U4HJiFvGoeLU4hUVe0i9BN20WgFRyzoFIMzo5fJTJJvjELz3UWzxxpxEeaYefV3tK_YeyJg0gqO5yl_KFDYaZNHbaIZz-ec5qbRb5eR8TVNWhtCa_azEtbDI--tVzRsFVHz8FIMG_V_r3ReXZd5MU-aPWHgPTnI&refresh_token=AQD4jZRBa6_WcWNRtchxQRLNvjLLCRVGukMavw9eDdVzLfc6BI1RNf_WmIQHdyN5nBOb7Wq2o1qLVfeOYmnanaKsQoYT-UCgnsCgJ8K0ajsc0jC5WBYnwn6nNlTJhEy_eqs";

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
