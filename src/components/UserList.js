import React from 'react'


const UserList = ({users, getEmail}) => {
    const mapUsers = [users].map((user, index) => <li key={index}>{user}</li>);
    return (
      <div>
          <button onClick={getEmail}>Load Email</button>
          <hr/>
          <br/>
          <strong>Users:</strong>
          <ul>
              {mapUsers}
          </ul>
      </div>
    )
}

export default UserList