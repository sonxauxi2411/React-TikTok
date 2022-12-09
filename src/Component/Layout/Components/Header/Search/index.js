import React, { useState, useEffect, useRef } from 'react'
import HeadlessTippy from '@tippyjs/react/headless'
import { Wrapper as PopperWrapper } from '~/Component/Propper'
import AccountItem from '~/Component/SearchAccountItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import style from './Search.module.scss'

const Search = () => {
  const [searchResult, setSearchResult] = useState('')
  const [searchValue, setSearchValue] = useState([])
  const [showResult, setShowResult] = useState(true)
  const inputSearchRef = useRef()

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([123])
    }, 0)
  }, [])
  const handlerHideResult = () => {
    setShowResult(false)
  }
  return (
    <HeadlessTippy
      //đk hiện
      visible={showResult && searchResult.length > 0}
      //honver
      interactive={true}
      onClickOutside={handlerHideResult}
      //render
      render={(attrs) => (
        <div className={style.search_result} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h4 className={style.search_title}>Account</h4>
            <AccountItem />
          </PopperWrapper>
        </div>
      )}
    >
      <div className={style.search}>
        <input
          ref={inputSearchRef}
          value={searchValue}
          placeholder="search acctouts videos"
          spellCheck={false}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setShowResult(true)}
        />
        {!!searchValue && (
          <>
            <button
              className={style.search_close}
              onClick={() => {
                setSearchValue('')
                setSearchResult('')
                inputSearchRef.current.focus()
              }}
            >
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            {/* <button className={style.search_loading}>
              <FontAwesomeIcon icon={faSpinner} />
            </button> */}
          </>
        )}

        <button className={style.search_btn}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </HeadlessTippy>
  )
}

export default Search
