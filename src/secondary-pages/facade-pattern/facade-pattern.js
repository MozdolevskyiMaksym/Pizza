import React, { Component } from 'react';
import './facade-pattern.scss';

class AudioPlayer {
  play(src) {
    const audio = new Audio(src);
    audio.play();
  }
}

class VideoPlayer {
  play(src) {
    const video = document.createElement('video');
    video.src = src;
    video.play();
  }
}

class MediaPlayerFacade {
  constructor() {
    this.audioPlayer = new AudioPlayer();
    this.videoPlayer = new VideoPlayer();
  }

  play(audioSrc, videoSrc) {
    this.audioPlayer.play(audioSrc);
    this.videoPlayer.play(videoSrc);
  }
}

class FacadePattern extends Component {
  render() {
    const mediaFacade = new MediaPlayerFacade();
    mediaFacade.play(
      '/audio.mp3',
      'http://techslides.com/demos/sample-videos/small.mp4'
    );

    return (
      <div className="facade">
        <h2>Media Player</h2>
        <p>Playing audio and video using Facade pattern</p>
        <video
          src="http://techslides.com/demos/sample-videos/small.mp4"
          controls
        />
      </div>
    );
  }
}

export default FacadePattern;

// Здесь AudioPlayer и VideoPlayer являются подсистемами, выполняющими конкретную работу - проигрывание аудио и видео соответственно.
// MediaPlayerFacade - это фасад, который предоставляет простой интерфейс для проигрывания аудио и видео с помощью обеих подсистем.
// Компонент Facade использует фасад, чтобы воспроизвести аудио и видео, и отображает заголовок и текст.
