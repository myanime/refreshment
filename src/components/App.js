import React from 'react'
import AddStuff from '../containers/AddStuff'
import BottleO from './BottleO'
const App = () => {
  return(
    <div>
      <BottleO title="Bottle Shop">
        <div>Beer Bottle</div>
        <div>Beer Bottle</div>
        <div>Beer Bottle</div>
        <div>Beer Bottle</div>
      </BottleO>
      <AddStuff/>
    </div>
  )
}

export default App
