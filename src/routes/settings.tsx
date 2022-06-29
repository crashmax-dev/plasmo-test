import { useNavigate } from "react-router-dom"

export function SettingsPage() {
  const navigate = useNavigate()

  return (
    <div>
      <h1>settings</h1>
      <button onClick={() => navigate('/')}>home</button>
    </div>
  )
}
