import { ThemeProvider } from '@/components/theme/theme-provider'
import { HomeView } from '@/pages/home/HomeView'
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <HomeView />
    </ThemeProvider>
  )
}

export default App
