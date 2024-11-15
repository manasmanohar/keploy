import Image, { ImageProps as NextImageProps } from 'next/image'

interface ImageProps extends Omit<NextImageProps, 'src' | 'alt'> {
  src: string
  alt: string
}

export function OptimizedImage({ src, alt, ...props }: ImageProps) {
  return (
    <div className="relative overflow-hidden">
      <Image
        src={src}
        alt={alt}
        loading="lazy"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,..."
        {...props}
      />
    </div>
  )
}
