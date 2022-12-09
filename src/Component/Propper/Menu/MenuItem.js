import React from 'react'
import { Link } from 'react-router-dom'
import style from './Menu.module.scss'

function MenuItem({ data, onClick, to, separate }) {
  let Component = 'div'
  if (to) {
    Component = Link
  }
  return (
    <Component
      to={to}
      className={`${style.menu__item} ${separate ? style.separate : ''}`}
      onClick={onClick}
    >
      <span className={style.menu_icon}>{data.icon}</span>
      <span className={style.menu_title}>{data.title}</span>
    </Component>
  )
}

export default MenuItem
