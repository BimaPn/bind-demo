import { PostMediaProps } from '@/types/post'
import Image from 'next/image'
import VideoPlayer from '../ui/VideoPlayer'

const PostMedia = ({media, playInView=false}:{media : string[], playInView?: boolean}) => {
  return (
    <>
    {media.length == 1 && (
    <div className="ss:rounded-xl overflow-hidden">
       <ShowMedia 
       playInView={playInView}
       src={media[0]}
       /> 
    </div>
    )}
    {media.length == 3 && (
        <div className="aspect-square grid grid-rows-2 grid-cols-2 gap-2" >
            {media.map((item,index) => (
                <div key={index} className={`relative h-full ss:rounded-xl overflow-hidden ${index == 0 && 'row-span-2'}`}>
                    <Image 
                    src={item} 
                    alt={"image"}
                    fill
                    className='w-full h-auto'
                    style={{objectFit:"cover"}}
                    />
                </div>
            ))}
        </div>
        )}
    {media.length == 2 && (
        <div className="aspect-square grid grid-rows-1 grid-cols-2 gap-2" >
            {media.map((item,index) => (
                <div key={index} className={`relative h-full ss:rounded-xl overflow-hidden`}>
                    <Image 
                    src={item} 
                    alt={"image"}
                    fill
                    className='w-full h-auto'
                    style={{objectFit:"cover"}}
                    />
                </div>
            ))}
        </div>
        )}
    {media.length == 4 && (
        <div className="aspect-square grid grid-rows-2 grid-cols-2 gap-2" >
            {media.map((item,index) => (
                <div key={index} className={`relative h-full ss:rounded-xl overflow-hidden`}>
                    <Image 
                    src={item} 
                    alt={"image"}
                    fill
                    className='w-full h-auto'
                    style={{objectFit:"cover"}}
                    />
                </div>
            ))}
        </div>
        )}
        
    </>

  )
}

const ShowMedia = ({src, playInView}:{src: string, playInView: boolean}) => {
  const isImage = /\.(jpg|jpeg|png|gif)$/.test(src);
  const isVideo = /\.(mp4|mov|avi)$/.test(src)
  return (
    <>
    {(isImage || src.includes('blob')) && (
      <Image src={src}
      width={700} height={700}
      className="w-full h-auto"
      alt="post picture"
      />
    )}
    {isVideo && (
      <VideoPlayer playInView={playInView} src={src} /> 
    )}
    </>
  )
}

export default PostMedia
