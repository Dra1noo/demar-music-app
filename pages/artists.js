import Artist from '../src/Artist'

export default function Artists() {
  const list = [
    { name: 'Chuckky', song: 'Bloodbathh', img: '/chuckky.png' },
    { name: 'Tory Lanez', song: 'Chixtape vibe', img: '/tory.png' },
    { name: 'Sheff G', song: 'Proud of Myself', img: '/sheffg.png' }
  ]

  return (
    <div>
      <nav>
        <a href="/">Home</a>
        <a href="/artists">Artists</a>
        <a href="/bars">Bars</a>
      </nav>

      <div style={{ padding: '20px' }} className="flex">
        {list.map((a, i) => (
          <Artist key={i} data={a} />
        ))}
      </div>
    </div>
  )
}
