import Header from '../Components/Header'

import React from 'react'

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />

      <div className="content">{children}</div>
    </div>
  )
}

export default DefaultLayout
