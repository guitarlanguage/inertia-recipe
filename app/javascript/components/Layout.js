import React from 'react';
import { usePage, InertiaLink } from '@inertiajs/inertia-react'

const Layout = ({children}) => {
const {props: {user}} = usePage();


  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <InertiaLink className="navbar-brand" href="/">Mr. Tom's Book of Code</InertiaLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <InertiaLink className="nav-link active" aria-current="page" href="/">Home</InertiaLink>
              </li>
              <li className="nav-item">
                <InertiaLink className="nav-link" href="/recipes">{user.name}'s Recipes</InertiaLink>
              </li>
              <li className="nav-item">
                <InertiaLink className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</InertiaLink>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    
      <main className="container">
        {children}
      </main>
    </>
  )
}


export default page => <Layout>{page}</Layout>;