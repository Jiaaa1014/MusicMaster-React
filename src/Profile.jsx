import React, { Component } from "react";

import "./App.css";

class Profile extends Component {
  render() {
    let { artist } = this.props;
    artist = this.props.artist !== null ? this.props.artist : artist;
    return (
      <div className="profile">
        <a
          target="_blank"
          href={"https://open.spotify.com/artist/" + artist.id}
        >
          <img
            className="profile-img"
            alt="Profile"
            src={artist.images[0].url}
          />
        </a>
        <div className="profile-info">
          <div className="profile-name">{artist.name}</div>
          <div className="profile-followers">
            {artist.followers.total} Followers
          </div>
          <div className="profile-genres">
            {artist.genres.map((g, k) => {
              g =
                g !== artist.genres[artist.genres.length - 1]
                  ? `${g},`
                  : `& ${g}`;
              return <span key={k}>{g}</span>;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
