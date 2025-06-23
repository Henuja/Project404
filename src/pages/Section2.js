import React from 'react'
import ReactMarkdown from 'react-markdown'

function Section2(props) {
  return (
    <div>
      <section
        style={{
          background: 'linear-gradient(90deg, #ffecd2 0%, #ffe0cc 100%)',
          borderRadius: '18px',
          boxShadow: '0 2px 12px #ff704322',
          padding: '28px 28px 22px 28px',
          margin: '0 auto',
          maxWidth: '520px',
        }}
      >
        <h2
          style={{
            color: '#ff7043',
            fontFamily: "'Pacifico', cursive, sans-serif",
            fontSize: '1.6rem',
            marginBottom: '18px',
            letterSpacing: '1px',
            textShadow: '0 1px 8px #fff8',
          }}
        >
          Byte Kitchen Recommends:
        </h2>
        <div
          style={{
            background: '#fff8f3',
            borderRadius: '12px',
            padding: '18px 18px 12px 18px',
            boxShadow: '0 1px 6px #ff704322',
            fontSize: '1.08rem',
            color: '#7a4c2f',
            lineHeight: 1.7,
            fontFamily: "'Quicksand', 'Segoe UI', sans-serif",
            wordBreak: 'break-word',
          }}
        >
          <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </div>
      </section>
    </div>
  )
}

export default Section2