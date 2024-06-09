import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>

<nav class="navbar navbar-expand-lg bg-warning">
  <div class="container-fluid">
    <Link class="navbar-brand" to="#">FISAT</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link active" aria-current="page" to="/">ADD STUDENT</Link>
        <Link class="nav-link" to="/search">SEARCH</Link>
        <Link class="nav-link" to="/delete">REMOVE</Link>
        <Link class="nav-link" to='/viewall'>VIEW ALL</Link>
      </div>
    </div>
  </div>
</nav>

    </div>
  )
}

export default NavBar