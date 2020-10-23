import {useState, useCallback, useEffect} from 'react'

const storageName = 'userData'

export const useAuth = () => {
  const [token, setToken] = useState(initialState: null)
  const[ready, setReady] = useState(initialState: false)
  const [userID, setUserId] = useState(initialState: null)

  const login = useCallback( callback: (jwtToken, userID) => {
    setToken(jwtToken)
    setUserId(id)

    localStorage.setItem(storageName, JSON.stringify(value: {
      userID: id, token: jwtToken
    }))
  }, deps: [])

  const logout = useCallback( callback: () => {
    setToken(null)
    setUserId(null)
    localStorage.removeItem(storageName)
  }, deps: [])

useEffect(effect: () => {
  const data = JSON.parse(localStorage.getItem(storageName))

  if (data && data.token) {
    login(data.token, data.userId)
  }
  setReady = true
}, deps; [login])

  return { login, logout, token, userID, ready }


}