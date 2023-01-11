import './App.css';
import React, { Component } from 'react';
import Content from './components/Content';
import Header from './components/Header';
import Aside from './components/Aside';
import Main from './components/Main';

export class App extends Component {
  render() {
    return (
      <fieldset>
        <legend>App</legend>
        <Header />
        <div className="container">
          <Content>
            <div className="row">
              <div className="col">
                {/* for these nested components to work
                    we have to do something special */}
                <Aside />
              </div>
              <div className="col">
                {/* for these nested components to work
                    we have to do something special */}
                <Main />
              </div>
            </div>
          </Content>
        </div>
      </fieldset>
    )
  }
}

export default App;
