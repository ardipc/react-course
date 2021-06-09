import { Fragment } from "react";

export default function Notifikasi() {
  return (
    <Fragment>
      <div className="card mb-4">
        {/* Card header */}
        <div className="card-header">
          <h3 className="mb-0">Payout Method</h3>
          <p className="mb-0">
            Order Dashboard is a quick overview of all current orders.
          </p>
        </div>
        {/* Card body */}
        <div className="card-body">
          <div className="alert bg-light-warning text-dark-warning alert-dismissible fade show" role="alert">
            <strong>payout@geeks.com</strong>
            <p className="mb-0">
              Your selected payout method was confirmed on Next Payout on
              15 July, 2020
            </p>
            {/* Button */}
            <button type="button" className="btn-close close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="row mt-6">
            <div className="col-xl-4 col-lg-4 col-md-12 col-12 mb-3 mb-lg-0">
              <div className="text-center" style={{position: 'relative'}}>
                {/* PayOut chart */}
                
                <h4 className="mb-1">Your Earning this month</h4>
                <h5 className="mb-0 display-4 font-weight-bold">$3,210</h5>
                <p className="px-4">Update your payout method in settings</p>
                <a href="#!" className="btn btn-primary">
                  Withdraw Earning
                </a>
              </div>
            </div>
            <div className="col-xl-8 col-lg-8 col-md-12 col-12">
              {/* Check box */}
              <div className="border p-4 rounded-lg mb-3">
                <div className="custom-control custom-radio">
                  <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" defaultChecked />
                  <label className="custom-control-label" htmlFor="customRadio1">
                    <img src="/assets/images/brand/paypal-small.svg" alt />
                  </label>
                  <p>
                    Your paypal account has been authorized for payouts.
                  </p>
                  <a href="#!" className="btn btn-outline-primary">
                    Remove Account</a>
                </div>
              </div>
              {/* Check box */}
              <div className="border p-4 rounded-lg mb-3">
                <div className="custom-control custom-radio">
                  <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" />
                  <label className="custom-control-label pl-1" htmlFor="customRadio2">
                    <img src="../assets/images/brand/payoneer.svg" alt />
                  </label>
                </div>
              </div>
              {/* Check box */}
              <div className="border p-4 rounded-lg">
                <div className="custom-control custom-radio">
                  <input type="radio" id="customRadio3" name="customRadio" className="custom-control-input" />
                  <label className="custom-control-label pl-1 h4" htmlFor="customRadio3">
                    Bank Transfer
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-4">
        {/* Card header */}
        <div className="card-header border-bottom-0">
          <h3 className="h4 mb-3">Withdraw History</h3>
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-6 pr-md-0 mb-2 mb-lg-0">
              {/* Custom select */}
              <div className="dropdown bootstrap-select" style={{width: '100%'}}><select className="selectpicker" data-width="100%">
                  <option value>30 days</option>
                  <option value="Last 7 days">2 Months</option>
                  <option value="High Rated">6 Months</option>
                </select><button type="button" tabIndex={-1} className="btn dropdown-toggle btn-light bs-placeholder" data-toggle="dropdown" role="combobox" aria-owns="bs-select-1" aria-haspopup="listbox" aria-expanded="false" title="30 days"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">30 days</div></div> </div></button><div className="dropdown-menu "><div className="inner show" role="listbox" id="bs-select-1" tabIndex={-1}><ul className="dropdown-menu inner show" role="presentation" /></div></div></div>
            </div>
            <div className="col-lg-3 col-md-6 pr-md-0 mb-2 mb-2 mb-lg-0">
              {/* Custom select */}
              <div className="dropdown bootstrap-select" style={{width: '100%'}}><select className="selectpicker" data-width="100%">
                  <option value>Oct 2020</option>
                  <option value="Jan 2021">Jan 2021</option>
                  <option value="May 2021">May 2021</option>
                </select><button type="button" tabIndex={-1} className="btn dropdown-toggle btn-light bs-placeholder" data-toggle="dropdown" role="combobox" aria-owns="bs-select-2" aria-haspopup="listbox" aria-expanded="false" title="Oct 2020"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Oct 2020</div></div> </div></button><div className="dropdown-menu "><div className="inner show" role="listbox" id="bs-select-2" tabIndex={-1}><ul className="dropdown-menu inner show" role="presentation" /></div></div></div>
            </div>
            <div className="col-lg-4 col-md-6 mb-2 mb-2 mb-lg-0">
              {/* Custom select */}
              <div className="dropdown bootstrap-select" style={{width: '100%'}}><select className="selectpicker" data-width="100%">
                  <option value>Transaction Type</option>
                  <option value="cash transactions">
                    Cash Transactions
                  </option>
                  <option value="non-cash transactions">
                    Non Cash Transactions
                  </option>
                  <option value="credit transactions">
                    Credit Transactions
                  </option>
                </select><button type="button" tabIndex={-1} className="btn dropdown-toggle btn-light bs-placeholder" data-toggle="dropdown" role="combobox" aria-owns="bs-select-3" aria-haspopup="listbox" aria-expanded="false" title="Transaction Type"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Transaction Type</div></div> </div></button><div className="dropdown-menu "><div className="inner show" role="listbox" id="bs-select-3" tabIndex={-1}><ul className="dropdown-menu inner show" role="presentation" /></div></div></div>
            </div>
            <div className="col-lg-2 col-md-6 text-lg-right">
              {/* Button */}
              <a href="#!" className="btn btn-outline-white" download>
                <i className="fe fe-download" /></a>
            </div>
          </div>
        </div>
        {/* Table */}
        <div className="table-responsive border-0">
          <table className="table mb-0 text-nowrap">
            <thead>
              <tr>
                <th className="border-0">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="checkAll" />
                    <label className="custom-control-label" htmlFor="checkAll" />
                  </div>
                </th>
                <th className="border-0">ID</th>
                <th className="border-0">Method</th>
                <th className="border-0">Status</th>
                <th className="border-0">Amount</th>
                <th className="border-0">Date</th>
                <th className="border-0" />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="align-middle border-top-0">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="withdrawTwo" />
                    <label className="custom-control-label" htmlFor="withdrawTwo" />
                  </div>
                </td>
                <td className="align-middle border-top-0">#1060</td>
                <td className="align-middle border-top-0">PayPal</td>
                <td className="align-middle border-top-0">
                  <span className="badge badge-warning">Pending</span>
                </td>
                <td className="align-middle border-top-0">$1200</td>
                <td className="align-middle border-top-0">Sept 15, 2020</td>
                <td className="align-middle border-top-0">
                  <span className="dropdown">
                    <a className="text-muted text-decoration-none" href="#!" role="button" id="paymentDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fe fe-more-vertical" />
                    </a>
                    <span className="dropdown-menu" aria-labelledby="paymentDropdown">
                      <span className="dropdown-header">Setting </span>
                      <a className="dropdown-item" href="#!"><i className="fe fe-edit dropdown-item-icon" />Edit</a>
                      <a className="dropdown-item" href="#!"><i className="fe fe-trash dropdown-item-icon" />Remove</a>
                    </span>
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="withdrawThree" />
                    <label className="custom-control-label" htmlFor="withdrawThree" />
                  </div>
                </td>
                <td className="align-middle">#1038</td>
                <td className="align-middle">PayPal</td>
                <td className="align-middle">
                  <span className="badge badge-success">Paid</span>
                </td>
                <td className="align-middle">$2000</td>
                <td className="align-middle">Aug 15, 2020</td>
                <td className="align-middle">
                  <span className="dropdown">
                    <a className="text-muted text-decoration-none" href="#!" role="button" id="paymentDropdown1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fe fe-more-vertical" />
                    </a>
                    <span className="dropdown-menu" aria-labelledby="paymentDropdown1">
                      <span className="dropdown-header">Setting </span>
                      <a className="dropdown-item" href="#!"><i className="fe fe-edit dropdown-item-icon" />Edit</a>
                      <a className="dropdown-item" href="#!"><i className="fe fe-trash dropdown-item-icon" />Remove</a>
                    </span>
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="withdrawFour" />
                    <label className="custom-control-label" htmlFor="withdrawFour" />
                  </div>
                </td>
                <td className="align-middle">#1016</td>
                <td className="align-middle">PayPal</td>
                <td className="align-middle">
                  <span className="badge badge-success">Paid</span>
                </td>
                <td className="align-middle">$3590</td>
                <td className="align-middle">July 15, 2020</td>
                <td className="align-middle">
                  <span className="dropdown">
                    <a className="text-muted text-decoration-none" href="#!" role="button" id="paymentDropdown2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fe fe-more-vertical" />
                    </a>
                    <span className="dropdown-menu" aria-labelledby="paymentDropdown2">
                      <span className="dropdown-header">Setting </span>
                      <a className="dropdown-item" href="#!"><i className="fe fe-edit dropdown-item-icon" />Edit</a>
                      <a className="dropdown-item" href="#!"><i className="fe fe-trash dropdown-item-icon" />Remove</a>
                    </span>
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="withdrawFive" />
                    <label className="custom-control-label" htmlFor="withdrawFive" />
                  </div>
                </td>
                <td className="align-middle">#1008</td>
                <td className="align-middle">PayPal</td>
                <td className="align-middle">
                  <span className="badge badge-success">Paid</span>
                </td>
                <td className="align-middle">$4500</td>
                <td className="align-middle">Aug 15, 2020</td>
                <td className="align-middle">
                  <span className="dropdown">
                    <a className="text-muted text-decoration-none" href="#!" role="button" id="paymentDropdown3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fe fe-more-vertical" />
                    </a>
                    <span className="dropdown-menu" aria-labelledby="paymentDropdown3">
                      <span className="dropdown-header">Setting </span>
                      <a className="dropdown-item" href="#!"><i className="fe fe-edit dropdown-item-icon" />Edit</a>
                      <a className="dropdown-item" href="#!"><i className="fe fe-trash dropdown-item-icon" />Remove</a>
                    </span>
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="withdrawSix" />
                    <label className="custom-control-label" htmlFor="withdrawSix" />
                  </div>
                </td>
                <td className="align-middle">#1002</td>
                <td className="align-middle">PayPal</td>
                <td className="align-middle">
                  <span className="badge badge-success">Paid</span>
                </td>
                <td className="align-middle">$4500</td>
                <td className="align-middle">May 15, 2020</td>
                <td className="align-middle">
                  <span className="dropdown">
                    <a className="text-muted text-decoration-none" href="#!" role="button" id="paymentDropdown4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fe fe-more-vertical" />
                    </a>
                    <span className="dropdown-menu" aria-labelledby="paymentDropdown4">
                      <span className="dropdown-header">Setting </span>
                      <a className="dropdown-item" href="#!"><i className="fe fe-edit dropdown-item-icon" />Edit</a>
                      <a className="dropdown-item" href="#!"><i className="fe fe-trash dropdown-item-icon" />Remove</a>
                    </span>
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="withdrawSeven" />
                    <label className="custom-control-label" htmlFor="withdrawSeven" />
                  </div>
                </td>
                <td className="align-middle">#982</td>
                <td className="align-middle">PayPal</td>
                <td className="align-middle">
                  <span className="badge badge-success">Paid</span>
                </td>
                <td className="align-middle">$1232</td>
                <td className="align-middle">April 15, 2020</td>
                <td className="align-middle">
                  <span className="dropdown">
                    <a className="text-muted text-decoration-none" href="#!" role="button" id="paymentDropdown5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fe fe-more-vertical" />
                    </a>
                    <span className="dropdown-menu" aria-labelledby="paymentDropdown5">
                      <span className="dropdown-header">Setting </span>
                      <a className="dropdown-item" href="#!"><i className="fe fe-edit dropdown-item-icon" />Edit</a>
                      <a className="dropdown-item" href="#!"><i className="fe fe-trash dropdown-item-icon" />Remove</a>
                    </span>
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="withdrawEight" />
                    <label className="custom-control-label" htmlFor="withdrawEight" />
                  </div>
                </td>
                <td className="align-middle">#970</td>
                <td className="align-middle">PayPal</td>
                <td className="align-middle">
                  <span className="badge badge-danger">Cancel</span>
                </td>
                <td className="align-middle">$4235</td>
                <td className="align-middle">March 15, 2020</td>
                <td className="align-middle">
                  <span className="dropdown">
                    <a className="text-muted text-decoration-none" href="#!" role="button" id="paymentDropdown6" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fe fe-more-vertical" />
                    </a>
                    <span className="dropdown-menu" aria-labelledby="paymentDropdown6">
                      <span className="dropdown-header">Setting </span>
                      <a className="dropdown-item" href="#!"><i className="fe fe-edit dropdown-item-icon" />Edit</a>
                      <a className="dropdown-item" href="#!"><i className="fe fe-trash dropdown-item-icon" />Remove</a>
                    </span>
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="withdrawNine" />
                    <label className="custom-control-label" htmlFor="withdrawNine" />
                  </div>
                </td>
                <td className="align-middle">#965</td>
                <td className="align-middle">PayPal</td>
                <td className="align-middle">
                  <span className="badge badge-success">Paid</span>
                </td>
                <td className="align-middle">$1231</td>
                <td className="align-middle">Feb 15, 2020</td>
                <td className="align-middle">
                  <span className="dropdown">
                    <a className="text-muted text-decoration-none" href="#!" role="button" id="paymentDropdown7" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fe fe-more-vertical" />
                    </a>
                    <span className="dropdown-menu" aria-labelledby="paymentDropdown7">
                      <span className="dropdown-header">Setting </span>
                      <a className="dropdown-item" href="#!"><i className="fe fe-edit dropdown-item-icon" />Edit</a>
                      <a className="dropdown-item" href="#!"><i className="fe fe-trash dropdown-item-icon" />Remove</a>
                    </span>
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="withdrawTen" />
                    <label className="custom-control-label" htmlFor="withdrawTen" />
                  </div>
                </td>
                <td className="align-middle">#953</td>
                <td className="align-middle">PayPal</td>
                <td className="align-middle">
                  <span className="badge badge-success">Paid</span>
                </td>
                <td className="align-middle">$5435</td>
                <td className="align-middle">Jan 15, 2020</td>
                <td className="align-middle">
                  <span className="dropdown">
                    <a className="text-muted text-decoration-none" href="#!" role="button" id="paymentDropdown8" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fe fe-more-vertical" />
                    </a>
                    <span className="dropdown-menu" aria-labelledby="paymentDropdown8">
                      <span className="dropdown-header">Setting </span>
                      <a className="dropdown-item" href="#!"><i className="fe fe-edit dropdown-item-icon" />Edit</a>
                      <a className="dropdown-item" href="#!"><i className="fe fe-trash dropdown-item-icon" />Remove</a>
                    </span>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="pt-4 pb-4 border-top">
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


    </Fragment>
  )
}