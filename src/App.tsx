import React from 'react'
import './styles.css'
import IMAGE from './react.png'
import LOGO from './logo.svg'
import ClickCounter from './ClickCounter'

const App = () => {
  const num = 0
  return (
    <div>
      <h1>
        Edited React Typescript Webpack Starter Starter - {process.env.NODE_ENV} {process.env.name}{' '}
      </h1>
      <img src={IMAGE} alt="React Logo" width="300" height="200" />
      <img src={LOGO} alt="React Logo" width="300" />
      <ClickCounter />
    </div>
  )
}

export default App
