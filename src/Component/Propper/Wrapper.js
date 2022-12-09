import React from 'react'
import style from './Propper.module.scss'

function Wrapper({ children }) {
  return <div className={style.wapper}>{children}</div>
}

export default Wrapper
