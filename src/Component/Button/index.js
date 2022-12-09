import { Link } from 'react-router-dom'
import style from './Button.module.scss'

const Button = ({
  children,
  to,
  href,
  onClick,
  primary,
  outline,
  small,
  large,
  text,
  disabled,
  getApp,
}) => {
  let Comp = 'button'
  const props = { onClick }
  if (to) {
    props.to = to
    Comp = Link
  } else if (href) {
    props.href = href
    Comp = 'a'
  }
  //remove disabled
  if (disabled) {
    //lập qua object props tìm key có on đầu tiền va function
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        //xóa key tìm thấy
        delete props[key]
      }
    })
  }
  return (
    <Comp
      className={`${style.wrapper} ${primary ? style.primary : ''} ${
        outline ? style.outline : ''
      } ${small ? style.small : ''}  ${large ? style.large : ''} ${
        text ? style.text : ''
      } ${getApp ? style.getApp : ''}`}
      {...props}
    >
      <span>{children}</span>
    </Comp>
  )
}

export default Button
