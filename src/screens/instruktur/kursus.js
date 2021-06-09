export default function Kursus() {
  return (
    <div className="card mb-4">
      {/* Card header */}
      <div className="card-header">
        <h3 className="mb-0">Courses</h3>
        <span>Manage your courses and its update like live, draft and
          insight.</span>
      </div>
      {/* Card body */}
      <div className="card-body">
        {/* Form */}
        <form className="form-row">
          <div className="col-lg-9 col-md-7 col-12 mb-lg-0 mb-2">
            <input type="search" className="form-control" placeholder="Search Your Courses" />
          </div>
          <div className="col-lg-3 col-md-5 col-12">
            <div className="dropdown bootstrap-select" style={{width: '100%'}}><select className="selectpicker" data-width="100%">
                <option value>Date Created</option>
                <option value="Newest">Newest</option>
                <option value="High Rated">High Rated</option>
                <option value="Law Rated">Law Rated</option>
                <option value="High Earned">High Earned</option>
              </select><button type="button" tabIndex={-1} className="btn dropdown-toggle btn-light bs-placeholder" data-toggle="dropdown" role="combobox" aria-owns="bs-select-1" aria-haspopup="listbox" aria-expanded="false" title="Date Created"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Date Created</div></div> </div></button><div className="dropdown-menu "><div className="inner show" role="listbox" id="bs-select-1" tabIndex={-1}><ul className="dropdown-menu inner show" role="presentation" /></div></div></div>
          </div>
        </form>
      </div>
      {/* Table */}
      <div className="table-responsive border-0 overflow-y-hidden">
        <table className="table mb-0 text-nowrap">
          <thead>
            <tr>
              <th scope="col" className="border-0">Courses</th>
              <th scope="col" className="border-0">Students</th>
              <th scope="col" className="border-0">Rating</th>
              <th scope="col" className="border-0">Status</th>
              <th scope="col" className="border-0" />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-top-0">
                <div className="d-lg-flex">
                  <div>
                    <a href="#!">
                      <img src="../assets/images/course/course-wordpress.jpg" alt className="rounded img-4by3-lg" /></a>
                  </div>
                  <div className="ml-lg-3 mt-2 mt-lg-0">
                    <h4 className="mb-1 h5">
                      <a href="#!" className="text-inherit">
                        Create a Website with WordPress
                      </a>
                    </h4>
                    <ul className="list-inline font-size-xs mb-0">
                      <li className="list-inline-item">
                        <i className="far fa-clock mr-1" />1h 30m
                      </li>
                      <li className="list-inline-item">
                        <svg className="mr-1 mt-n1" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x={3} y={8} width={2} height={6} rx={1} fill="#754FFE" />
                          <rect x={7} y={5} width={2} height={9} rx={1} fill="#DBD8E9" />
                          <rect x={11} y={2} width={2} height={12} rx={1} fill="#DBD8E9" />
                        </svg>Beginner
                      </li>
                    </ul>
                  </div>
                </div>
              </td>
              <td className="border-top-0">11,200</td>
              <td className="border-top-0">
                <span className="text-warning">4.5<i className="mdi mdi-star" /></span>(3,250)
              </td>
              <td className="border-top-0">
                <span className="badge badge-success">Live</span>
              </td>
              <td className="text-muted border-top-0">
                <span className="dropdown">
                  <a className="text-muted text-decoration-none" href="#!" role="button" id="courseDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fe fe-more-vertical" />
                  </a>
                  <span className="dropdown-menu" aria-labelledby="courseDropdown">
                    <span className="dropdown-header">Setting </span>
                    <a className="dropdown-item" href="#!"><i className="fe fe-edit dropdown-item-icon" />Edit</a>
                    <a className="dropdown-item" href="#!"><i className="fe fe-trash dropdown-item-icon" />Remove</a>
                  </span>
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <div className="d-lg-flex">
                  <div>
                    <a href="#!">
                      <img src="../assets/images/course/course-laravel.jpg" alt className="rounded img-4by3-lg" /></a>
                  </div>
                  <div className="ml-lg-3 mt-2 mt-lg-0">
                    <h4 className="mb-1 h5">
                      <a href="#!" className="text-inherit">
                        The Ultimate Advanced Laravel..
                      </a>
                    </h4>
                    <ul className="list-inline font-size-xs mb-0">
                      <li className="list-inline-item">
                        <i className="far fa-clock mr-1" />3h 40m
                      </li>
                      <li className="list-inline-item">
                        <svg className="mr-1 mt-n1" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x={3} y={8} width={2} height={6} rx={1} fill="#754FFE" />
                          <rect x={7} y={5} width={2} height={9} rx={1} fill="#754FFE" />
                          <rect x={11} y={2} width={2} height={12} rx={1} fill="#754FFE" />
                        </svg>
                        Advance
                      </li>
                    </ul>
                  </div>
                </div>
              </td>
              <td>3200</td>
              <td>
                <span className="text-warning">4.5<i className="mdi mdi-star" /></span>(6,380)
              </td>
              <td>
                <span className="badge badge-success">Live</span>
              </td>
              <td className="text-muted">
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
              <td>
                <div className="d-lg-flex">
                  <div>
                    <a href="#!">
                      <img src="../assets/images/course/course-gatsby.jpg" alt className="rounded img-4by3-lg" /></a>
                  </div>
                  <div className="ml-lg-3 mt-2 mt-lg-0">
                    <h4 className="mb-1 h5">
                      <a href="#!" className="text-inherit">
                        Gatsby Tutorial - Fast Website...
                      </a>
                    </h4>
                    <ul className="list-inline font-size-xs mb-0">
                      <li className="list-inline-item">
                        <i className="far fa-clock mr-1" />4h 10m
                      </li>
                      <li className="list-inline-item">
                        <svg className="mr-1 mt-n1" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x={3} y={8} width={2} height={6} rx={1} fill="#754FFE" />
                          <rect x={7} y={5} width={2} height={9} rx={1} fill="#DBD8E9" />
                          <rect x={11} y={2} width={2} height={12} rx={1} fill="#DBD8E9" />
                        </svg>Beginner
                      </li>
                    </ul>
                    <div className="progress mt-3" style={{height: 3}}>
                      <div className="progress-bar bg-success" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                  </div>
                </div>
              </td>
              <td>0</td>
              <td>
                <span className="text-warning">4.5<i className="mdi mdi-star" /></span>(5,400)
              </td>
              <td><span className="badge badge-info">Darft</span></td>
              <td className="text-muted">
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
              <td>
                <div className="d-lg-flex">
                  <div>
                    <a href="#!"><img src="../assets/images/course/course-sass.jpg" alt className="rounded img-4by3-lg" /></a>
                  </div>
                  <div className="ml-lg-3 mt-2 mt-lg-0">
                    <h4 className="mb-1 h5">
                      <a href="#!" className="text-inherit">
                        Learn SCSS-Lang Courses - Basic
                      </a>
                    </h4>
                    <ul className="list-inline font-size-xs mb-0">
                      <li className="list-inline-item">
                        <i className="far fa-clock mr-1" />2h 59m
                      </li>
                      <li className="list-inline-item">
                        <svg className="mr-1 mt-n1" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x={3} y={8} width={2} height={6} rx={1} fill="#754FFE" />
                          <rect x={7} y={5} width={2} height={9} rx={1} fill="#754FFE" />
                          <rect x={11} y={2} width={2} height={12} rx={1} fill="#754FFE" />
                        </svg>
                        Advance
                      </li>
                    </ul>
                  </div>
                </div>
              </td>
              <td>0</td>
              <td>
                <span className="text-warning">4.5<i className="mdi mdi-star" /></span>(7,800)
              </td>
              <td>
                <span className="badge badge-warning">Pending</span>
              </td>
              <td className="text-muted">
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
            <tr>
              <td>
                <div className="d-lg-flex">
                  <div>
                    <a href="#!"><img src="../assets/images/course/course-gatsby.jpg" alt className="rounded img-4by3-lg" /></a>
                  </div>
                  <div className="ml-lg-3 mt-2 mt-lg-0">
                    <h4 className="mb-1 h5">
                      <a href="#!" className="text-inherit">
                        Gatsby Tutorial - Fast Website
                      </a>
                    </h4>
                    <ul className="list-inline font-size-xs mb-0">
                      <li className="list-inline-item">
                        <i className="far fa-clock mr-1" />4h 10m
                      </li>
                      <li className="list-inline-item">
                        <svg className="mr-1 mt-n1" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x={3} y={8} width={2} height={6} rx={1} fill="#754FFE" />
                          <rect x={7} y={5} width={2} height={9} rx={1} fill="#DBD8E9" />
                          <rect x={11} y={2} width={2} height={12} rx={1} fill="#DBD8E9" />
                        </svg>Beginner
                      </li>
                    </ul>
                  </div>
                </div>
              </td>
              <td>23</td>
              <td>
                <span className="text-warning">4.5<i className="mdi mdi-star" /></span>(9,200)
              </td>
              <td>
                <span className="badge badge-danger">Deleted</span>
              </td>
              <td className="text-muted">
                <span className="dropdown">
                  <a className="text-muted text-decoration-none" href="#!" id="courseDropdown5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fe fe-more-vertical" />
                  </a>
                  <span className="dropdown-menu" aria-labelledby="courseDropdown5">
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

  )
}