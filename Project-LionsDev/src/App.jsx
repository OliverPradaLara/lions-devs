import { QueryClient, QueryClientProvider } from "react-query"
import { AppRouter } from "./routes/AppRouter"

export const App = () => {

const queryClient = new QueryClient()

  return (
<QueryClientProvider client={queryClient}>
<AppRouter/>
</QueryClientProvider>
  
  )
}
