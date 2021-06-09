import { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useHistory
} from 'react-router-dom';

import {
  Modal,
  Button
} from 'react-bootstrap';

import Akun from './akun'
import Kemanan from './kemanan'
import Notifikasi from './notifikasi'
import Privasi from './privasi'
import Tutup from './tutup'

export default function ProfilIndex(props) {
  
  const history = useHistory()
  const [isLogout, setIsLogout] = useState(false)

  const openLogout = (e) => {
    e.preventDefault()
    setIsLogout(true)
  }

  const closeLogout = () => {
    setIsLogout(false)
  }

  const handleLogout = () => {
    setIsLogout(false)
    props.changeRoute('')
    history.push('/')
  }

  const tokenKu = props.token

  const routes = [
    { path: '/akun', title: 'Akun', icon: 'fe-user', comp: props => <Akun {...props} token={tokenKu} /> },
    { path: '/keamanan', title: 'Keamanan', icon: 'fe-settings', comp: props => <Kemanan {...props} token={tokenKu} /> },
    { path: '/notifikasi', title: 'Notifikasi', icon: 'fe-bell', comp: props => <Notifikasi {...props} token={tokenKu} /> },
    { path: '/privasi', title: 'Privasi', icon: 'fe-lock', comp: props => <Privasi {...props} token={tokenKu} /> },
    { path: '/tutup', title: 'Tutup', icon: 'fe-trash', comp: props => <Tutup {...props} token={tokenKu} /> },
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
                  <a href="/kursus" className="btn btn-primary btn-sm d-none d-md-block">Kursus</a>
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
                    <span className="navbar-header">Subscription</span>
                    {/* List */}
                    <ul className="list-unstyled ml-n2 mb-4">
                      {/* Nav item */}
                      <li className="nav-item">
                        <a className="nav-link" href="student-subscriptions.html"><i className="fe fe-calendar nav-icon" />My
                          Subscriptions</a>
                      </li>
                      {/* Nav item */}
                      <li className="nav-item">
                        <a className="nav-link" href="billing-info.html"><i className="fe fe-credit-card nav-icon" />Billing
                          Info</a>
                      </li>
                      {/* Nav item */}
                      <li className="nav-item">
                        <a className="nav-link" href="payment-method.html"><i className="fe fe-credit-card nav-icon" />Payment</a>
                      </li>
                      {/* Nav item */}
                      <li className="nav-item">
                        <a className="nav-link" href="invoice.html"><i className="fe fe-clipboard nav-icon" />Invoice</a>
                      </li>
                    </ul>

                    <span className="navbar-header">Pengaturan</span>
                    {/* List */}
                    <ul className="list-unstyled ml-n2 mb-0">
                      {/* Nav item */}
                      {
                        routes.map((item, i) => (
                          <NavLink className="nav-item" to={`/profil${item.path}`}>
                            <li className="nav-link">
                              <i className={`fe ${item.icon} nav-icon`} /> {item.title}
                            </li>
                          </NavLink>
                        ))
                      }
                      {/* Nav item */}
                      <li className="nav-item">
                        <a onClick={e => openLogout(e)} className="nav-link" href="#"><i className="fe fe-power nav-icon" /> Keluar</a>
                      </li>
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
                      path={`/profil${item.path}`}
                      component={item.comp} />
                  ))
                }

                <Route path="/profil" component={props => <Akun {...props} token={tokenKu} />} />
              </Switch>
            </div>

          </div>
        </div>
      </div>

      <Modal show={isLogout} onHide={closeLogout} centered size="sm">
        <Modal.Body>
          <div className="text-center">
            <h3 className="mb-4">Kamu yakin mau keluar ?</h3>
            <Button variant="danger" onClick={handleLogout} className="mr-2">Iya, Yakin</Button>
            <Button variant="secondary" onClick={closeLogout}>Ngga, Jadi</Button>
          </div>
        </Modal.Body>
      </Modal>

    </Router>
  )
}