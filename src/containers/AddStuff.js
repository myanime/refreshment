import React from 'react';
import {connect} from 'react-redux'
import {addItem, printSwearWord} from '../actions/addItem'
import {getEmail} from "../actions/index";

const mapStateToProps = (store) => {
  return {
    location: store.location,
    user: store.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    mpdGetEmail: () => dispatch(getEmail())
  }
}

// @connect(mapStateToProps, mapDispatchToProps)
class zAddStuff extends React.Component {
  fetchTweets() {
    this.props.mpdGetEmail()
  }

  render() {
    const {user} = this.props;
    const mapTweets = () => <li>{user}</li>

    return <div>
      <button onClick={this.fetchTweets.bind(this)}>load tweets</button>

      <hr/>
      <strong style={{color: 'red'}}>
        {this.props.location}
      </strong>
      {this.props.user}

      <ul>
        {mapTweets()}
      </ul>
      </div>
  }
}

const AddStuff = connect(
  mapStateToProps,
  mapDispatchToProps
)(zAddStuff)

export default AddStuff