import { Fragment } from "react";

export default function Tutup() {
  return (
    <Fragment>
      <div className="row">
        <div className="col-lg-4 col-md-12 col-12">
          {/* Card */}
          <div className="card mb-4">
            {/* Card body */}
            <div className="p-4">
              <span className="icon-shape icon-sm bg-light-primary text-dark-primary rounded-lg"><i className="fe fe-folder" /></span>
              <h2 className="h1 font-weight-bold mb-0 mt-4 lh-1">$3,210</h2>
              <p>Earning this month</p>
              <div className="progress bg-light-primary" style={{height: 2}}>
                <div className="progress-bar" role="progressbar" style={{width: '65%'}} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-12">
          {/* Card body */}
          <div className="card mb-4">
            {/* Card body */}
            <div className="p-4">
              <span className="icon-shape icon-sm bg-light-danger text-dark-danger rounded-lg"><i className="fe fe-shopping-bag" /></span>
              <h2 className="h1 font-weight-bold mb-0 mt-4 lh-1">
                $3,800.00
              </h2>
              <p>Account Balance</p>
              <div className="progress bg-light-danger" style={{height: 2}}>
                <div className="progress-bar bg-danger" role="progressbar" style={{width: '45%'}} aria-valuenow={45} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-12">
          {/* Card body */}
          <div className="card mb-4">
            {/* Card body */}
            <div className="p-4">
              <span className="icon-shape icon-sm bg-light-warning text-dark-warning rounded-lg"><i className="fe fe-send" /></span>
              <h2 className="h1 font-weight-bold mb-0 mt-4 lh-1">
                $10,800.00
              </h2>
              <p>Life Time Sales</p>
              <div className="progress bg-light-warning" style={{height: 2}}>
                <div className="progress-bar bg-warning" role="progressbar" style={{width: '35%'}} aria-valuenow={35} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-header border-bottom-0">
          <h3 className="mb-0 h4">Best Selling Courses</h3>
        </div>
        {/* Table */}
        <div className="table-responsive border-0">
          <table className="table mb-0 text-nowrap">
            <thead>
              <tr>
                <th scope="col" className="border-0">COURSES</th>
                <th scope="col" className="border-0">SALES</th>
                <th scope="col" className="border-0">AMOUNT</th>
                <th scope="col" className="border-0" />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="align-middle border-top-0">
                  <a href="#!">
                    <div className="d-lg-flex align-items-center">
                      <img src="../assets/images/course/course-laravel.jpg" alt className="rounded img-4by3-lg" />
                      <h5 className="mb-0 ml-lg-3 mt-lg-0 mt-2 text-primary-hover">
                        Building Scalable APIs with GraphQL
                      </h5>
                    </div>
                  </a>
                </td>
                <td className="align-middle border-top-0">34</td>
                <td className="align-middle border-top-0">$3,145.23</td>
                <td className="text-muted align-middle border-top-0">
                  <span className="dropdown">
                    <a className="text-muted text-decoration-none" href="#!" role="button" id="courseDropdown1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fe fe-more-vertical" />
                    </a>
                    <span className="dropdown-menu" aria-labelledby="courseDropdown1">
                      <span className="dropdown-header">Setting </span>
                      <a className="dropdown-item" href="#!"><i className="fe fe-edit dropdown-item-icon" />Edit</a>
                      <a className="dropdown-item" href="#!"><i className="fe fe-trash dropdown-item-icon" />Remove</a>
                    </span>
                  </span>
                </td>
              </tr>
              <tr>
                <td className="align-middle">
                  <a href="#!">
                    <div className="d-lg-flex align-items-center">
                      <img src="../assets/images/course/course-sass.jpg" alt className="rounded img-4by3-lg" />
                      <h5 className="mb-0 ml-lg-3 mt-lg-0 mt-2 text-primary-hover">
                        HTML5 Web Front End Development
                      </h5>
                    </div>
                  </a>
                </td>
                <td className="align-middle">30</td>
                <td className="align-middle">$2,611.82</td>
                <td className="text-muted align-middle">
                  <span className="dropdown">
                    <a className="text-muted text-decoration-none" href="#!" role="button" id="courseDropdown2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fe fe-more-vertical" />
                    </a>
                    <span className="dropdown-menu" aria-labelledby="courseDropdown2">
                      <span className="dropdown-header">Setting </span>
                      <a className="dropdown-item" href="#!"><i className="fe fe-edit dropdown-item-icon" />Edit</a>
                      <a className="dropdown-item" href="#!"><i className="fe fe-trash dropdown-item-icon" />Remove</a>
                    </span>
                  </span>
                </td>
              </tr>
              <tr>
                <td className="align-middle">
                  <a href="#!">
                    <div className="d-lg-flex align-items-center">
                      <img src="../assets/images/course/course-vue.jpg" alt className="rounded img-4by3-lg" />
                      <h5 className="mb-0 ml-lg-3 mt-lg-0 mt-2 text-primary-hover">
                        Learn JavaScript Courses from Scratch
                      </h5>
                    </div>
                  </a>
                </td>
                <td className="align-middle">26</td>
                <td className="align-middle">$2,372.19</td>
                <td className="text-muted align-middle">
                  <span className="dropdown">
                    <a className="text-muted text-decoration-none" href="#!" role="button" id="courseDropdown3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fe fe-more-vertical" />
                    </a>
                    <span className="dropdown-menu" aria-labelledby="courseDropdown3">
                      <span className="dropdown-header">Setting </span>
                      <a className="dropdown-item" href="#!"><i className="fe fe-edit dropdown-item-icon" />Edit</a>
                      <a className="dropdown-item" href="#!"><i className="fe fe-trash dropdown-item-icon" />Remove</a>
                    </span>
                  </span>
                </td>
              </tr>
              <tr>
                <td className="align-middle">
                  <a href="#!">
                    <div className="d-lg-flex align-items-center">
                      <img src="../assets/images/course/course-react.jpg" alt className="rounded img-4by3-lg" />
                      <h5 className="mb-0 ml-lg-3 mt-lg-0 mt-2 text-primary-hover">
                        Get Started: React Js Courses
                      </h5>
                    </div>
                  </a>
                </td>
                <td className="align-middle">20</td>
                <td className="align-middle">$1,145.23</td>
                <td className="text-muted align-middle">
                  <span className="dropdown">
                    <a className="text-muted text-decoration-none" href="#!" role="button" id="courseDropdown4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fe fe-more-vertical" />
                    </a>
                    <span className="dropdown-menu" aria-labelledby="courseDropdown4">
                      <span className="dropdown-header">Setting </span>
                      <a className="dropdown-item" href="#!"><i className="fe fe-edit dropdown-item-icon" />Edit</a>
                      <a className="dropdown-item" href="#!"><i className="fe fe-trash dropdown-item-icon" />Remove</a>
                    </span>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>


    </Fragment>
  )
}