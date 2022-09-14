import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <header>
        <div className='container'>
            <Link to="/">
                <h1>Workout Body</h1>
            </Link>
        </div>
    </header>
  )
}
