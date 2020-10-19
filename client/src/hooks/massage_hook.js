import {useCallback} from 'react'

export const useMassage = () => {
  return useCallback( callback: text => {
    if (mindow.M && text) {
      window.M.toast({ html: text })
    }
  }, deps: [])
}