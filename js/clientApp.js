import React from 'react'
import { render } from 'react-dom'
import { Switch, Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import Landing from './Landing'
import Search from './Search'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../public/style.css'

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <div className='app'>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/search' component={Search} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

render(<App />, document.getElementById('app'))
