import { ThemeProvider } from '@/components/theme-provider'
import { Button } from '@starter/components'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Button>Hello</Button>
    </ThemeProvider>
  )
}

export default App
