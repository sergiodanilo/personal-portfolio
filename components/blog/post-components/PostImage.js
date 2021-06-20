import Image from 'next/image';

const PostImage = ({ src, alt, caption, w, h }) => {

  return (
    <div>
      <Image
        src={src}
        alt={alt}
        className="img-fluid figure-img"
        layout="responsive"
        width={w}
        height={h}
      />
      <figcaption className="figure-caption text-center">
        {caption}
      </figcaption>
    </div>
  )
}

export default PostImage;