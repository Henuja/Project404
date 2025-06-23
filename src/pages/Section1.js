import React, { useState } from 'react'

function Section1(props) {
  const ingredientList = props.ingeredient.map((item, idx) => (
    <li
      key={idx}
      style={{
        background: 'linear-gradient(90deg, #ffe0cc 0%, #ffecd2 100%)',
        margin: '6px 0',
        padding: '8px 16px',
        borderRadius: '10px',
        fontWeight: 500,
        color: '#ff7043',
        boxShadow: '0 1px 4px #ff704322',
        fontSize: '1.08rem',
        letterSpacing: '0.5px',
        listStyle: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      <span style={{
        display: 'inline-block',
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        background: '#ff7043',
        marginRight: '10px'
      }}></span>
      {item}
    </li>
  ))

  return (
    <div>
      <section
        style={{
          textAlign: 'left',
        }}
      >
        <h2
          style={{
            color: '#ff7043',
            fontFamily: "'Pacifico', cursive, sans-serif",
            fontSize: '1.5rem',
            marginBottom: '8px',
            letterSpacing: '1px',
            textShadow: '0 1px 6px #fff8',
          }}
        >
          Ingredients on hand:
        </h2>
        <ul style={{ padding: 0, marginBottom: '18px' }}>
          {ingredientList}
        </ul>
        {props.ingeredient.length > 3 && (
          <div
            className='get-recipe'
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'linear-gradient(90deg, #ffb199 0%, #ffecd2 100%)',
              borderRadius: '14px',
              padding: '18px 20px',
              boxShadow: '0 2px 8px #ff704344',
              marginTop: '10px',
              gap: '18px',
            }}
          >
            <div>
              <h3
                style={{
                  margin: 0,
                  color: '#ff7043',
                  fontWeight: 700,
                  fontSize: '1.18rem',
                  letterSpacing: '1px',
                }}
              >
                Ready for recipe
              </h3>
              <p
                style={{
                  margin: '6px 0 0 0',
                  color: '#7a4c2f',
                  fontSize: '1rem',
                  opacity: 0.85,
                }}
              >
                Generate a recipe from your list of ingredients
              </p>
            </div>
            <button
              onClick={props.toggleRecipe}
              className='getRecipe'
              style={{
                background: 'linear-gradient(90deg, #ff7043 0%, #ffb199 100%)',
                color: '#fff',
                border: 'none',
                borderRadius: '12px',
                padding: '12px 26px',
                fontWeight: 700,
                fontSize: '1.08rem',
                cursor: 'pointer',
                boxShadow: '0 2px 8px #ff704344',
                transition: 'background 0.2s',
                marginLeft: '10px',
              }}
              onMouseOver={e => (e.target.style.background = '#ff7043')}
              onMouseOut={e => (e.target.style.background = 'linear-gradient(90deg, #ff7043 0%, #ffb199 100%)')}
            >
              Get a recipe
            </button>
          </div>
        )}
      </section>
    </div>
  )
}

export default Section1;  