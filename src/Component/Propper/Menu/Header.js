import style from './Menu.module.scss'
import { GrPrevious } from 'react-icons/gr'

const HeaderMenu = ({ title, onBack }) => {
  return (
    <header className={style.header__menu} onClick={onBack}>
      <button className={style.header_back}>
        <GrPrevious />
      </button>
      <h4 className={style.header_title}>{title}</h4>
    </header>
  )
}

export default HeaderMenu
