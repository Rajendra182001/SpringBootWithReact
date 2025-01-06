import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container-fluid">
      <Link className="navbar-brand" href="/">Navbar</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <Link className="btn btn-form-control btn-dark btn-sm btn rounded-pill" to="/addUser">Add User</Link>
    </div>
  </nav>
</div>

  )
}
