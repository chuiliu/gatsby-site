import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div
    style={{
      // background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0, fontWeight: 'normal' }}>
        <Link
          to="/"
          style={{
            color: 'rebeccapurple',
            textDecoration: 'none',
          }}
        >
          Arr
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
