import React from 'react';
import {connect} from 'react-redux'
import {addItem, printSwearWord} from '../actions/addItem'
import {getEmail} from "../actions/index";
import Location from "../components/Location";
import UserList from "../components/UserList";

const mapStateToProps = (store) => {
    return {
        location: store.location,
        user: store.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getEmail: () => dispatch(getEmail()),
        submitBid: () => dispatch(submitBid())
    }
}

@connect(mapStateToProps, mapDispatchToProps)
class UserData extends React.Component {
    render() {
        const {getEmail, user, location} = this.props;
        return (
          <div>
              <Location location={location}/>
              <UserList users={user} getEmail={getEmail}/>
          </div>
        )
    }
}

export default UserData