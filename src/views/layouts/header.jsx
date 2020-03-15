import React, { Component } from 'react';

export class Header extends Component {
  state = {
    menu: true
  };
  render() {
    return (
      <nav className="block border-b p-2">
        <div
          className="block w-5/6"
          onClick={() =>
            this.setState({ menu: !this.state.menu }, () =>
              this.props.options(this.state.menu)
            )
          }
        >
          <button className="flex items-center px-3 py-2 text-grey-200 hover:text-gray">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className={this.state.menu ? 'block w-1/6' : 'hidden'}>
          <ul className="flex">
            <li className="flex-1">All</li>
            <li className="flex-1">Board</li>
            <li className="flex-1">Graph</li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
