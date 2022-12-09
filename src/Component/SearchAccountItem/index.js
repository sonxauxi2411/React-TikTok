import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../Image/index'

import style from './SearchAccountItem.module.scss'
function AccountItem({ data }) {
  return (
    <Link to={`/@${data.nickname}`} className={style.wrapper}>
      <Image src={data.avatar} alt={data.nickname} className={style.avatar} />
      <div className={style.info}>
        <h4 className={style.name}>
          <span>{data.full_name}</span>
          {data.tick && (
            <FontAwesomeIcon icon={faCheckCircle} className={style.check} />
          )}
        </h4>
        <p className={style.username}> {data.nickname}</p>
      </div>
    </Link>
  )
}

export default AccountItem
