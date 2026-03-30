import { forwardRef, useImperativeHandle, useRef, useState } from "react";

const MusicPlayer = forwardRef(function MusicPlayer(_, ref) {
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(false);

  useImperativeHandle(ref, () => ({
    startMusic() {
      const audio = audioRef.current;
      if (!audio) return;

      audio.volume = 0.35;
      audio.muted = false;
      audio.play().catch(() => {});
    }
  }));

  const toggleMute = () => {
    const audio = audioRef.current;
    audio.muted = !audio.muted;
    setMuted(audio.muted);
  };

  return (
    <div className="music-player">
      <audio ref={audioRef} src="/music.mp3" loop />
      <button onClick={toggleMute}>
        {muted ? "Play music" : "Mute music"}
      </button>
    </div>
  );
});

export default MusicPlayer;
