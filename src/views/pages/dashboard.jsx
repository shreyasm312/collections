import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Header from '../layouts/header';
import { getAllCollections } from '../../state/actions';
import { selectGetAllCollections } from '../../state/selectors';

const base = 'collection.json';

export class Dashboard extends Component {
  state = {
    menu: true,
    rootCollections: []
  };
  componentDidMount() {
    this.init();
    const { dispatch } = this.props;
    dispatch(getAllCollections('collection'));
  }
  init() {
    fetch(base).then(response =>
      response
        .json()
        .then(data => localStorage.setItem('collection', JSON.stringify(data)))
    );
  }
  render() {
    return (
      <div>
        <Header
          options={menu =>
            this.setState({
              menu
            })
          }
        />
        <div>
          <div
            className={
              this.state.menu
                ? 'w-1/6 border-r p-2 h-screen'
                : 'w-1/6 p-2 h-screen hidden'
            }
          ></div>
          <div className="w-5/6"></div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  getAllCollections: selectGetAllCollections
});
export default connect(mapStateToProps, null)(Dashboard);
