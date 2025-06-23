import React from 'react'
import Logo from '../assets/image.png'

function Navbar() {
  return (
    <nav
      className="navbar"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '18px 40px',
        background: 'linear-gradient(90deg, #ffecd2 0%, #fcb69f 100%)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        borderRadius: '0 0 24px 24px',
        marginBottom: '32px',
      }}
    >
      <img
        src={Logo}
        alt="chefClaudeLogo"
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
          border: '3px solid #fff',
          background: '#fff',
          objectFit: 'cover',
        }}
      />
      <h1
          style={{
            fontFamily: "'Pacifico', cursive, sans-serif",
            fontSize: '2.3rem',
            color: '#ff7043',
            letterSpacing: '2px',
            margin: 0,
            textShadow: '1px 2px 8px #fff8',
          }}
        >
          Byte Kitchen
        </h1>
    </nav>
  )
}

export default Navbar