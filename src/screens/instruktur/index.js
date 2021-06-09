import { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';

import {
  Modal,
  Button
} from 'react-bootstrap';

import Dashboard from './dashboard'
import Kursus from './kursus'

import Review from './review'
import Pendapatan from './pendapatan'
import Pesanan from './pesanan'

import Murid from './murid'
import Pembayaran from './pembayaran'

export default function InstrukturIndex(props) {
  
  const tokenKu = props.token

  const routes = [
    { path: '/dashboard', title: 'Dashboard', icon: 'fe-home', comp: props => <Dashboard {...props} token={tokenKu} /> },
    { path: '/kursus', title: 'Kursus', icon: 'fe-book', comp: props => <Kursus {...props} token={tokenKu} /> },
    { path: '/review', title: 'Review', icon: 'fe-star', comp: props => <Review {...props} token={tokenKu} /> },
    { path: '/pendapatan', title: 'Pendapatan', icon: 'fe-pie-chart', comp: props => <Pendapatan {...props} token={tokenKu} /> },
    { path: '/pesanan', title: 'Pesanan', icon: 'fe-shopping-bag', comp: props => <Pesanan {...props} token={tokenKu} /> },
    { path: '/murid', title: 'Murid', icon: 'fe-users', comp: props => <Murid {...props} token={tokenKu} /> },
    { path: '/pembayaran', title: 'Pembayaran', icon: 'fe-dollar-sign', comp: props => <Pembayaran {...props} token={tokenKu} /> },
  ]

  return (
    <Router>
      <div className="pt-5 pb-5">
        <div className="container">
          {/* User info */}
          <div className="row align-items-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12">
              {/* Bg */}
              <div className="pt-16 rounded-top" style={{background: 'url(/assets/images/background/profile-bg.jpg) no-repeat', backgroundSize: 'cover'}} />
              <div className="d-flex align-items-end justify-content-between bg-white px-4 pt-2 pb-4 rounded-none rounded-bottom shadow-sm">
                <div className="d-flex align-items-center">
                  <div className="mr-2 position-relative d-flex justify-content-end align-items-end mt-n5">
                    <img src="../assets/images/avatar/avatar-3.jpg" className="avatar-xl rounded-circle border-width-4 border-white" alt />
                  </div>
                  <div className="lh-1">
                    <h2 className="mb-0">
                      Stella Flores
                      <a href="#!" className="text-decoration-none" data-toggle="tooltip" data-placement="top" title data-original-title="Beginner">
                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x={3} y={8} width={2} height={6} rx={1} fill="#754FFE" />
                          <rect x={7} y={5} width={2} height={9} rx={1} fill="#DBD8E9" />
                          <rect x={11} y={2} width={2} height={12} rx={1} fill="#DBD8E9" />
                        </svg>
                      </a>
                    </h2>
                    <p className="mb-0 d-block">@stellaflores</p>
                  </div>
                </div>
                <div>
                  <a href="/kursus-baru" className="btn btn-primary btn-sm d-none d-md-block">Buat Kursus Baru</a>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="row mt-0 mt-md-4">
            <div className="col-lg-3 col-md-4 col-12">
              {/* Side navbar */}
              <nav className="navbar navbar-expand-md navbar-light shadow-sm mb-4 mb-lg-0 sidenav">
                {/* Menu */}
                <a className="d-xl-none d-lg-none d-md-none text-inherit font-weight-bold" href="#!">Menu</a>
                {/* Button */}
                <button className="navbar-toggler d-md-none icon-shape icon-sm rounded bg-primary text-light" type="button" data-toggle="collapse" data-target="#sidenav" aria-controls="sidenav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="fe fe-menu" />
                </button>
                {/* Collapse navbar */}
                <div className="collapse navbar-collapse" id="sidenav">
                  <div className="navbar-nav flex-column">
                    <span className="navbar-header">Area Instuktur</span>
                    {/* List */}
                    <ul className="list-unstyled ml-n2 mb-0">
                      {/* Nav item */}
                      {
                        routes.map((item, i) => (
                          <NavLink className="nav-item" to={`/instruktur${item.path}`}>
                            <li className="nav-link">
                              <i className={`fe ${item.icon} nav-icon`} /> {item.title}
                            </li>
                          </NavLink>
                        ))
                      }
                    </ul>
                  </div>
                </div>
              </nav>
            </div>

            <div className="col-lg-9 col-md-8 col-12">
              <Switch>
                {
                  routes.map((item, i) => (
                    <Route
                      key={`${item.path}-${i}`}
                      path={`/instruktur${item.path}`}
                      component={item.comp} />
                  ))
                }

                <Route path="/instruktur" component={props => <Dashboard {...props} token={tokenKu} />} />
              </Switch>
            </div>

          </div>
        </div>
      </div>
    </Router>
  )
}