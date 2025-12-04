import { useState } from 'react'

export default function Bars() {
  const [bar, setBar] = useState('')

  const all = [
    "Man stay wavy like Dunn River, vibes tun up everytime.",
    "City know the flex, I move calm but drop heat loud fam.",
    "Heart cold but royal, purple drip nah play."
  ]

  return (
    <div>
      <nav>
        <a href="/">Home</a>
        <a href="/artists">Artists</a>
        <a href="/bars">Bars</a>
      </nav>

      <div style={{ padding: '40px' }}>
        <h1 style={{ color: '#b19cd9' }}>Rap Bar Generator</h1>

        <button
          onClick={() => setBar(all[Math.floor(Math.random() * all.length)])}
          style={{ padding: '10px 20px', background: '#b19cd9', border: 'none', fontSize: '18px' }}
        >
          Generate Bar
        </button>

        <p style={{ marginTop: '30px', fontSize: '26px' }}>{bar}</p>
      </div>
    </div>
  )
}
