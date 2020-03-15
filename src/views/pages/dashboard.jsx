import React, { Component } from 'react';
import Header from '../layouts/header';

export class Dashboard extends Component {
  state = {
    menu: false
  };
  render() {
    return (
      <div>
        <Header options={() => this.setState({ menu: !this.state.menu })} />
        <div>
          <div
            className={
              this.state.menu
                ? 'w-1/6 bg-gray-200 h-screen'
                : 'w-1/6 bg-gray-200 h-screen hidden'
            }
          ></div>
          <div className="w-5/6"></div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
