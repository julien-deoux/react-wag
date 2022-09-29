import React from 'react'
import ReactWAG from 'react-wag'
import { createRoot } from 'react-dom/client'
import Graph from './Graph'
import App from './App'

const rootElement = document.getElementById('root')

if (rootElement) {
  const root = createRoot(rootElement)
  root.render(<App />)
}

const ctx = new AudioContext()
ReactWAG.render(<Graph />, ctx)
ctx.resume()
