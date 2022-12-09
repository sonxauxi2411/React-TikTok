import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Image from '../Image/index'

import style from './SearchAccountItem.module.scss'
function AccountItem() {
  return (
    <div className={style.wrapper}>
      <Image
        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1663032433476609.jpeg?x-expires=1670565600&x-signature=lZiYwohf%2BrVVITybxFOtIgA%2B3js%3D"
        alt="name"
        className={style.avatar}
      />
      <div className={style.info}>
        <h4 className={style.name}>
          <span>nguyen van a</span>
          <FontAwesomeIcon icon={faCheckCircle} className={style.check} />
        </h4>
        <p className={style.username}> nguyenvana</p>
      </div>
    </div>
  )
}

export default AccountItem
