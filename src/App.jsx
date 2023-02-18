import { useState } from 'react'
import { Cta, Brand } from './components'
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGpt3,
} from './sections'
function App() {
  return (
    <div className="main">
      <Header />
      <Brand />
      <WhatGpt3 />
      <Features />
      <Possibility />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
