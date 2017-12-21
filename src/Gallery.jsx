import React, { Component } from "react";
import "./App.css";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = { playingUrl: "", audio: null, playing: false };
  }
  playaudio(url) {
    let audio = new Audio(url);
    // 沒有在播放
    if (!this.state.playing) {
      audio.play();
      this.setState({ playing: true, playingUrl: url, audio });
    } else {
      // 有在播放
      if (this.state.playingUrl === url) {
        this.state.audio.pause();
        this.setState({ playing: false });
      } else {
        this.state.audio.pause();
        audio.play();
        this.setState({ playing: true, playingurl: url, audio });
      }
    }
  }

  render() {
    const { tracks } = this.props;
    return (
      <div className="gallery">
        {tracks.map((t, k) => {
          const trackImg = t.album.images[0].url;
          return (
            <div
              key={k}
              className="track"
              onClick={() => {
                this.playaudio(t.preview_url);
              }}
            >
              <img src={trackImg} className="track-img" alt="track" />
              <div className="track-play">
                <div className="track-play-inner">
                  {this.state.playingurl === t.preview_url ? (
                    <span>| |</span>
                  ) : (
                    <span>&#9654;</span>
                  )}
                </div>
              </div>
              <a href={t.external_urls.spotify} target="_blank">
                <p className="track-text">{t.name}</p>
              </a>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Gallery;
