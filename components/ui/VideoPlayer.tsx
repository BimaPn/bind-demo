"use client"
import { useRef } from "react"
import { useVideoAutoPlayback } from "../hooks/VideoAutoPlayback"

const VideoPlayer = ({src, playInView}:{src: string, playInView: boolean}) => {
  const [containerRef, videoRef] = useVideoAutoPlayback({
    root: null,
    rootMargin: '0px',
    threshold: 1,
  })
  return (
    <>
      {playInView ? (
      <VideoInView src={src} />
      ): (
        <video controls autoPlay loop playsInline>
          <source src={src} type="video/mp4" />
        </video>
      )}
    </>
  )
}

const VideoInView = ({src}:{src: string}) => {
  const [containerRef, videoRef] = useVideoAutoPlayback({
    root: null,
    rootMargin: '0px',
    threshold: 1,
  })
  return (
    <section ref={containerRef}>
      <video controls ref={videoRef} loop autoPlay muted playsInline>
        <source src={src} type="video/mp4" />
      </video>
    </section>
  )
}

export default VideoPlayer
