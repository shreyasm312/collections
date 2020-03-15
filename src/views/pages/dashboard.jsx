import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Header from '../layouts/header';
import { getAllCollections } from '../../state/actions';
import { selectGetAllCollections } from '../../state/selectors';

export class Dashboard extends Component {
  state = {
    menu: true,
    rootCollections: []
  };
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getAllCollections());
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
