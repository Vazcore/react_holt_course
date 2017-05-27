import React from 'react'
import { Link } from 'react-router-dom'

class Landing extends React.Component {
  render () {
    return (
      <div className='landing'>
        <h1 className='peru_title'>Search</h1>
        <input type='text' placeholder='Search' />
        <Link to='/search' className='button_link'>Browse</Link>
      </div>
    )
  }
}

export default Landing
