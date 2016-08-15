import React from 'react'
import { Route, IndexRedirect } from 'react-router'
import Shell from './containers/shell/shell.js'
import DataStructures from './containers/pages/data-structures/data-structures.js'
import Stack from './containers/pages/stack/stack.js'
import Queue from './containers/pages/queue/queue.js'
import NotFoundContainer from './containers/not-found/not-found.js'

export default (
  <Route>
    <Route path='/' component={Shell}>
      <IndexRedirect to='data_structures' />
      <Route path='data_structures' component={DataStructures}/>
      <Route path='stack' component={Stack}/>
      <Route path='queue' component={Queue}/>
    </Route>

    <Route path='*' component={NotFoundContainer} />
  </Route>
)
