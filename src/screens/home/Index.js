import { Fragment } from 'react';
import { Link } from 'react-router-dom'

function Index(props) {

  console.log(props.token)
  
  const rekomendasi = [1,2,3]
  const popular = [1,2,3]
  const trending = [1,2,3]

  return (
    <Fragment>
      <div className="bg-primary">
        <div className="container">
          {/* Hero Section */}
          <div className="row align-items-center no-gutters">
            <div className="col-xl-5 col-lg-6 col-md-12">
              <div className="py-5 py-lg-0">
                <h1 className="text-white display-4 font-weight-bold">Welcome to Geeks UI Learning Application
                </h1>
                <p className="text-white-50 mb-4 lead">
                  Hand-picked Instructor and expertly crafted courses, designed for the modern students and entrepreneur.
                </p>
                <a href="pages/course-filter-list.html" className="btn btn-success">Browse Courses</a>
                {'  '}{'  '}{'  '}&nbsp;&nbsp;
                <a href="pages/sign-in.html" className="btn btn-white">Are You Instructor?</a>
              </div>
            </div>
            <div className=" col-xl-7 col-lg-6 col-md-12 text-lg-right text-center">
              <img src="assets/images/hero/hero-img.png" alt="Cover" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-4 shadow-sm">
        <div className="container">
          <div className="row align-items-center no-gutters">
            {/* Features */}
            <div className="col-xl-4 col-lg-4 col-md-6 mb-lg-0 mb-4">
              <div className="d-flex align-items-center">
                <span className="icon-sahpe icon-lg bg-light-warning rounded-circle text-center text-dark-warning font-size-md "> <i className="fe fe-video"> </i></span>
                <div className="ml-3">
                  <h4 className="mb-0 font-weight-semi-bold">30,000 online courses</h4>
                  <p className="mb-0">Enjoy a variety of fresh topics</p>
                </div>
              </div>
            </div>
            {/* Features */}
            <div className="col-xl-4 col-lg-4 col-md-6 mb-lg-0 mb-4">
              <div className="d-flex align-items-center">
                <span className="icon-sahpe icon-lg bg-light-warning rounded-circle text-center text-dark-warning font-size-md "> <i className="fe fe-users"> </i></span>
                <div className="ml-3">
                  <h4 className="mb-0 font-weight-semi-bold">Expert instruction</h4>
                  <p className="mb-0">Find the right instructor for you</p>
                </div>
              </div>
            </div>
            {/* Features */}
            <div className="col-xl-4 col-lg-4 col-md-12">
              <div className="d-flex align-items-center">
                <span className="icon-sahpe icon-lg bg-light-warning rounded-circle text-center text-dark-warning font-size-md "> <i className="fe fe-clock"> </i></span>
                <div className="ml-3">
                  <h4 className="mb-0 font-weight-semi-bold">Lifetime access</h4>
                  <p className="mb-0">Learn on your schedule</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-lg-4 pb-lg-3 pt-4 pb-6">
        <div className="container">
          <div className="row mb-4">
            <div className="col">
              <h2 className="mb-0">Recommended to you</h2>
            </div>
          </div>
          <div className="position-relative">
            <div className="row sliderFirst">
              {
                rekomendasi.map((item, i) => (
                  <div className="item col-sm-4">
                    {/* Card */}
                    <div className="card  mb-4 card-hover">
                      <Link to={`/detail/${i}`} className="card-img-top">
                        <img src="assets/images/course/course-react.jpg" alt="Cover" className="rounded-top card-img-top" />
                      </Link>
                      {/* Card Body */}
                      <div className="card-body">
                        <h4 className="mb-2 text-truncate-line-2 ">
                          <Link to={`/detail/${i}`} className="text-inherit">
                            How to easily create a website with React
                          </Link>
                        </h4>
                        {/* List */}
                        <ul className="mb-3 list-inline">
                          <li className="list-inline-item"><i className="far fa-clock mr-1" />3h 56m</li>
                          <li className="list-inline-item">
                            <svg className="mr-1 mt-n1" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect x={3} y={8} width={2} height={6} rx={1} fill="#754FFE" />
                              <rect x={7} y={5} width={2} height={9} rx={1} fill="#DBD8E9" />
                              <rect x={11} y={2} width={2} height={12} rx={1} fill="#DBD8E9" />
                            </svg> Beginner
                          </li>
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
                          <span className="font-size-xs text-muted">(7,700)</span>
                        </div>
                        {/* Price */}
                        <div className="lh-1 mt-3">
                          <span className="text-dark font-weight-bold">$600</span>
                          <del className="font-size-xs text-muted">$750</del>
                        </div>
                      </div>
                      {/* Card Footer */}
                      <div className="card-footer">
                        <div className="row align-items-center no-gutters">
                          <div className="col-auto">
                            <img src="assets/images/avatar/avatar-1.jpg" className="rounded-circle avatar-xs" alt="Cover" />
                          </div>
                          <div className="col ml-2">
                            <span>Morris Mccoy</span>
                          </div>
                          <div className="col-auto">
                            <a href="#!" className="text-muted bookmark">
                              <i className="fe fe-bookmark  " />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>

      <div className="pb-lg-3 pb-6">
        <div className="container">
          <div className="row mb-4">
            <div className="col">
              <h2 className="mb-0">Most Popular</h2>
            </div>
          </div>
          <div className="position-relative">
            <div className="row sliderFirst">
              {
                popular.map((item, i) => (
                  <div className="item col-sm-4">
                    {/* Card */}
                    <div className="card  mb-4 card-hover">
                      <a href="pages/course-single.html" className="card-img-top"><img src="assets/images/course/course-javascript.jpg" alt="Cover" className="rounded-top card-img-top" /></a>
                      {/* Card Body */}
                      <div className="card-body">
                        <h4 className="mb-2 text-truncate-line-2 "><a href="pages/course-single.html" className="text-inherit">How to
                            easily create a website with React</a></h4>
                        {/* List */}
                        <ul className="mb-3 list-inline">
                          <li className="list-inline-item"><i className="far fa-clock mr-1" />3h 56m</li>
                          <li className="list-inline-item">
                            <svg className="mr-1 mt-n1" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect x={3} y={8} width={2} height={6} rx={1} fill="#754FFE" />
                              <rect x={7} y={5} width={2} height={9} rx={1} fill="#DBD8E9" />
                              <rect x={11} y={2} width={2} height={12} rx={1} fill="#DBD8E9" />
                            </svg> Beginner
                          </li>
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
                          <span className="font-size-xs text-muted">(7,700)</span>
                        </div>
                        {/* Price */}
                        <div className="lh-1 mt-3">
                          <span className="text-dark font-weight-bold">$600</span>
                          <del className="font-size-xs text-muted">$750</del>
                        </div>
                      </div>
                      {/* Card Footer */}
                      <div className="card-footer">
                        <div className="row align-items-center no-gutters">
                          <div className="col-auto">
                            <img src="assets/images/avatar/avatar-1.jpg" className="rounded-circle avatar-xs" alt="Cover" />
                          </div>
                          <div className="col ml-2">
                            <span>Morris Mccoy</span>
                          </div>
                          <div className="col-auto">
                            <a href="#!" className="text-muted bookmark">
                              <i className="fe fe-bookmark  " />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>

      <div className="pb-lg-3 pb-6">
        <div className="container">
          <div className="row mb-4">
            <div className="col">
              <h2 className="mb-0">Trending</h2>
            </div>
          </div>
          <div className="position-relative">
            <div className="row sliderFirst">
              {
                trending.map((item, i) => (
                  <div className="item col-sm-4">
                    {/* Card */}
                    <div className="card  mb-4 card-hover">
                      <a href="pages/course-single.html" className="card-img-top"><img src="assets/images/course/course-python.jpg" alt="Cover" className="rounded-top card-img-top" /></a>
                      {/* Card Body */}
                      <div className="card-body">
                        <h4 className="mb-2 text-truncate-line-2 "><a href="pages/course-single.html" className="text-inherit">How to
                            easily create a website with React</a></h4>
                        {/* List */}
                        <ul className="mb-3 list-inline">
                          <li className="list-inline-item"><i className="far fa-clock mr-1" />3h 56m</li>
                          <li className="list-inline-item">
                            <svg className="mr-1 mt-n1" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect x={3} y={8} width={2} height={6} rx={1} fill="#754FFE" />
                              <rect x={7} y={5} width={2} height={9} rx={1} fill="#DBD8E9" />
                              <rect x={11} y={2} width={2} height={12} rx={1} fill="#DBD8E9" />
                            </svg> Beginner
                          </li>
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
                          <span className="font-size-xs text-muted">(7,700)</span>
                        </div>
                        {/* Price */}
                        <div className="lh-1 mt-3">
                          <span className="text-dark font-weight-bold">$600</span>
                          <del className="font-size-xs text-muted">$750</del>
                        </div>
                      </div>
                      {/* Card Footer */}
                      <div className="card-footer">
                        <div className="row align-items-center no-gutters">
                          <div className="col-auto">
                            <img src="assets/images/avatar/avatar-1.jpg" className="rounded-circle avatar-xs" alt="Cover" />
                          </div>
                          <div className="col ml-2">
                            <span>Morris Mccoy</span>
                          </div>
                          <div className="col-auto">
                            <a href="#!" className="text-muted bookmark">
                              <i className="fe fe-bookmark  " />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
      
    </Fragment>
  )
}

export default Index;
