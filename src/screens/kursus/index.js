import { Fragment } from 'react'
import {
  Link
} from 'react-router-dom';

export default function KursusIndex(props) {

  const tokenKu = props.token

  return (
    <Fragment>
      <div className="pt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12">
              {/* Bg */}
              <div className=" pt-16 rounded-top " style={{background: 'url(/assets/images/background/profile-bg.jpg) no-repeat', backgroundSize: 'cover'}}>
              </div>
              <div className="d-flex align-items-end justify-content-between bg-white px-4  pt-2 pb-4 rounded-bottom shadow-sm ">
                <div className="d-flex align-items-center">
                  <div className="mr-2 position-relative d-flex justify-content-end align-items-end mt-n5">
                    <img src="/assets/images/avatar/avatar-3.jpg" className="avatar-xl rounded-circle border-width-4 border-white" alt />
                  </div>
                  <div className="lh-1">
                    <h2 className="mb-0">Stella Flores
                      <a href="#!" className="text-decoration-none" data-toggle="tooltip" data-placement="top" title data-original-title="Beginner">
                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x={3} y={8} width={2} height={6} rx={1} fill="#754FFE" />
                          <rect x={7} y={5} width={2} height={9} rx={1} fill="#DBD8E9" />
                          <rect x={11} y={2} width={2} height={12} rx={1} fill="#DBD8E9" />
                        </svg>
                      </a>
                    </h2>
                    <p className=" mb-0 d-block">@stellaflores</p>
                  </div>
                </div>
                <div>
                  <a href="/profil" className="btn btn-primary btn-sm d-none d-md-block">Profil</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-5 py-md-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* Side Navbar */}
              <ul className="nav nav-lb-tab mb-6" id="tab" role="tablist">
                <li className="nav-item ml-0" role="presentation">
                  <a className="nav-link active " id="bookmarked-tab" data-toggle="pill" href="#bookmarked" role="tab" aria-controls="bookmarked" aria-selected="true">Bookmarked </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link" id="currentlyLearning-tab" data-toggle="pill" href="#currentlyLearning" role="tab" aria-controls="currentlyLearning" aria-selected="false">Learning</a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link" id="path-tab" data-toggle="pill" href="#path" role="tab" aria-controls="path" aria-selected="false">
                    Path</a>
                </li>
              </ul>
              {/* Tab content */}
              <div className="tab-content" id="tabContent">
                <div className="tab-pane fade show active" id="bookmarked" role="tabpanel" aria-labelledby="bookmarked-tab">
                  <div className="row">
                    <div className="col-lg-3 col-md-6 col-12">
                      {/* Card */}
                      <div className="card  mb-4 card-hover">
                        <a href="#!" className="card-img-top"><img src="../assets/images/course/course-react.jpg" alt className="card-img-top rounded-top" /></a>
                        {/* Card body */}
                        <div className="card-body">
                          <h3 className="h4 mb-2 text-truncate-line-2 "><a href="#!" className="text-inherit">How to easily create a
                              website with React</a>
                          </h3>
                          {/* List inline */}
                          <ul className="mb-3  list-inline">
                            <li className="list-inline-item"><i className="far fa-clock mr-1" />3h 56m
                            </li>
                            <li className="list-inline-item"><svg className="mr-1 mt-n1" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x={3} y={8} width={2} height={6} rx={1} fill="#754FFE">
                                </rect>
                                <rect x={7} y={5} width={2} height={9} rx={1} fill="#DBD8E9">
                                </rect>
                                <rect x={11} y={2} width={2} height={12} rx={1} fill="#DBD8E9">
                                </rect>
                              </svg>Beginner </li>
                          </ul>
                          <div className="lh-1">
                            <span>
                              <i className="mdi mdi-star text-warning mr-n1" />
                              <i className="mdi mdi-star text-warning mr-n1" />
                              <i className="mdi mdi-star text-warning mr-n1" />
                              <i className="mdi mdi-star text-warning mr-n1" />
                              <i className="mdi mdi-star text-warning" />
                            </span>
                            <span className="text-warning">4.5</span>
                            <span className="font-size-xs text-muted">(9,300)</span>
                          </div>
                        </div>
                        {/* Card footer */}
                        <div className="card-footer">
                          <div className="row align-items-center no-gutters">
                            <div className="col-auto">
                              <img src="../assets/images/avatar/avatar-3.jpg" className="rounded-circle avatar-xs" alt />
                            </div>
                            <div className="col ml-2">
                              <span>Morris Mccoy</span>
                            </div>
                            <div className="col-auto">
                              <a href="#!" className="removeBookmark">
                                <i className="fas fa-bookmark" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                      {/* Card */}
                      <div className="card  mb-4 card-hover">
                        <a href="#!" className="card-img-top"><img src="../assets/images/course/course-graphql.jpg" alt className="card-img-top rounded-top" /></a>
                        {/* Card body */}
                        <div className="card-body">
                          <h3 className="h4 mb-2 text-truncate-line-2 "><a href="#!" className="text-inherit">GraphQL: introduction
                              to graphQL for
                              beginners</a></h3>
                          {/* List inline */}
                          <ul className="mb-3 list-inline">
                            <li className="list-inline-item"><i className="far fa-clock mr-1" />2h 46m
                            </li>
                            <li className="list-inline-item"><svg className="mr-1 mt-n1" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x={3} y={8} width={2} height={6} rx={1} fill="#754FFE">
                                </rect>
                                <rect x={7} y={5} width={2} height={9} rx={1} fill="#754FFE">
                                </rect>
                                <rect x={11} y={2} width={2} height={12} rx={1} fill="#754FFE">
                                </rect>
                              </svg>Advance </li>
                          </ul>
                          <div className="lh-1">
                            <span>
                              <i className="mdi mdi-star text-warning mr-n1" />
                              <i className="mdi mdi-star text-warning mr-n1" />
                              <i className="mdi mdi-star text-warning mr-n1" />
                              <i className="mdi mdi-star text-warning mr-n1" />
                              <i className="mdi mdi-star text-warning" />
                            </span>
                            <span className="text-warning">4.5</span>
                            <span className="font-size-xs text-muted">(7,800)</span>
                          </div>
                        </div>
                        {/* Card footer */}
                        <div className="card-footer">
                          <div className="row align-items-center no-gutters">
                            <div className="col-auto">
                              <img src="../assets/images/avatar/avatar-2.jpg" className="rounded-circle avatar-xs" alt />
                            </div>
                            <div className="col ml-2">
                              <span>Ted Hawkins</span>
                            </div>
                            <div className="col-auto">
                              <a href="#!" className="removeBookmark">
                                <i className="fas fa-bookmark" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                      {/* Card */}
                      <div className="card  mb-4 card-hover">
                        <a href="#!" className="card-img-top"><img src="../assets/images/course/course-angular.jpg" alt className="card-img-top rounded-top" /></a>
                        {/* Card body */}
                        <div className="card-body">
                          <h3 className="h4 mb-2 text-truncate-line-2 "><a href="#!" className="text-inherit">Angular - the complete
                              guide for beginner</a>
                          </h3>
                          {/* List inline */}
                          <ul className="mb-3 list-inline">
                            <li className="list-inline-item"><i className="far fa-clock mr-1" />1h 30m
                            </li>
                            <li className="list-inline-item"><svg className="mr-1 mt-n1" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x={3} y={8} width={2} height={6} rx={1} fill="#754FFE">
                                </rect>
                                <rect x={7} y={5} width={2} height={9} rx={1} fill="#DBD8E9">
                                </rect>
                                <rect x={11} y={2} width={2} height={12} rx={1} fill="#DBD8E9">
                                </rect>
                              </svg>Beginner </li>
                          </ul>
                          <div className="lh-1">
                            <span>
                              <i className="mdi mdi-star text-warning mr-n1" />
                              <i className="mdi mdi-star text-warning mr-n1" />
                              <i className="mdi mdi-star text-warning mr-n1" />
                              <i className="mdi mdi-star text-warning mr-n1" />
                              <i className="mdi mdi-star text-warning" />
                            </span>
                            <span className="text-warning">4.5</span>
                            <span className="font-size-xs text-muted">(8,245)</span>
                          </div>
                        </div>
                        {/* Card footer */}
                        <div className="card-footer">
                          <div className="row align-items-center no-gutters">
                            <div className="col-auto">
                              <img src="../assets/images/avatar/avatar-4.jpg" className="rounded-circle avatar-xs" alt />
                            </div>
                            <div className="col ml-2">
                              <span>Juanita Bell</span>
                            </div>
                            <div className="col-auto">
                              <a href="#!" className="removeBookmark">
                                <i className="fas fa-bookmark" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                      {/* Card */}
                      <div className="card  mb-4 card-hover">
                        <a href="#!" className="card-img-top"><img src="../assets/images/course/course-python.jpg" alt className="card-img-top rounded-top" /></a>
                        {/* Card body */}
                        <div className="card-body">
                          <h3 className="h4 mb-2 text-truncate-line-2 "><a href="#!" className="text-inherit">The Python Course:
                              build web application</a>
                          </h3>
                          {/* List inline */}
                          <ul className="mb-3  list-inline">
                            <li className="list-inline-item"><i className="far fa-clock mr-1" />2h 30m
                            </li>
                            <li className="list-inline-item"><svg className="mr-1 mt-n1" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x={3} y={8} width={2} height={6} rx={1} fill="#754FFE">
                                </rect>
                                <rect x={7} y={5} width={2} height={9} rx={1} fill="#754FFE">
                                </rect>
                                <rect x={11} y={2} width={2} height={12} rx={1} fill="#DBD8E9">
                                </rect>
                              </svg>Intermediate </li>
                          </ul>
                          <div className="lh-1">
                            <span>
                              <i className="mdi mdi-star text-warning mr-n1" />
                              <i className="mdi mdi-star text-warning mr-n1" />
                              <i className="mdi mdi-star text-warning mr-n1" />
                              <i className="mdi mdi-star text-warning mr-n1" />
                              <i className="mdi mdi-star text-warning" />
                            </span>
                            <span className="text-warning">4.5</span>
                            <span className="font-size-xs text-muted">(3,245)</span>
                          </div>
                        </div>
                        {/* Card Footer */}
                        <div className="card-footer">
                          <div className="row align-items-center no-gutters">
                            <div className="col-auto">
                              <img src="../assets/images/avatar/avatar-5.jpg" className="rounded-circle avatar-xs" alt />
                            </div>
                            <div className="col ml-2">
                              <span>Claire Robertson</span>
                            </div>
                            <div className="col-auto">
                              <a href="#!" className="removeBookmark">
                                <i className="fas fa-bookmark" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-3 col-md-6 col-12">
                      {/* Card */}
                      <div className="card  mb-4 card-hover">
                        <a href="#!" className="card-img-top"><img src="../assets/images/course/course-gatsby.jpg" alt className="card-img-top rounded-top" /></a>
                        {/* Card body */}
                        <div className="card-body">
                          <h3 className="h4 mb-2 text-truncate-line-2 "><a href="#!" className="text-inherit">Gatsby JS: build blog
                              with GraphQL and
                              React</a></h3>
                          {/* List inline */}
                          <ul className="mb-3  list-inline">
                            <li className="list-inline-item"><i className="far fa-clock mr-1" />3h 56m
                            </li>
                            <li className="list-inline-item"><svg className="mr-1 mt-n1" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x={3} y={8} width={2} height={6} rx={1} fill="#754FFE" />
                                <rect x={7} y={5} width={2} height={9} rx={1} fill="#DBD8E9" />
                                <rect x={11} y={2} width={2} height={12} rx={1} fill="#DBD8E9" />
                              </svg>Beginner </li>
                          </ul>
                          <div className="lh-1">
                            <span>
                              <i className="mdi mdi-star text-warning mr-n1" />
                              <i className="mdi mdi-star text-warning mr-n1" />
                              <i className="mdi mdi-star text-warning mr-n1" />
                              <i className="mdi mdi-star text-warning mr-n1" />
                              <i className="mdi mdi-star text-warning" />
                            </span>
                            <span className="text-warning">4.5</span>
                            <span className="font-size-xs text-muted">(5,300)</span>
                          </div>
                        </div>
                        {/* Card Footer */}
                        <div className="card-footer">
                          <div className="row align-items-center no-gutters">
                            <div className="col-auto">
                              <img src="../assets/images/avatar/avatar-5.jpg" className="rounded-circle avatar-xs" alt />
                            </div>
                            <div className="col ml-2">
                              <span>Morris Mccoy</span>
                            </div>
                            <div className="col-auto">
                              <a href="#!" className="removeBookmark">
                                <i className="fas fa-bookmark" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                      {/* Card */}
                      <div className="card mb-4 card-hover">
                        <a href="#!" className="card-img-top"><img src="../assets/images/course/course-javascript.jpg" alt className="card-img-top rounded-top" /></a>
                        {/* Card body */}
                        <div className="card-body">
                          <h3 className="h4 mb-2 text-truncate-line-2 "><a href="#!" className="text-inherit">JavaScript: modern
                              javaScript from the
                              beginning</a></h3>
                          {/* List inline */}
                          <ul className="mb-3 list-inline">
                            <li className="list-inline-item"><i className="far fa-clock mr-1" />2h 46m
                            </li>
                            <li className="list-inline-item"><svg className="mr-1 mt-n1" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x={3} y={8} width={2} height={6} rx={1} fill="#754FFE" />
                                <rect x={7} y={5} width={2} height={9} rx={1} fill="#754FFE" />
                                <rect x={11} y={2} width={2} height={12} rx={1} fill="#754FFE" />
                              </svg>Advance </li>
                          </ul>
                          <div className="lh-1">
                            <span>
                              <i className="mdi mdi-star text-warning mr-n1" />
                              <i className="mdi mdi-star text-warning mr-n1" />
                              <i className="mdi mdi-star text-warning mr-n1" />
                              <i className="mdi mdi-star text-warning mr-n1" />
                              <i className="mdi mdi-star text-warning" />
                            </span>
                            <span className="text-warning">4.5</span>
                            <span className="font-size-xs text-muted">(9,300)</span>
                          </div>
                        </div>
                        {/* Card Footer */}
                        <div className="card-footer">
                          <div className="row align-items-center no-gutters">
                            <div className="col-auto">
                              <img src="../assets/images/avatar/avatar-6.jpg" className="rounded-circle avatar-xs" alt />
                            </div>
                            <div className="col ml-2">
                              <span>Ted Hawkins</span>
                            </div>
                            <div className="col-auto">
                              <a href="#!" className="removeBookmark">
                                <i className="fas fa-bookmark" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                      {/* Card */}
                      <div className="card  mb-4 card-hover">
                        <a href="#!" className="card-img-top"><img src="../assets/images/course/course-css.jpg" alt className="card-img-top rounded-top" /></a>
                        {/* Card body */}
                        <div className="card-body">
                          <h3 className="h4 mb-2 text-truncate-line-2 "><a href="#!" className="text-inherit">CSS: ultimate CSS
                              course from beginner to
                              advanced</a></h3>
                          {/* List inline */}
                          <ul className="mb-3  list-inline">
                            <li className="list-inline-item"><i className="far fa-clock mr-1" />1h 30m
                            </li>
                            <li className="list-inline-item"><svg className="mr-1 mt-n1" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x={3} y={8} width={2} height={6} rx={1} fill="#754FFE" />
                                <rect x={7} y={5} width={2} height={9} rx={1} fill="#DBD8E9" />
                                <rect x={11} y={2} width={2} height={12} rx={1} fill="#DBD8E9" />
                              </svg>Beginner </li>
                          </ul>
                          <div className="lh-1">
                            <span>
                              <i className="mdi mdi-star text-warning mr-n1" />
                              <i className="mdi mdi-star text-warning mr-n1" />
                              <i className="mdi mdi-star text-warning mr-n1" />
                              <i className="mdi mdi-star text-warning mr-n1" />
                              <i className="mdi mdi-star text-warning" />
                            </span>
                            <span className="text-warning">4.5</span>
                            <span className="font-size-xs text-muted">(5,568)</span>
                          </div>
                        </div>
                        {/* Card Footer */}
                        <div className="card-footer">
                          <div className="row align-items-center no-gutters">
                            <div className="col-auto">
                              <img src="../assets/images/avatar/avatar-7.jpg" className="rounded-circle avatar-xs" alt />
                            </div>
                            <div className="col ml-2">
                              <span>Juanita Bell</span>
                            </div>
                            <div className="col-auto">
                              <a href="#!" className="removeBookmark">
                                <i className="fas fa-bookmark" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                      {/* Card */}
                      <div className="card  mb-4 card-hover">
                        <a href="#!" className="card-img-top"><img src="../assets/images/course/course-wordpress.jpg" alt className="card-img-top rounded-top" /></a>
                        {/* Card body */}
                        <div className="card-body">
                          <h3 className="h4 mb-2 text-truncate-line-2 "><a href="#!" className="text-inherit">Wordpress: complete
                              WordPress theme &amp; plugin
                              dvelopment course</a></h3>
                          {/* List inline */}
                          <ul className="mb-3 list-inline">
                            <li className="list-inline-item"><i className="far fa-clock mr-1" />2h 30m
                            </li>
                            <li className="list-inline-item"><svg className="mr-1 mt-n1" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x={3} y={8} width={2} height={6} rx={1} fill="#754FFE" />
                                <rect x={7} y={5} width={2} height={9} rx={1} fill="#754FFE" />
                                <rect x={11} y={2} width={2} height={12} rx={1} fill="#DBD8E9" />
                              </svg>Intermediate </li>
                          </ul>
                          <div className="lh-1">
                            <span>
                              <i className="mdi mdi-star text-warning mr-n1" />
                              <i className="mdi mdi-star text-warning mr-n1" />
                              <i className="mdi mdi-star text-warning mr-n1" />
                              <i className="mdi mdi-star text-warning mr-n1" />
                              <i className="mdi mdi-star text-warning" />
                            </span>
                            <span className="text-warning">4.5</span>
                            <span className="font-size-xs text-muted">(6,245)</span>
                          </div>
                        </div>
                        {/* Card footer */}
                        <div className="card-footer">
                          <div className="row align-items-center no-gutters">
                            <div className="col-auto">
                              <img src="../assets/images/avatar/avatar-8.jpg" className="rounded-circle avatar-xs" alt />
                            </div>
                            <div className="col ml-2">
                              <span>Claire Robertson</span>
                            </div>
                            <div className="col-auto">
                              <a href="#!" className="removeBookmark">
                                <i className="fas fa-bookmark" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="offset-lg-3 col-lg-6 col-md-12 col-12 text-center mt-5">
                      <p>You’ve reached the end of the list</p>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="currentlyLearning" role="tabpanel" aria-labelledby="currentlyLearning-tab">
                  <div className="row">
                    <div className="col-lg-3 col-md-6 col-12">
                      {/* Card */}
                      <div className="card  mb-4 card-hover">
                        <a href="#!" className="card-img-top"><img src="../assets/images/course/course-react.jpg" alt className="card-img-top rounded-top" /></a>
                        {/* Card body */}
                        <div className="card-body">
                          <h3 className="h4 mb-2 text-truncate-line-2 "><a href="#!" className="text-inherit">How to easily create a
                              website with React</a>
                          </h3>
                          {/* List inline */}
                          <ul className="mb-3  list-inline">
                            <li className="list-inline-item"><i className="far fa-clock mr-1" />3h 56m
                            </li>
                            <li className="list-inline-item"><svg className="mr-1 mt-n1" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x={3} y={8} width={2} height={6} rx={1} fill="#754FFE">
                                </rect>
                                <rect x={7} y={5} width={2} height={9} rx={1} fill="#DBD8E9">
                                </rect>
                                <rect x={11} y={2} width={2} height={12} rx={1} fill="#DBD8E9">
                                </rect>
                              </svg>Beginner </li>
                          </ul>
                          <div className="lh-1">
                            <span>
                              <i className="mdi mdi-star text-warning mr-n1" />
                              <i className="mdi mdi-star text-warning mr-n1" />
                              <i className="mdi mdi-star text-warning mr-n1" />
                              <i className="mdi mdi-star text-warning mr-n1" />
                              <i className="mdi mdi-star text-warning" />
                            </span>
                            <span className="text-warning">4.5</span>
                            <span className="font-size-xs text-muted">(6,300)</span>
                          </div>
                        </div>
                        {/* Card footer */}
                        <div className="card-footer">
                          <div className="row align-items-center no-gutters">
                            <div className="col-auto">
                              <img src="../assets/images/avatar/avatar-6.jpg" className="rounded-circle avatar-xs" alt />
                            </div>
                            <div className="col ml-2">
                              <span>Morris Mccoy</span>
                            </div>
                            <div className="col-auto">
                              <a href="#!" className="removeBookmark">
                                <i className="fas fa-bookmark" />
                              </a>
                            </div>
                          </div>
                          <div className="progress mt-3" style={{height: 5}}>
                            <div className="progress-bar bg-success" role="progressbar" style={{width: '45%'}} aria-valuenow={45} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                      {/* Card */}
                      <div className="card mb-4 card-hover">
                        <a href="#!" className="card-img-top"><img src="../assets/images/course/course-graphql.jpg" alt className="card-img-top rounded-top" /></a>
                        {/* Card body */}
                        <div className="card-body">
                          <h3 className="h4 mb-2 text-truncate-line-2 "><a href="#!" className="text-inherit">GraphQL: introduction
                              to graphQL for
                              beginners</a></h3>
                          {/* List inline */}
                          <ul className="mb-3 list-inline">
                            <li className="list-inline-item"><i className="far fa-clock mr-1" />2h 46m
                            </li>
                            <li className="list-inline-item"><svg className="mr-1 mt-n1" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x={3} y={8} width={2} height={6} rx={1} fill="#754FFE">
                                </rect>
                                <rect x={7} y={5} width={2} height={9} rx={1} fill="#754FFE">
                                </rect>
                                <rect x={11} y={2} width={2} height={12} rx={1} fill="#754FFE">
                                </rect>
                              </svg>Advance </li>
                          </ul>
                          <div className="lh-1">
                            <span>
                              <i className="mdi mdi-star text-warning mr-n1" />
                              <i className="mdi mdi-star text-warning mr-n1" />
                              <i className="mdi mdi-star text-warning mr-n1" />
                              <i className="mdi mdi-star text-warning mr-n1" />
                              <i className="mdi mdi-star text-warning" />
                            </span>
                            <span className="text-warning">4.5</span>
                            <span className="font-size-xs text-muted">(4,300)</span>
                          </div>
                        </div>
                        {/* Card footer */}
                        <div className="card-footer">
                          <div className="row align-items-center no-gutters">
                            <div className="col-auto">
                              <img src="../assets/images/avatar/avatar-7.jpg" className="rounded-circle avatar-xs" alt />
                            </div>
                            <div className="col ml-2">
                              <span>Ted Hawkins</span>
                            </div>
                            <div className="col-auto">
                              <a href="#!" className="removeBookmark">
                                <i className="fas fa-bookmark" />
                              </a>
                            </div>
                          </div>
                          <div className="progress mt-3" style={{height: 5}}>
                            <div className="progress-bar bg-success" role="progressbar" style={{width: '95%'}} aria-valuenow={95} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                      {/* Card */}
                      <div className="card  mb-4 card-hover">
                        <a href="#!" className="card-img-top"><img src="../assets/images/course/course-angular.jpg" alt className="card-img-top rounded-top" /></a>
                        {/* Card body */}
                        <div className="card-body">
                          <h3 className="h4 mb-2 text-truncate-line-2 "><a href="#!" className="text-inherit">Angular - the complete
                              guide for beginner</a>
                          </h3>
                          {/* List inline */}
                          <ul className="mb-3  list-inline">
                            <li className="list-inline-item"><i className="far fa-clock mr-1" />1h 30m
                            </li>
                            <li className="list-inline-item"><svg className="mr-1 mt-n1" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x={3} y={8} width={2} height={6} rx={1} fill="#754FFE">
                                </rect>
                                <rect x={7} y={5} width={2} height={9} rx={1} fill="#DBD8E9">
                                </rect>
                                <rect x={11} y={2} width={2} height={12} rx={1} fill="#DBD8E9">
                                </rect>
                              </svg>Beginner </li>
                          </ul>
                          <div className="lh-1">
                            <span>
                              <i className="mdi mdi-star text-warning mr-n1" />
                              <i className="mdi mdi-star text-warning mr-n1" />
                              <i className="mdi mdi-star text-warning mr-n1" />
                              <i className="mdi mdi-star text-warning mr-n1" />
                              <i className="mdi mdi-star text-warning" />
                            </span>
                            <span className="text-warning">4.5</span>
                            <span className="font-size-xs text-muted">(5,410)</span>
                          </div>
                        </div>
                        {/* Card footer */}
                        <div className="card-footer">
                          <div className="row align-items-center no-gutters">
                            <div className="col-auto">
                              <img src="../assets/images/avatar/avatar-8.jpg" className="rounded-circle avatar-xs" alt />
                            </div>
                            <div className="col ml-2">
                              <span>Juanita Bell</span>
                            </div>
                            <div className="col-auto">
                              <a href="#!" className="removeBookmark">
                                <i className="fas fa-bookmark" />
                              </a>
                            </div>
                          </div>
                          <div className="progress mt-3" style={{height: 5}}>
                            <div className="progress-bar bg-success" role="progressbar" style={{width: '65%'}} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                      {/* Card */}
                      <div className="card  mb-4 card-hover">
                        <a href="#!" className="card-img-top"><img src="../assets/images/course/course-python.jpg" alt className="card-img-top rounded-top" /></a>
                        {/* Card body */}
                        <div className="card-body">
                          <h3 className="h4 mb-2 text-truncate-line-2 "><a href="#!" className="text-inherit">The Python Course:
                              build web application</a>
                          </h3>
                          {/* List inline */}
                          <ul className="mb-3  list-inline">
                            <li className="list-inline-item"><i className="far fa-clock mr-1" />2h 30m
                            </li>
                            <li className="list-inline-item"><svg className="mr-1 mt-n1" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x={3} y={8} width={2} height={6} rx={1} fill="#754FFE">
                                </rect>
                                <rect x={7} y={5} width={2} height={9} rx={1} fill="#754FFE">
                                </rect>
                                <rect x={11} y={2} width={2} height={12} rx={1} fill="#DBD8E9">
                                </rect>
                              </svg>Intermediate </li>
                          </ul>
                          <div className="lh-1">
                            <span>
                              <i className="mdi mdi-star text-warning mr-n1" />
                              <i className="mdi mdi-star text-warning mr-n1" />
                              <i className="mdi mdi-star text-warning mr-n1" />
                              <i className="mdi mdi-star text-warning mr-n1" />
                              <i className="mdi mdi-star text-warning" />
                            </span>
                            <span className="text-warning">4.5</span>
                            <span className="font-size-xs text-muted">(9,300)</span>
                          </div>
                        </div>
                        {/* Card footer */}
                        <div className="card-footer">
                          <div className="row align-items-center no-gutters">
                            <div className="col-auto">
                              <img src="../assets/images/avatar/avatar-9.jpg" className="rounded-circle avatar-xs" alt />
                            </div>
                            <div className="col ml-2">
                              <span>Claire Robertson</span>
                            </div>
                            <div className="col-auto">
                              <a href="#!" className="removeBookmark">
                                <i className="fas fa-bookmark" />
                              </a>
                            </div>
                          </div>
                          <div className="progress mt-3" style={{height: 5}}>
                            <div className="progress-bar bg-success" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                      {/* Card */}
                      <div className="card  mb-4 card-hover">
                        <a href="#!" className="card-img-top"><img src="../assets/images/course/course-python.jpg" alt className="card-img-top rounded-top" /></a>
                        {/* Card body */}
                        <div className="card-body">
                          <h3 className="h4 mb-2 text-truncate-line-2 "><a href="#!" className="text-inherit">The Python Course:
                              build web application</a>
                          </h3>
                          {/* List inline */}
                          <ul className="mb-3  list-inline">
                            <li className="list-inline-item"><i className="far fa-clock mr-1" />2h 30m
                            </li>
                            <li className="list-inline-item"><svg className="mr-1 mt-n1" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x={3} y={8} width={2} height={6} rx={1} fill="#754FFE">
                                </rect>
                                <rect x={7} y={5} width={2} height={9} rx={1} fill="#754FFE">
                                </rect>
                                <rect x={11} y={2} width={2} height={12} rx={1} fill="#DBD8E9">
                                </rect>
                              </svg>Intermediate </li>
                          </ul>
                          <div className="lh-1">
                            <span>
                              <i className="mdi mdi-star text-warning mr-n1" />
                              <i className="mdi mdi-star text-warning mr-n1" />
                              <i className="mdi mdi-star text-warning mr-n1" />
                              <i className="mdi mdi-star text-warning mr-n1" />
                              <i className="mdi mdi-star text-warning" />
                            </span>
                            <span className="text-warning">4.5</span>
                            <span className="font-size-xs text-muted">(13,245)</span>
                          </div>
                        </div>
                        {/* Card footer */}
                        <div className="card-footer">
                          <div className="row align-items-center no-gutters">
                            <div className="col-auto">
                              <img src="../assets/images/avatar/avatar-9.jpg" className="rounded-circle avatar-xs" alt />
                            </div>
                            <div className="col ml-2">
                              <span>Claire Robertson</span>
                            </div>
                            <div className="col-auto">
                              <a href="#!" className="removeBookmark">
                                <i className="fas fa-bookmark" />
                              </a>
                            </div>
                          </div>
                          <div className="progress mt-3" style={{height: 5}}>
                            <div className="progress-bar bg-success" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="offset-lg-3 col-lg-6 col-md-12 col-12 text-center mt-5">
                      <p>You’ve reached the end of the list</p>
                    </div>
                  </div>
                </div>
                {/* Path */}
                <div className="tab-pane fade" id="path" role="tabpanel" aria-labelledby="path-tab">
                  <div className="row  d-flex justify-content-center text-center">
                    <div className="col-xl-5 col-lg-5 col-md-12 col-12">
                      <div className="py-6">
                        <img src="/assets/images/svg/path-img.svg" alt className="img-fluid" />
                        <div className="mt-4 ">
                          <h2 className="display-4 font-weight-bold">Coming Soon</h2>
                          <p className="mb-5">The designer working on our design so for now we schedule it
                          to come soon.
                            we release it soon for you. Thank you for watching.</p>
                          
                          <Link to="/" className="btn btn-primary">
                            Back To Dashboard
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}