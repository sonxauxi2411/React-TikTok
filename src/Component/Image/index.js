import { forwardRef, useState } from 'react'
import images from '~/assets/images'
import style from './img.module.scss'
const Image = ({ src, alt, className, ...props }, ref) => {
  const [fallback, setFallback] = useState('')

  const handlerError = () => {
    setFallback(images.noIamge)
  }
  return (
    <img
      className={`${className} ${style.wrapper}`}
      src={fallback || src}
      alt={alt}
      ref={ref}
      {...props}
      onError={handlerError}
    />
  )
}

export default forwardRef(Image)
