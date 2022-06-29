import { MemoryRouter } from 'react-router-dom'
import { AppRoutes } from './routes'

function NewTab() {
  return (
    <MemoryRouter>
      <AppRoutes />
    </MemoryRouter>
  )
}

export default NewTab
