import { useNavigate } from 'react-router-dom'

export function HomePage() {
  const navigate = useNavigate()

  return (
    <div>
      <h1>home</h1>
      <button onClick={() => navigate('/settings')}>settings</button>
    </div>
  )
}
