import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { App, store } from '@/app'
import { createRoot } from 'react-dom/client'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

import './styles/index.scss'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'

const myPersistor = persistStore(store)

createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <PersistGate persistor={myPersistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
)
