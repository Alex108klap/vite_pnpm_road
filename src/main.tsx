import ReactDOM from 'react-dom/client'
import { Box } from "@chakra-ui/react"

import "@fontsource-variable/inter"
import "@fontsource-variable/roboto"
import "@fontsource-variable/jetbrains-mono"
import { ThemeToggle } from "./ThemeToggle";

import App from './App'
import { Provider } from '@/components/ui/provider'

ReactDOM.createRoot(document.getElementById('root')!).render(

    <Provider>
      <Box>
        <ThemeToggle />
      </Box>
      <App />
    </Provider>
  
  
  
  
  
  
  
  
)

