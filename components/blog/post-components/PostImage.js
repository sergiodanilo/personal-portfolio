import Image from 'next/image';

const PostImage = ({ src, alt, caption }) => {

  return (
    <figure className="figure mb-5">
        <Image
          src={src}
          alt={alt}
          className="img-fluid figure-img"
          width={400}
          height={150}
        />
        <figcaption className="figure-caption text-center">
          {caption}
        </figcaption>
    </figure>
  )
}

export default PostImage;