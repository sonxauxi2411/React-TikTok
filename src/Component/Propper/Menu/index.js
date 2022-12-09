import Tippy from '@tippyjs/react/headless'
import style from './Menu.module.scss'
import { Wrapper as PopperWrapper } from '~/Component/Propper'
import MenuItem from './MenuItem'
import HeaderMenu from './Header'
import { useState } from 'react'

const Menu = ({ children, item }) => {
  const [history, setHistory] = useState([{ data: item }])
  const current = history[history.length - 1]

  const renderItem = () => {
    return current?.data.map((item, index) => {
      //kiểm tra iscurrent có children hay ko
      const isCurrent = !!item.children
      //truyền cấp menu
      const handlerNextMenu = (children) => {
        if (isCurrent) {
          setHistory((prev) => [...prev, children])
        }
      }

      return (
        <MenuItem
          separate={item.separate}
          to={item.to}
          key={index}
          data={item}
          onClick={() => handlerNextMenu(item.children)}
        />
      )
    })
  }
  //handler prev menu
  const handlerPrevMenu = () => {
    setHistory((prev) => prev.slice(0, prev.length - 1))
  }
  return (
    <Tippy
      delay={[0, 600]}
      //honver
      interactive={true}
      //chỉnh vị trí
      placement="bottom-end"
      //render
      render={(attrs) => (
        <div className={style.content} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            {history.length > 1 && (
              <HeaderMenu title="Ngôn Ngữ" onBack={handlerPrevMenu} />
            )}
            {renderItem()}
          </PopperWrapper>
        </div>
      )}
      //rest menu xóa đi tất cả chỉ để lại 1
      onHide={() => setHistory((prev) => prev.slice(0, 1))}
    >
      {children}
    </Tippy>
  )
}

export default Menu
