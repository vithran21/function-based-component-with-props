import React from 'react'
import Comp3 from './Comp3'

const Comp2 = (props) => {
  return (
    <div>
        <h2>This is Comp2</h2>
        <hr />
        <Comp3 users={props.c2}></Comp3>
    </div>
  )
}

export default Comp2