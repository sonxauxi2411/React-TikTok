import React, { useState, useEffect, useRef } from 'react'
import HeadlessTippy from '@tippyjs/react/headless'
import { Wrapper as PopperWrapper } from '~/Component/Propper'
import AccountItem from '~/Component/SearchAccountItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { useDebounce } from '~/Component/Hook'
import style from './Search.module.scss'
import * as resquest from '~/utils/request'
import { searchApi } from '~/Component/apiServices/searchServices'

const Search = () => {
  const [searchResult, setSearchResult] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [showResult, setShowResult] = useState(true)
  const [loading, setLoading] = useState(false)

  const inputSearchRef = useRef()

  const debounce = useDebounce(searchValue, 500)

  useEffect(() => {
    //nếu rỗng thì return
    if (!searchValue.trim()) {
      setSearchResult([])
      return
    }
    const fetchApi = async () => {
      setLoading(true)
      const result = await searchApi(debounce)
      setSearchResult(result)

      setLoading(false)
    }

    fetchApi()
  }, [debounce])

  const handlerHideResult = () => {
    setShowResult(false)
  }
  const handlerChange = (e) => {
    const searchValue = e.target.value
    if (!searchValue.startsWith(' ') || searchValue.trim()) {
      setSearchValue(searchValue)
    }
  }
  const handlerSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div>
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
              {searchResult.map((user) => {
                return <AccountItem data={user} key={user.id} />
              })}
            </PopperWrapper>
          </div>
        )}
      >
        <div className={style.search}>
          <input
            ref={inputSearchRef}
            value={searchValue}
            placeholder="Tìm kiếm tài khoản và video"
            spellCheck={false}
            onChange={handlerChange}
            onFocus={() => setShowResult(true)}
          />
          {!!searchValue && !loading && (
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
          )}
          {loading && (
            <button className={style.search_loading}>
              <FontAwesomeIcon icon={faSpinner} />
            </button>
          )}

          <button
            className={style.search_btn}
            onClick={handlerSubmit}
            onMouseDown={(e) => e.preventDefault()}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  )
}

export default Search
