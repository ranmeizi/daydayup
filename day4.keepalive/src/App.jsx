import React from 'react'
import { HashRouter } from 'react-router-dom';
import routes from './routes'

export default function () {
  return <HashRouter>
    {routes}
  </HashRouter>
}