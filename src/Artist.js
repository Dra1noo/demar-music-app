import { useState } from 'react'

export default function Artist({ data }) {
  const [show, setShow] = useState(false)

  return (
    <div className="card" style={{ width: '300px' }}>
      <img src={data.img} className="artist-img" />
      <h2 style={{ color: '#b19cd9' }}>{data.name}</h2>
      <p>{data.song}</p>

      <button
        onClick={() => setShow(!show)}
        style={{ padding: '8px', background: '#b19cd9', border: 'none' }}
      >
        Preview Track
      </button>

      {show && (
        <audio controls src="/preview.mp3" style={{ width: '100%', marginTop: '10px' }} />
      )}
    </div>
  )
}
