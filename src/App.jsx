import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import store from './redux/store'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'
import Routers from './routes/Routers'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Toaster />
        <Routers />
      </Router>
    </Provider>
  )
}

export default App
