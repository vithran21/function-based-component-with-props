import React from 'react'

const Comp3 = (props) => {
  return (
    <div>
        <h2>This is Comp3</h2>
        {props.users.map((user, index) => {
           return <img key={index} src={user.avatar_url} alt="User avatar" />
        })}     
        
    </div>
  )
}
  
export default Comp3;