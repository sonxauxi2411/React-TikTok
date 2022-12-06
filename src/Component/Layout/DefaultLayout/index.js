import Header from '../Components/Header'
import Sidebar from './Sidebar'
import style from './DefaultLayout.module.scss'
import React from 'react'

function DefaultLayout({ children }) {
  return (
    <div className={style.wrapper}>
      <Header />
      <div className={style.container}>
        <Sidebar />
        <div className={style.content}>{children}</div>
      </div>
    </div>
  )
}

export default DefaultLayout
