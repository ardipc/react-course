import React from 'react';
import {
  Modal,
  Button
} from 'react-bootstrap';

import { useHistory } from "react-router-dom";
import { Fragment } from 'react';

function Navigation(props) {

  const history = useHistory()

  const [isLogin, setIsLogin] = React.useState(false)
  const [isLogout, setIsLogout] = React.useState(false)

  const openLogin = (e) => {
    e.preventDefault()
    setIsLogin(true)
  }

  const closeLogin = () => {
    setIsLogin(false)
  }

  const openLogout = (e) => {
    e.preventDefault()
    setIsLogout(true)
  }

  const closeLogout = () => {
    setIsLogout(false)
  }

  const handleLogin = () => {
    setIsLogin(false)
    props.changeRoute('ahmad-ardiansyah')
    history.push('/')
  }

  const handleLogout = () => {
    setIsLogout(false)
    props.changeRoute('')
    history.push('/')
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-default">
      <div className="container-fluid px-0">
        <a className="navbar-brand" href="/"><img src="/assets/images/brand/logo/logo.svg" alt="Cover" /></a>
        {/* Mobile view nav wrap */}
        <ul className="navbar-nav navbar-right-wrap ml-auto d-lg-none d-flex nav-top-wrap">
          <li className="dropdown stopevent">
            <a className="btn btn-light btn-icon rounded-circle text-muted indicator indicator-primary" href="#!" role="button" id="dropdownNotification" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fe fe-bell"> </i>
            </a>
            <div className="dropdown-menu dropdown-menu-right shadow" aria-labelledby="dropdownNotification">
              <div>
                <div className="border-bottom px-3 pb-3 d-flex justify-content-between align-items-center">
                  <span className="h5 mb-0">Notifications</span>
                  <a href="# " className="text-muted"><span className="align-middle"><i className="fe fe-settings mr-1" /></span></a>
                </div>
                <ul className="list-group list-group-flush notification-list-scroll">
                  <li className="list-group-item bg-light">
                    <div className="row">
                      <div className="col">
                        <div className="d-flex">
                          <img src="./assets/images/avatar/avatar-1.jpg" alt="Cover" className="avatar-md rounded-circle" />
                          <div className="ml-3">
                            <h5 className="font-weight-bold mb-1">Kristin Watson:</h5>
                            <p className="mb-3">
                              Krisitn Watsan like your comment on course Javascript
                              Introduction!
                            </p>
                            <span className="font-size-xs text-muted">
                              <span><span className="fe fe-thumbs-up text-success mr-1" />2 hours ago,</span>
                              <span className="ml-1">2:19 PM</span>
                            </span>
                          </div>
                        </div>
                        <a className="stretched-link" href="#!" />
                      </div>
                      <div className="col-auto text-center">
                        <a href="#!" className="badge-dot badge-info" data-toggle="tooltip" data-placement="top" title data-original-title="Mark as read">
                        </a>
                        <div>
                          <a href="#!" data-toggle="tooltip" data-placement="top" title data-original-title="Remove">
                            <i className="fe fe-x text-muted" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="row">
                      <div className="col">
                        <div className="d-flex">
                          <img src="./assets/images/avatar/avatar-2.jpg" alt="Cover" className="avatar-md rounded-circle" />
                          <div className="ml-3">
                            <h5 className="font-weight-bold mb-1">Brooklyn Simmons</h5>
                            <p className="mb-3">
                              Just launched a new Courses React for Beginner.
                            </p>
                            <span className="font-size-xs text-muted">
                              <span><span className="fe fe-thumbs-up text-success mr-1" />Oct 9,</span>
                              <span className="ml-1">1:20 PM</span>
                            </span>
                          </div>
                        </div>
                        <a className="stretched-link" href="#!" />
                      </div>
                      <div className="col-auto text-center">
                        <a href="#!" className="badge-dot badge-secondary" data-toggle="tooltip" data-placement="top" title data-original-title="Mark as unread">
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="row">
                      <div className="col">
                        <div className="d-flex">
                          <img src="./assets/images/avatar/avatar-3.jpg" alt="Cover" className="avatar-md rounded-circle" />
                          <div className="ml-3">
                            <h5 className="font-weight-bold mb-1">Jenny Wilson</h5>
                            <p className="mb-3">
                              Krisitn Watsan like your comment on course Javascript
                              Introduction!
                            </p>
                            <span className="font-size-xs text-muted">
                              <span><span className="fe fe-thumbs-up text-info mr-1" />Oct 9,</span>
                              <span className="ml-1">1:56 PM</span>
                            </span>
                          </div>
                        </div>
                        <a className="stretched-link" href="#!" />
                      </div>
                      <div className="col-auto text-center">
                        <a href="#!" className="badge-dot badge-secondary" data-toggle="tooltip" data-placement="top" title data-original-title="Mark as unread">
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="row">
                      <div className="col">
                        <div className="d-flex">
                          <img src="./assets/images/avatar/avatar-4.jpg" alt="Cover" className="avatar-md rounded-circle" />
                          <div className="ml-3">
                            <h5 className="font-weight-bold mb-1">Sina Ray</h5>
                            <p className="mb-3">
                              You earn new certificate for complete the Javascript
                              Beginner course.
                            </p>
                            <span className="font-size-xs text-muted">
                              <span><span className="fe fe-award text-warning mr-1" />Oct 9,</span>
                              <span className="ml-1">1:56 PM</span>
                            </span>
                          </div>
                        </div>
                        <a className="stretched-link" href="#!" />
                      </div>
                      <div className="col-auto text-center">
                        <a href="#!" className="badge-dot badge-secondary" data-toggle="tooltip" data-placement="top" title data-original-title="Mark as unread">
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="border-top px-3 pt-3 pb-0">
                  <a href="./pages/notification-history.html" className="text-link font-weight-semi-bold">See all
                    Notifications</a>
                </div>
              </div>
            </div>
          </li>
          <li className="dropdown ml-2">
            <a className="rounded-circle" href="#!" role="button" id="dropdownUser" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <div className="avatar avatar-md avatar-indicators avatar-online">
                <img alt="avatar" src="./assets/images/avatar/avatar-1.jpg" className="rounded-circle" />
              </div>
            </a>
            <div className="dropdown-menu dropdown-menu-right shadow" aria-labelledby="dropdownUser">
              <div className="dropdown-item">
                <div className="d-flex">
                  <div className="avatar avatar-md avatar-indicators avatar-online">
                    <img alt="avatar" src="./assets/images/avatar/avatar-1.jpg" className="rounded-circle" />
                  </div>
                  <div className="ml-3 lh-1">
                    <h5 className="mb-1">Annette Black</h5>
                    <p className="mb-0 text-muted">annette@geeksui.com</p>
                  </div>
                </div>
              </div>
              <div className="dropdown-divider" />
              <ul className="list-unstyled">
                <li className="dropdown-submenu dropleft-lg">
                  <a className="dropdown-item dropdown-list-group-item dropdown-toggle" href="#!">
                    <i className="fe fe-circle mr-2" />Status
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#!">
                        <span className="badge-dot bg-success mr-2" />Online
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        <span className="badge-dot bg-secondary mr-2" />Offline
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        <span className="badge-dot bg-warning mr-2" />Away
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        <span className="badge-dot bg-danger mr-2" />Busy
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="dropdown-item" href="./pages/profile-edit.html">
                    <i className="fe fe-user mr-2" />Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="./pages/student-subscriptions.html">
                    <i className="fe fe-star mr-2" />Subscription
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#!">
                    <i className="fe fe-settings mr-2" />Settings
                  </a>
                </li>
              </ul>
              <div className="dropdown-divider" />
              <ul className="list-unstyled">
                <li>
                  <a onClick={e => openLogout(e)} className="dropdown-item" href="#">
                    <i className="fe fe-power mr-2" />Sign Out
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        {/* Button */}
        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbar-default" aria-controls="navbar-default" aria-expanded="false" aria-label="Toggle navigation">
          <span className="icon-bar top-bar mt-0" />
          <span className="icon-bar middle-bar" />
          <span className="icon-bar bottom-bar" />
        </button>
        {/* Collapse */}
        <div className="collapse navbar-collapse" id="navbar-default">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#!" id="navbarBrowse" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                Browse
              </a>
              <ul className="dropdown-menu dropdown-menu-arrow" aria-labelledby="navbarBrowse">
                <li className="dropdown-submenu dropright">
                  <a className="dropdown-item dropdown-list-group-item dropdown-toggle" href="#!">
                    Web Development
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="./pages/course-category.html">
                        Bootstrap</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="./pages/course-category.html">
                        React
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="./pages/course-category.html">
                        GraphQl</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="./pages/course-category.html">
                        Gatsby</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="./pages/course-category.html">
                        Grunt</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="./pages/course-category.html">
                        Svelte</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="./pages/course-category.html">
                        Meteor</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="./pages/course-category.html">
                        HTML5</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="./pages/course-category.html">
                        Angular</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-submenu dropright">
                  <a className="dropdown-item dropdown-list-group-item dropdown-toggle" href="#!">
                    Design
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="./pages/course-category.html">
                        Graphic Design</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="./pages/course-category.html">
                        Illustrator
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="./pages/course-category.html">
                        UX / UI Design</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="./pages/course-category.html">
                        Figma Design</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="./pages/course-category.html">
                        Adobe XD</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="./pages/course-category.html">
                        Sketch</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="./pages/course-category.html">
                        Icon Design</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="./pages/course-category.html">
                        Photoshop</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="./pages/course-category.html" className="dropdown-item">
                    Mobile App
                  </a>
                </li>
                <li>
                  <a href="./pages/course-category.html" className="dropdown-item">
                    IT Software
                  </a>
                </li>
                <li>
                  <a href="./pages/course-category.html" className="dropdown-item">
                    Marketing
                  </a>
                </li>
                <li>
                  <a href="./pages/course-category.html" className="dropdown-item">
                    Music
                  </a>
                </li>
                <li>
                  <a href="./pages/course-category.html" className="dropdown-item">
                    Life Style
                  </a>
                </li>
                <li>
                  <a href="./pages/course-category.html" className="dropdown-item">
                    Business
                  </a>
                </li>
                <li>
                  <a href="./pages/course-category.html" className="dropdown-item">
                    Photography
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#!" id="navbarLanding" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Landings
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarLanding">
                <li>
                  <h4 className="dropdown-header">Landings</h4>
                </li>
                <li>
                  <a href="./pages/landings/landing-courses.html" className="dropdown-item">
                    Courses
                  </a>
                </li>
                <li>
                  <a href="./pages/landings/course-lead.html" className="dropdown-item">
                    Lead Course
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#!" id="navbarPages" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Pages
              </a>
              <ul className="dropdown-menu dropdown-menu-arrow" aria-labelledby="navbarPages">
                <li>
                  <a className="dropdown-item" href="./pages/course-single.html">
                    Course Single
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="./pages/course-single-v2.html">
                    Course Single v2
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="./pages/course-resume.html">
                    Course Resume
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="./pages/course-category.html">
                    Course Category
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="./pages/course-checkout.html">
                    Course Checkout
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="./pages/course-filter-list.html">
                    Course List/Grid
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="./pages/add-course.html">
                    Add New Course
                  </a>
                </li>
                <li className="dropdown-submenu dropright">
                  <a className="dropdown-item dropdown-list-group-item dropdown-toggle" href="#!">
                    Paths
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="./pages/course-path.html" className="dropdown-item">
                        Browse Path
                      </a>
                    </li>
                    <li>
                      <a href="./pages/course-path-single.html" className="dropdown-item">
                        Path Single
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <hr className="mx-3" />
                </li>
                <li className="dropdown-submenu dropright">
                  <a className="dropdown-item dropdown-list-group-item dropdown-toggle" href="#!">
                    Blog
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="./pages/blog.html">
                        Listing</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="./pages/blog-single.html">
                        Article
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="./pages/blog-category.html">
                        Category</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="./pages/blog-sidebar.html">
                        Sidebar</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="dropdown-item" href="./pages/about.html">
                    About
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#!">
                    Help Center <span className="badge badge-success ml-1">Pro</span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="./pages/pricing.html">
                    Pricing
                  </a>
                </li>
                <li className="dropdown-submenu dropright">
                  <a className="dropdown-item dropdown-list-group-item dropdown-toggle" href="#!">
                    Specialty
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="./pages/coming-soon.html">
                        Coming Soon
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="./pages/404-error.html">
                        Error 404
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="./pages/maintenance-mode.html">
                        Maintenance Mode
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="./pages/terms-condition-page.html">
                        Terms &amp; Conditions
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#!" id="navbarAccount" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Accounts
              </a>
              <ul className="dropdown-menu dropdown-menu-arrow" aria-labelledby="navbarAccount">
                <li>
                  <h4 className="dropdown-header">Accounts</h4>
                </li>
                <li className="dropdown-submenu dropright">
                  <a className="dropdown-item dropdown-list-group-item dropdown-toggle" href="#!">
                    Instructor
                  </a>
                  <ul className="dropdown-menu">
                    <li className="text-wrap">
                      <h5 className="dropdown-header text-dark">Instructor</h5>
                      <p className="dropdown-text mb-0">
                        Instructor dashboard for manage courses and earning.
                      </p>
                    </li>
                    <li>
                      <hr className="mx-3" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="./pages/dashboard-instructor.html">
                        Dashboard</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="./pages/instructor-profile.html">
                        Profile</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="./pages/instructor-courses.html">
                        My Courses
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="./pages/instructor-order.html">
                        Orders</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="./pages/instructor-reviews.html">
                        Reviews</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="./pages/instructor-students.html">
                        Students</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="./pages/instructor-payouts.html">
                        Payouts</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="./pages/instructor-earning.html">
                        Earning</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-submenu dropright">
                  <a className="dropdown-item dropdown-list-group-item dropdown-toggle" href="#!">
                    Students
                  </a>
                  <ul className="dropdown-menu">
                    <li className="text-wrap">
                      <h5 className="dropdown-header text-dark">Students</h5>
                      <p className="dropdown-text mb-0">
                        Students dashboard to manage your courses and subscriptions.
                      </p>
                    </li>
                    <li>
                      <hr className="mx-3" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="./pages/dashboard-student.html">
                        Dashboard</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="./pages/student-subscriptions.html">
                        Subscriptions
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="./pages/payment-method.html">
                        Payments</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="./pages/billing-info.html">
                        Billing Info</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="./pages/invoice.html">
                        Invoice</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="./pages/invoice-details.html">
                        Invoice Details</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="./pages/dashboard-student.html">
                        Bookmarked</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="./pages/dashboard-student.html">
                        My Path</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-submenu dropright">
                  <a className="dropdown-item dropdown-list-group-item dropdown-toggle" href="#!">
                    Admin
                  </a>
                  <ul className="dropdown-menu">
                    <li className="text-wrap">
                      <h5 className="dropdown-header text-dark">Master Admin</h5>
                      <p className="dropdown-text mb-0">
                        Master admin dashboard to manage courses, user, site setting
                        , and work with amazing apps.
                      </p>
                    </li>
                    <li>
                      <hr className="mx-3" />
                    </li>
                    <li className="px-3">
                      <a href="./pages/dashboard/admin-dashboard.html" className="btn btn-sm btn-primary btn-block">Go to
                        Dashboard</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <hr className="mx-3" />
                </li>
                <li>
                  <a className="dropdown-item" href="./pages/sign-in.html">
                    Sign In
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="./pages/sign-up.html">
                    Sign Up
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="./pages/forget-password.html">
                    Forgot Password
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="./pages/profile-edit.html">
                    Edit Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="./pages/security.html">
                    Security
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="./pages/social-profile.html">
                    Social Profiles
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="./pages/notifications.html">
                    Notifications
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="./pages/profile-privacy.html">
                    Privacy Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="./pages/delete-profile.html">
                    Delete Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="./pages/linked-accounts.html">
                    Linked Accounts
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link" href="#!" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fe fe-more-horizontal font-size-lg" />
              </a>
              <div className="dropdown-menu dropdown-menu-md" aria-labelledby="navbarDropdown">
                <div className="list-group">
                  <a className="list-group-item list-group-item-action border-0" href="./docs/index.html">
                    <div className="d-flex align-items-center">
                      <i className="fe fe-file-text font-size-lg text-primary" />
                      <div className="ml-3">
                        <h5 className="mb-0">Documentations</h5>
                        <p className="mb-0 font-size-xs">
                          Browse the all documentation
                        </p>
                      </div>
                    </div>
                  </a>
                  <a className="list-group-item list-group-item-action border-0" href="./docs/changelog.html">
                    <div className="d-flex align-items-center">
                      <i className="fe fe-layers font-size-lg text-primary" />
                      <div className="ml-3">
                        <h5 className="mb-0">
                          Changelog <span className="text-primary ml-1">v1.0.2</span>
                        </h5>
                        <p className="mb-0 font-size-xs">See what's new</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </li>
          </ul>
          
          <form className="mt-3 mt-lg-0 ml-lg-3 d-flex align-items-center">
            <span className="position-absolute pl-3 search-icon">
              <i className="fe fe-search" />
            </span>
            <input type="search" className="form-control pl-6" placeholder="Search Courses" />
          </form>
          
          <ul className="navbar-nav navbar-right-wrap ml-auto d-none d-lg-block">
            {
              props.token ?
              <Fragment>
                <li className="dropdown d-inline-block stopevent">
                  <a className="btn btn-light btn-icon rounded-circle text-muted indicator indicator-primary" href="#!" role="button" id="dropdownNotificationSecond" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fe fe-bell"> </i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-xl dropdown-menu-right" aria-labelledby="dropdownNotificationSecond">
                    <div>
                      <div className="border-bottom px-3 pb-3 d-flex justify-content-between align-items-center">
                        <span className="h5 mb-0">Notifications</span>
                        <a href="# " className="text-muted"><span className="align-middle"><i className="fe fe-settings mr-1" /></span></a>
                      </div>
                      <ul className="list-group list-group-flush notification-list-scroll">
                        <li className="list-group-item bg-light">
                          <div className="row">
                            <div className="col">
                              <div className="d-flex">
                                <img src="./assets/images/avatar/avatar-1.jpg" alt="Cover" className="avatar-md rounded-circle" />
                                <div className="ml-3">
                                  <h5 className="font-weight-bold mb-1">Kristin Watson:</h5>
                                  <p className="mb-3">
                                    Krisitn Watsan like your comment on course
                                    Javascript Introduction!
                                </p>
                                  <span className="font-size-xs text-muted">
                                    <span><span className="fe fe-thumbs-up text-success mr-1" />2 hours ago,</span>
                                    <span className="ml-1">2:19 PM</span>
                                  </span>
                                </div>
                              </div>
                              <a className="stretched-link" href="#!" />
                            </div>
                            <div className="col-auto text-center">
                              <a href="#!" className="badge-dot badge-info" data-toggle="tooltip" data-placement="top" title data-original-title="Mark as read">
                              </a>
                              <div>
                                <a href="#!" className="bg-transparent" data-toggle="tooltip" data-placement="top" title data-original-title="Remove">
                                  <i className="fe fe-x text-muted" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="list-group-item">
                          <div className="row">
                            <div className="col">
                              <div className="d-flex">
                                <img src="./assets/images/avatar/avatar-2.jpg" alt="Cover" className="avatar-md rounded-circle" />
                                <div className="ml-3">
                                  <h5 className="font-weight-bold mb-1">
                                    Brooklyn Simmons
                                </h5>
                                  <p className="mb-3">
                                    Just launched a new Courses React for Beginner.
                                </p>
                                  <span className="font-size-xs text-muted">
                                    <span><span className="fe fe-thumbs-up text-success mr-1" />Oct 9,</span>
                                    <span className="ml-1">1:20 PM</span>
                                  </span>
                                </div>
                              </div>
                              <a className="stretched-link" href="#!" />
                            </div>
                            <div className="col-auto text-center">
                              <a href="#!" className="badge-dot badge-secondary" data-toggle="tooltip" data-placement="top" title data-original-title="Mark as unread">
                              </a>
                            </div>
                          </div>
                        </li>
                        <li className="list-group-item">
                          <div className="row">
                            <div className="col">
                              <div className="d-flex">
                                <img src="./assets/images/avatar/avatar-3.jpg" alt="Cover" className="avatar-md rounded-circle" />
                                <div className="ml-3">
                                  <h5 className="font-weight-bold mb-1">Jenny Wilson</h5>
                                  <p className="mb-3">
                                    Krisitn Watsan like your comment on course
                                    Javascript Introduction!
                                </p>
                                  <span className="font-size-xs text-muted">
                                    <span><span className="fe fe-thumbs-up text-info mr-1" />Oct 9,</span>
                                    <span className="ml-1">1:56 PM</span>
                                  </span>
                                </div>
                              </div>
                              <a className="stretched-link" href="#!" />
                            </div>
                            <div className="col-auto text-center">
                              <a href="#!" className="badge-dot badge-secondary" data-toggle="tooltip" data-placement="top" title data-original-title="Mark as unread">
                              </a>
                            </div>
                          </div>
                        </li>
                        <li className="list-group-item">
                          <div className="row">
                            <div className="col">
                              <div className="d-flex">
                                <img src="./assets/images/avatar/avatar-4.jpg" alt="Cover" className="avatar-md rounded-circle" />
                                <div className="ml-3">
                                  <h5 className="font-weight-bold mb-1">Sina Ray</h5>
                                  <p className="mb-3">
                                    You earn new certificate for complete the Javascript
                                    Beginner course.
                                </p>
                                  <span className="font-size-xs text-muted">
                                    <span><span className="fe fe-award text-warning mr-1" />Oct 9,</span>
                                    <span className="ml-1">1:56 PM</span>
                                  </span>
                                </div>
                              </div>
                              <a className="stretched-link" href="#!" />
                            </div>
                            <div className="col-auto text-center">
                              <a href="#!" className="badge-dot badge-secondary" data-toggle="tooltip" data-placement="top" title data-original-title="Mark as unread">
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <div className="border-top px-3 pt-3 pb-0">
                        <a href="./pages/notification-history.html" className="text-link font-weight-semi-bold">See all
                        Notifications</a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="dropdown ml-2 d-inline-block">
                  <a className="rounded-circle" href="#!" role="button" id="dropdownUserProfile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <div className="avatar avatar-md avatar-indicators avatar-online">
                      <img alt="avatar" src="./assets/images/avatar/avatar-1.jpg" className="rounded-circle" />
                    </div>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownUserProfile">
                    <div className="dropdown-item">
                      <div className="d-flex">
                        <div className="avatar avatar-md avatar-indicators avatar-online">
                          <img alt="avatar" src="./assets/images/avatar/avatar-1.jpg" className="rounded-circle" />
                        </div>
                        <div className="ml-3 lh-1">
                          <h5 className="mb-1">Annette Black</h5>
                          <p className="mb-0 text-muted">annette@geeksui.com</p>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown-divider" />
                    <ul className="list-unstyled">
                      <li className="dropdown-submenu dropleft-lg">
                        <a className="dropdown-item dropdown-list-group-item dropdown-toggle" href="#!">
                          <i className="fe fe-circle mr-2" />Status
                      </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#!">
                              <span className="badge-dot bg-success mr-2" />Online
                          </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#!">
                              <span className="badge-dot bg-secondary mr-2" />Offline
                          </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#!">
                              <span className="badge-dot bg-warning mr-2" />Away
                          </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#!">
                              <span className="badge-dot bg-danger mr-2" />Busy
                          </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a className="dropdown-item" href="./pages/profile-edit.html">
                          <i className="fe fe-user mr-2" />Profile
                      </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="./pages/student-subscriptions.html">
                          <i className="fe fe-star mr-2" />Subscription
                      </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#!">
                          <i className="fe fe-settings mr-2" />Settings
                      </a>
                      </li>
                    </ul>
                    <div className="dropdown-divider" />
                    <ul className="list-unstyled">
                      <li>
                        <a onClick={e => openLogout(e)} className="dropdown-item" href="#">
                          <i className="fe fe-power mr-2" />Sign Out
                      </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </Fragment>
              :
              <li className="nav-item">
                <a onClick={e => openLogin(e)} className="nav-link" href="#">
                  Sign In
                </a>
              </li>
            }
          </ul>

        </div>
      </div>

      <Modal show={isLogin} onHide={closeLogin} centered>
        <Modal.Body>
          <div className="card-body p-3">
            <div className="mb-4">
              <a href="/"><img src="/assets/images/brand/logo/logo-icon.svg" className="mb-4" alt /></a>
              <h1 className="mb-1 font-weight-bold">Sign in</h1>
              <span>Don’t have an account? <a href="sign-up.html" className="ml-1">Sign up</a></span>
            </div>
            {/* Form */}
            <section>
              {/* Username */}
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" id="email" className="form-control" name="email" placeholder="Email address here" required />
              </div>
              {/* Password */}
              <div className="form-group">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" id="password" className="form-control" name="password" placeholder="**************" required />
              </div>
              {/* Checkbox */}
              <div className="d-lg-flex justify-content-between align-items-center mb-4">
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="rememberme" />
                  <label className="custom-control-label " htmlFor="rememberme">Remember me</label>
                </div>
                <div>
                  <a href="forget-password.html">Forgot your password?</a>
                </div>
              </div>
              <div>
                {/* Button */}
                <button onClick={handleLogin} type="button" className="btn btn-primary btn-block">Sign in</button>
              </div>
            </section>
          </div>
        </Modal.Body>
      </Modal>

      <Modal show={isLogout} onHide={closeLogout} centered size="sm">
        <Modal.Body>
          <div className="text-center">
            <h3 className="mb-4">Are you sure to Sign Out ?</h3>
            <Button variant="danger" onClick={handleLogout} className="mr-2">Yes</Button>
            <Button variant="secondary" onClick={closeLogout}>No</Button>
          </div>
        </Modal.Body>
      </Modal>
    </nav>
  )
}

export default Navigation;
