import React from 'react';
import {Provider} from 'react-redux'
import store from './store/index'
import Header from './common/header'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header/>
        </div>
      </Provider>
      
    )
  }
}

export default App;
