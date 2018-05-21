import React from 'react'
import UserData from '../containers/UserData'


const box = {
    border: "1px solid black",
    margin: "5px",
    padding: "5px"
}


const App = () => {
    return (
      <div>
          <div style={box}>
              <UserData/>
          </div>
      </div>
    )
}

export default App
