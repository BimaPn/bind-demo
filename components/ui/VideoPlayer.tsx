"use client"
import { useVideoAutoPlayback } from "../hooks/VideoAutoPlayback"

const VideoPlayer = ({src, playInView}:{src: string, playInView?: boolean}) => {
  return playInView ? (
    <PlayInView src={src} />
  ) : (
    <video controls autoPlay loop muted playsInline>
      <source src={src} type="video/mp4" />
    </video>
  )
}

const PlayInView = ({src}: {src: string}) => {
  const [containerRef, videoRef] = useVideoAutoPlayback({
    root: null,
    rootMargin: '0px',
    threshold: .8,
  })
  return (
    <section ref={containerRef}>
      <video controls ref={videoRef} autoPlay muted loop playsInline>
        <source src={src} type="video/mp4" />
      </video>
    </section>
  )
}

export default VideoPlayer
