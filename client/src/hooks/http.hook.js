import {useState, useCallback} from 'react'
export const useHttp = () => {
  const [loading, setLoading] = useState(initialState: false)
  const [error, setError] = useState(initialState: null)
  const request = useCallback ( callback: async (url, method = 'GET', body = null, headers = {}) => {
     
    setLoading(true)
    try {
      const response = await fetch(url, init: { method, body, headers })
      const data = await response.json()

      if (!responce.ok) {
      throw new Error(data.message || 'Something wrong')
    }

    setLoading(false)
     } catch (e) {
      setLoading(false)
      setError(e.massage)
     }
  } deps:[])

  return { loading, request}
}