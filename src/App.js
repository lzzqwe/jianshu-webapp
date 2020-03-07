import React from 'react';
import { Provider } from 'react-redux'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import store from './store/index'
import Header from './common/header'
import Home from './page/home'
import Login from './page/login'
import Write from './page/write'
import Detail from './page/detail'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route exact path='/'>
                <Home></Home>
              </Route>
              <Route exact path='/login'>
                <Login></Login>
              </Route>
              <Route exact path='/write'>
                <Write></Write>
              </Route>
              <Route exact path='/detail/:id'>
                <Detail></Detail>
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>

    )
  }
}

export default App;
