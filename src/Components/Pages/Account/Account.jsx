import React from 'react'
import { Link } from 'react-router-dom'

export const Account = () => {
  return (
    <div>
      <Link to="/account/login">Login</Link>
      <Link to="/account/register">Register</Link>
    </div>
  )
}
