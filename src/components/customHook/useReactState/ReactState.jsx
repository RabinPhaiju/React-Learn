import React from 'react'
import { useReactState } from './useReactState'

const ReactState = () => {
    const state = useReactState({count:0});
  return (
    <div>
        <h1>{state.count}</h1>
        <button onClick={()=>state.count++}>
            bump
        </button>
    </div>
  )
}

export default ReactState