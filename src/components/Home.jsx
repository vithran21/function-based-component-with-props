import React from 'react'
import githubusers from '../assets/githubusers.json'
import Comp1 from '../components/Comp1'
import Comp2 from '../components/Comp2'

const Home = (props) => {
    return (
    <div>
        <Comp1 c1={<Comp2 c2={githubusers}></Comp2>}></Comp1>
    </div>
  )
}

export default Home