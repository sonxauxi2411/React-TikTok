import React from 'react'
import style from './Header.module.scss'
import { BsPerson } from 'react-icons/bs'
import { CiBitcoin } from 'react-icons/ci'
import { FiSettings, FiLogOut } from 'react-icons/fi'
import 'tippy.js/dist/tippy.css'
import logo from '~/assets/images/logo.svg'
import Tippy from '@tippyjs/react'
import Button from '~/Component/Button'
import {
  BsUpload,
  BsThreeDotsVertical,
  BsGlobe2,
  BsQuestionCircle,
  BsFilterCircle,
} from 'react-icons/bs'
import Menu from '~/Component/Propper/Menu'
import { MailIcon, MessageIcon } from '~/Component/Icon'
import Image from '~/Component/Image'
import Search from './Search'

const MENU_ITEMS = [
  {
    icon: <BsGlobe2 />,
    title: 'Tiếng Việt',
    children: {
      title: 'Ngôn Ngữ',
      data: [
        { code: 'en', title: 'English' },
        { code: 'vi', title: 'Việt Nam' },
      ],
    },
  },
  {
    icon: <BsQuestionCircle />,
    title: 'Phản hồi và trợ giúp',
    to: '/feedback',
  },
  {
    icon: <BsFilterCircle />,
    title: 'Phím tắt trên bàn phím',
  },
]
const USER_MENU = [
  {
    icon: <BsPerson />,
    title: 'Xem Hồ sơ',
    to: '/feedback',
  },
  {
    icon: <CiBitcoin />,
    title: 'Nhận xu',
    to: '/feedback',
  },
  {
    icon: <FiSettings />,
    title: 'Cài đặt',
    to: '/feedback',
  },
  {
    icon: <FiLogOut />,
    title: 'Logout',
    to: '/feedback',
    separate: true,
  },
]

function Header() {
  const currentUser = true

  return (
    <header className={style.wrapper}>
      <div className={style.inner}>
        {/* logo header */}
        <div className={style.logo}>
          <img src={logo} alt="tiktok" />
        </div>

        {/* search */}
        <Search />

        {/* Action */}
        <div className={style.action}>
          {currentUser ? (
            <React.Fragment>
              <Button text>
                <BsUpload /> Upload
              </Button>
              <Tippy content="Tin nhắn" placement="bottom">
                <button className={style.action__btn}>
                  <MessageIcon />
                </button>
              </Tippy>

              <Tippy content="Hộp thư" placement="bottom">
                <button className={style.action__btn}>
                  <MailIcon />
                </button>
              </Tippy>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Button text>
                <BsUpload /> Upload
              </Button>
              <Button primary>Login</Button>
            </React.Fragment>
          )}

          <Menu item={currentUser ? USER_MENU : MENU_ITEMS}>
            {currentUser ? (
              <Image
                className={style.user__avatar}
                src={`https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1663032433476609.jpeg?x-expires=1670565600&x-signature=lZiYwohf%2BrVVITybxFOtIgA%2B3js%3D`}
                alt="avatar"
              />
            ) : (
              <button className={style.more_btn}>
                <BsThreeDotsVertical />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  )
}

export default Header
