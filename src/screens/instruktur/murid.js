import { Fragment } from "react";

export default function Notifikasi() {
  return (
    <Fragment>
      <div className="card mb-4">
        {/* Card body */}
        <div className="p-4 d-flex justify-content-between align-items-center">
          <div>
            <h3 className="mb-0">Students</h3>
            <span>Meet people taking your course.</span>
          </div>
          {/* Nav */}
          <div className="nav btn-group flex-nowrap" role="tablist">
            <button className="btn btn-outline-white active" data-toggle="tab" data-target="#tabPaneGrid" role="tab" aria-controls="tabPaneGrid" aria-selected="true">
              <span className="fe fe-grid" />
            </button>
            <button className="btn btn-outline-white" data-toggle="tab" data-target="#tabPaneList" role="tab" aria-controls="tabPaneList" aria-selected="false">
              <span className="fe fe-list" />
            </button>
          </div>
        </div>
      </div>

      <div className="tab-content">
        <div className="tab-pane fade show active pb-4" id="tabPaneGrid" role="tabpanel" aria-labelledby="tabPaneGrid">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-12 mb-3">
              {/* Content */}
              <div className="row">
                <div className="col pr-0">
                  {/* Form */}
                  <form>
                    <input type="search" className="form-control" placeholder="Search by Name" />
                  </form>
                </div>
                {/* Button */}
                <div className="col-auto">
                  <a href="#!" className="btn btn-secondary">Export CSV</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* Card */}
              <div className="card mb-4">
                {/* Card body */}
                <div className="card-body">
                  <div className="text-center">
                    <img src="../assets/images/avatar/avatar-3.jpg" className="rounded-circle avatar-xl mb-3" alt />
                    <h4 className="mb-1">Wade Warren</h4>
                    <p className="mb-0 font-size-xs">
                      <i className="fe fe-map-pin mr-1" />United States
                    </p>
                    <a href="#!" className="btn btn-sm btn-outline-white mt-3">Message</a>
                  </div>
                  <div className="d-flex justify-content-between border-bottom py-2 mt-4 font-size-xs">
                    <span>Enrolled</span>
                    <span className="text-dark"> 3/12/2020</span>
                  </div>
                  <div className="d-flex justify-content-between pt-2 font-size-xs">
                    <span>Progress</span>
                    <span className="text-success"> 0% </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* Card */}
              <div className="card mb-4">
                {/* Card body */}
                <div className="card-body">
                  <div className="text-center">
                    <img src="../assets/images/avatar/avatar-2.jpg" className="rounded-circle avatar-xl mb-3" alt />
                    <h4 className="mb-1">Dianna Smiley</h4>
                    <p className="mb-0 font-size-xs">
                      <i className="fe fe-map-pin mr-1" />India
                    </p>
                    <a href="#!" className="btn btn-sm btn-outline-white mt-3">Message</a>
                  </div>
                  <div className="d-flex justify-content-between border-bottom py-2 mt-4 font-size-xs">
                    <span>Enrolled</span>
                    <span className="text-dark"> 3/11/2020</span>
                  </div>
                  <div className="d-flex justify-content-between pt-2 font-size-xs">
                    <span>Progress</span>
                    <span className="text-success"> 12% </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* Card */}
              <div className="card mb-4">
                {/* Card Body */}
                <div className="card-body">
                  <div className="text-center">
                    <img src="../assets/images/avatar/avatar-1.jpg" className="rounded-circle avatar-xl mb-3" alt />
                    <h4 className="mb-1">Esther Howard</h4>
                    <p className="mb-0 font-size-xs">
                      <i className="fe fe-map-pin mr-1" />UK
                    </p>
                    <a href="#!" className="btn btn-sm btn-outline-white mt-3">Message</a>
                  </div>
                  <div className="d-flex justify-content-between border-bottom py-2 mt-4 font-size-xs">
                    <span>Enrolled</span>
                    <span className="text-dark">4/10/2020</span>
                  </div>
                  <div className="d-flex justify-content-between pt-2 font-size-xs">
                    <span>Progress</span>
                    <span className="text-success"> 14% </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* Card */}
              <div className="card mb-4">
                {/* Card body */}
                <div className="card-body">
                  <div className="text-center">
                    <img src="../assets/images/avatar/avatar-5.jpg" className="rounded-circle avatar-xl mb-3" alt />
                    <h4 className="mb-1">Guy Hawkins</h4>
                    <p className="mb-0 font-size-xs">
                      <i className="fe fe-map-pin mr-1" />Brazil
                    </p>
                    <a href="#!" className="btn btn-sm btn-outline-white mt-3">Message</a>
                  </div>
                  <div className="d-flex justify-content-between border-bottom py-2 mt-4 font-size-xs">
                    <span>Enrolled</span>
                    <span className="text-dark">4/09/2020</span>
                  </div>
                  <div className="d-flex justify-content-between pt-2 font-size-xs">
                    <span>Progress</span>
                    <span className="text-success"> 34% </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* Card */}
              <div className="card mb-4">
                {/* Card body */}
                <div className="card-body">
                  <div className="text-center">
                    <img src="../assets/images/avatar/avatar-10.jpg" className="rounded-circle avatar-xl mb-3" alt />
                    <h4 className="mb-1">Jacob Jones</h4>
                    <p className="mb-0 font-size-xs">
                      <i className="fe fe-map-pin mr-1" />Chile
                    </p>
                    <a href="#!" className="btn btn-sm btn-outline-white mt-3">Message</a>
                  </div>
                  <div className="d-flex justify-content-between border-bottom py-2 mt-4 font-size-xs">
                    <span>Enrolled</span>
                    <span className="text-dark">3/12/2020</span>
                  </div>
                  <div className="d-flex justify-content-between pt-2 font-size-xs">
                    <span>Progress</span>
                    <span className="text-success"> 23% </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* Card */}
              <div className="card mb-4">
                {/* Card body */}
                <div className="card-body">
                  <div className="text-center">
                    <img src="../assets/images/avatar/avatar-4.jpg" className="rounded-circle avatar-xl mb-3" alt />
                    <h4 className="mb-1">Kristin Watson</h4>
                    <p className="mb-0 font-size-xs">
                      <i className="fe fe-map-pin mr-1" />Estonia
                    </p>
                    <a href="#!" className="btn btn-sm btn-outline-white mt-3">Message</a>
                  </div>
                  <div className="d-flex justify-content-between border-bottom py-2 mt-4 font-size-xs">
                    <span>Enrolled</span>
                    <span className="text-dark">8/12/2020</span>
                  </div>
                  <div className="d-flex justify-content-between pt-2 font-size-xs">
                    <span>Progress</span>
                    <span className="text-success"> 45% </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* Card */}
              <div className="card mb-4">
                {/* Card body*/}
                <div className="card-body">
                  <div className="text-center">
                    <img src="../assets/images/avatar/avatar-6.jpg" className="rounded-circle avatar-xl mb-3" alt />
                    <h4 className="mb-1">Rivao Luke</h4>
                    <p className="mb-0 font-size-xs">
                      <i className="fe fe-map-pin mr-1" />Greece
                    </p>
                    <a href="#!" className="btn btn-sm btn-outline-white mt-3">Message</a>
                  </div>
                  <div className="d-flex justify-content-between border-bottom py-2 mt-4 font-size-xs">
                    <span>Enrolled</span>
                    <span className="text-dark">18/12/2020</span>
                  </div>
                  <div className="d-flex justify-content-between pt-2 font-size-xs">
                    <span>Progress</span>
                    <span className="text-success"> 100% </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* Card */}
              <div className="card mb-4">
                {/* Card body */}
                <div className="card-body">
                  <div className="text-center">
                    <img src="../assets/images/avatar/avatar-8.jpg" className="rounded-circle avatar-xl mb-3" alt />
                    <h4 className="mb-1">Nia Sikhone</h4>
                    <p className="mb-0 font-size-xs">
                      <i className="fe fe-map-pin mr-1" />Egypt
                    </p>
                    <a href="#!" className="btn btn-sm btn-outline-white mt-3">Message</a>
                  </div>
                  <div className="d-flex justify-content-between border-bottom py-2 mt-4 font-size-xs">
                    <span>Enrolled</span>
                    <span className="text-dark">2/12/2020</span>
                  </div>
                  <div className="d-flex justify-content-between pt-2 font-size-xs">
                    <span>Progress</span>
                    <span className="text-success"> 67% </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 d-none d-lg-block">
              {/* Card */}
              <div className="card mb-4">
                {/* Card body */}
                <div className="card-body">
                  <div className="text-center">
                    <img src="../assets/images/avatar/avatar-9.jpg" className="rounded-circle avatar-xl mb-3" alt />
                    <h4 className="mb-1">Xiaon Merry</h4>
                    <p className="mb-0 font-size-xs">
                      <i className="fe fe-map-pin mr-1" />Denmark
                    </p>
                    <a href="#!" className="btn btn-sm btn-outline-white mt-3">Message</a>
                  </div>
                  <div className="d-flex justify-content-between border-bottom py-2 mt-4 font-size-xs">
                    <span>Enrolled</span>
                    <span className="text-dark">7/12/2020</span>
                  </div>
                  <div className="d-flex justify-content-between pt-2 font-size-xs">
                    <span>Progress</span>
                    <span className="text-success"> 65% </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-12">
              {/* Pagination */}
              <nav>
                <ul className="pagination justify-content-center mb-0">
                  <li className="page-item disabled">
                    <a className="page-link mx-1 rounded" href="#!" tabIndex={-1} aria-disabled="true"><i className="mdi mdi-chevron-left" /></a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link mx-1 rounded" href="#!">1</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link mx-1 rounded" href="#!">2</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link mx-1 rounded" href="#!">3</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link mx-1 rounded" href="#!"><i className="mdi mdi-chevron-right" /></a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        {/* Tab pane */}
        <div className="tab-pane fade" id="tabPaneList" role="tabpanel" aria-labelledby="tabPaneList">
          <div className="card">
            <div className="card-header border-bottom-0">
              <div className="row">
                <div className="col pr-0">
                  <form>
                    <input type="search" className="form-control" placeholder="Search by Name" />
                  </form>
                </div>
                <div className="col-auto">
                  <a href="#!" className="btn btn-secondary">Export CSV</a>
                </div>
              </div>
            </div>
            {/* Table */}
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col" className="border-0">Name</th>
                    <th scope="col" className="border-0">Enrolled</th>
                    <th scope="col" className="border-0">Progress</th>
                    <th scope="col" className="border-0">Q/A</th>
                    <th scope="col" className="border-0">Locations</th>
                    <th scope="col" className="border-0">Message</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="align-middle border-top-0">
                      <div className="d-flex align-items-center">
                        <img src="../assets/images/avatar/avatar-3.jpg" alt className="rounded-circle avatar-md mr-2" />
                        <h5 className="mb-0">Guy Hawkins</h5>
                      </div>
                    </td>
                    <td className="align-middle border-top-0">3/12/2020</td>
                    <td className="align-middle border-top-0">0%</td>
                    <td className="align-middle border-top-0">0</td>
                    <td className="align-middle border-top-0">
                      <span className="font-size-xs"><i className="fe fe-map-pin mr-1" />Greece</span>
                    </td>
                    <td className="pr-0 align-middle border-top-0">
                      <a href="#!" className="btn btn-outline-white btn-sm">Message</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="align-middle">
                      <div className="d-flex align-items-center">
                        <img src="../assets/images/avatar/avatar-2.jpg" alt className="rounded-circle avatar-md mr-2" />
                        <h5 className="mb-0">Dianna Smiley</h5>
                      </div>
                    </td>
                    <td className="align-middle">3/11/2020</td>
                    <td className="align-middle">12%</td>
                    <td className="align-middle">2</td>
                    <td className="align-middle">
                      <span className="font-size-xs"><i className="fe fe-map-pin mr-1" />India</span>
                    </td>
                    <td className="pr-0 align-middle">
                      <a href="#!" className="btn btn-outline-white btn-sm">Message</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="align-middle">
                      <div className="d-flex align-items-center">
                        <img src="../assets/images/avatar/avatar-5.jpg" alt className="rounded-circle avatar-md mr-2" />
                        <h5 className="mb-0">Guy Hawkins</h5>
                      </div>
                    </td>
                    <td className="align-middle">3/11/2020</td>
                    <td className="align-middle">34%</td>
                    <td className="align-middle">4</td>
                    <td className="align-middle">
                      <span className="font-size-xs"><i className="fe fe-map-pin mr-1" />Brazil</span>
                    </td>
                    <td className="pr-0 align-middle">
                      <a href="#!" className="btn btn-outline-white btn-sm">Message</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="align-middle">
                      <div className="d-flex align-items-center">
                        <img src="../assets/images/avatar/avatar-10.jpg" alt className="rounded-circle avatar-md mr-2" />
                        <h5 className="mb-0">Jacob Jones</h5>
                      </div>
                    </td>
                    <td className="align-middle">3/12/2020</td>
                    <td className="align-middle">44%</td>
                    <td className="align-middle">5</td>
                    <td className="align-middle">
                      <span className="font-size-xs"><i className="fe fe-map-pin mr-1" />Chile</span>
                    </td>
                    <td className="pr-0 align-middle">
                      <a href="#!" className="btn btn-outline-white btn-sm">Message</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="align-middle">
                      <div className="d-flex align-items-center">
                        <img src="../assets/images/avatar/avatar-8.jpg" alt className="rounded-circle avatar-md mr-2" />
                        <h5 className="mb-0">Kristin Watson</h5>
                      </div>
                    </td>
                    <td className="align-middle">18/12/2020</td>
                    <td className="align-middle">45%</td>
                    <td className="align-middle">9</td>
                    <td className="align-middle">
                      <span className="font-size-xs"><i className="fe fe-map-pin mr-1" />Estonia</span>
                    </td>
                    <td className="pr-0 align-middle">
                      <a href="#!" className="btn btn-outline-white btn-sm">Message</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="align-middle">
                      <div className="d-flex align-items-center">
                        <img src="../assets/images/avatar/avatar-6.jpg" alt className="rounded-circle avatar-md mr-2" />
                        <h5 className="mb-0">Rivao Luke</h5>
                      </div>
                    </td>
                    <td className="align-middle">8/12/2020</td>
                    <td className="align-middle">100%</td>
                    <td className="align-middle">5</td>
                    <td className="align-middle">
                      <span className="font-size-xs"><i className="fe fe-map-pin mr-1" />Greece</span>
                    </td>
                    <td className="pr-0 align-middle">
                      <a href="#!" className="btn btn-outline-white btn-sm">Message</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="align-middle">
                      <div className="d-flex align-items-center">
                        <img src="../assets/images/avatar/avatar-7.jpg" alt className="rounded-circle avatar-md mr-2" />
                        <h5 className="mb-0">Nia Sikhone</h5>
                      </div>
                    </td>
                    <td className="align-middle">8/12/2020</td>
                    <td className="align-middle">67%</td>
                    <td className="align-middle">3</td>
                    <td className="align-middle">
                      <span className="font-size-xs"><i className="fe fe-map-pin mr-1" />Egypt</span>
                    </td>
                    <td className="pr-0 align-middle">
                      <a href="#!" className="btn btn-outline-white btn-sm">Message</a>
                    </td>
                  </tr>
                  <tr className="border-bottom">
                    <td className="align-middle">
                      <div className="d-flex align-items-center">
                        <img src="../assets/images/avatar/avatar-9.jpg" alt className="rounded-circle avatar-md mr-2" />
                        <h5 className="mb-0">Xiaon Merry</h5>
                      </div>
                    </td>
                    <td className="align-middle">7/12/2020</td>
                    <td className="align-middle">65%</td>
                    <td className="align-middle">4</td>
                    <td className="align-middle">
                      <span className="font-size-xs"><i className="fe fe-map-pin mr-1" />Denmark</span>
                    </td>
                    <td className="pr-0 align-middle">
                      <a href="#!" className="btn btn-outline-white btn-sm">Message</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="pt-2 pb-4">
              {/* Pagination */}
              <nav>
                <ul className="pagination justify-content-center mb-0">
                  <li className="page-item disabled">
                    <a className="page-link mx-1 rounded" href="#!" tabIndex={-1} aria-disabled="true"><i className="mdi mdi-chevron-left" /></a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link mx-1 rounded" href="#!">1</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link mx-1 rounded" href="#!">2</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link mx-1 rounded" href="#!">3</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link mx-1 rounded" href="#!"><i className="mdi mdi-chevron-right" /></a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>


    </Fragment>

  )
}