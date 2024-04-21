import { testsSlice } from '@/features'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// function saveToLocalStorage(state: RootState) {
//   try {
//     const serialisedState = JSON.stringify(state)
//
//     localStorage.setItem('persistedState', serialisedState)
//   } catch (e) {
//     console.warn(e)
//   }
// }
//
// function loadFromLocalStorage() {
//   try {
//     const serialisedState = localStorage.getItem('persistedState')
//
//     if (serialisedState === null) {
//       return undefined
//     }
//
//     return JSON.parse(serialisedState)
//   } catch (e) {
//     console.warn(e)
//
//     return undefined
//   }
// }

const persistStore = {
  key: 'test-madsoft',
  storage,
}

const myReducers = combineReducers({
  [testsSlice.name]: testsSlice.reducer,
})

const localStorageReducer = persistReducer(persistStore, myReducers)

export const store = configureStore({
  reducer: localStorageReducer,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

// store.subscribe(() => saveToLocalStorage(store.getState()))

//@ts-ignore
window.store = store
