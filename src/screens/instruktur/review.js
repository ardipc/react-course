export default function Notifikasi() {
  return (
    <div className="card mb-4">
      {/* Card header */}
      <div className="card-header d-lg-flex align-items-center justify-content-between">
        <div className="mb-3 mb-lg-0">
          <h3 className="mb-0">Reviews</h3>
          <span>You have full control to manage your own account
            setting.</span>
        </div>
        <div>
          <a href="#!" className="btn btn-outline-primary btn-sm">Export To CSV...</a>
        </div>
      </div>
      {/* Card body */}
      <div className="card-body">
        {/* Form */}
        <form className="form-row mb-4">
          <div className="col-xl-7 col-lg-6 col-md-4 col-12 mb-2 mb-lg-0">
            <div className="dropdown bootstrap-select" style={{width: '100%'}}><select className="selectpicker" data-width="100%">
                <option value>ALL</option>
                <option value="How to easily create a website">
                  How to easily create a website
                </option>
                <option value="Grunt: The JavaScript Task...">
                  Grunt: The JavaScript Task...
                </option>
                <option value="Vue js: The JavaScript Task...">
                  Vue js: The JavaScript Task...
                </option>
              </select><button type="button" tabIndex={-1} className="btn dropdown-toggle btn-light bs-placeholder" data-toggle="dropdown" role="combobox" aria-owns="bs-select-1" aria-haspopup="listbox" aria-expanded="false" title="ALL"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">ALL</div></div> </div></button><div className="dropdown-menu "><div className="inner show" role="listbox" id="bs-select-1" tabIndex={-1}><ul className="dropdown-menu inner show" role="presentation" /></div></div></div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-4 col-12 mb-2 mb-lg-0">
            {/* Custom select */}
            <div className="dropdown bootstrap-select" style={{width: '100%'}}><select className="selectpicker" data-width="100%">
                <option value>Rating</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select><button type="button" tabIndex={-1} className="btn dropdown-toggle btn-light bs-placeholder" data-toggle="dropdown" role="combobox" aria-owns="bs-select-2" aria-haspopup="listbox" aria-expanded="false" title="Rating"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Rating</div></div> </div></button><div className="dropdown-menu "><div className="inner show" role="listbox" id="bs-select-2" tabIndex={-1}><ul className="dropdown-menu inner show" role="presentation" /></div></div></div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-12 mb-2 mb-lg-0">
            {/* Custom select */}
            <div className="dropdown bootstrap-select" style={{width: '100%'}}><select className="selectpicker" data-width="100%">
                <option value>Sort</option>
                <option value="Newest">Newest</option>
                <option value="Oldest">Oldest</option>
              </select><button type="button" tabIndex={-1} className="btn dropdown-toggle btn-light bs-placeholder" data-toggle="dropdown" role="combobox" aria-owns="bs-select-3" aria-haspopup="listbox" aria-expanded="false" title="Sort"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Sort</div></div> </div></button><div className="dropdown-menu "><div className="inner show" role="listbox" id="bs-select-3" tabIndex={-1}><ul className="dropdown-menu inner show" role="presentation" /></div></div></div>
          </div>
        </form>
        {/* List group */}
        <ul className="list-group list-group-flush border-top">
          {/* List group item */}
          <li className="list-group-item px-0 py-4">
            <div className="media">
              <img src="../assets/images/avatar/avatar-9.jpg" alt className="rounded-circle avatar-lg" />
              <div className="ml-3 mt-2 media-body">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <h4 className="mb-0">Eleanor Pena</h4>
                    <span className="text-muted font-size-xs">2 hour ago</span>
                  </div>
                  <div>
                    <a href="#!" data-toggle="tooltip" data-placement="top" title data-original-title="Report Abuse"><i className="fe fe-flag" /></a>
                  </div>
                </div>
                <div className="mt-2">
                  <span className="mr-1">
                    <i className="mdi mdi-star mr-n1 mb-2 text-warning font-size-xs" />
                    <i className="mdi mdi-star mr-n1 mb-2 text-warning font-size-xs" />
                    <i className="mdi mdi-star mr-n1 mb-2 text-warning font-size-xs" />
                    <i className="mdi mdi-star mr-n1 mb-2 text-warning font-size-xs" />
                    <i className="mdi mdi-star mb-2 text-warning font-size-xs" />
                  </span>
                  <span className="mr-1">for</span>
                  <span className="h5">How to easily create a website with WordPress</span>
                  <p className="mt-2">
                    The course is very interesting and insightful. I
                    think it should have more downloadable resources for
                    'points to remember' or 'key learnings' kind of
                    document for later reference after finishing each
                    section.
                  </p>
                  <a href="#!" className="btn btn-outline-white btn-sm">Respond</a>
                </div>
              </div>
            </div>
          </li>
          {/* List group item */}
          <li className="list-group-item px-0 py-4">
            <div className="media">
              <img src="../assets/images/avatar/avatar-4.jpg" alt className="rounded-circle avatar-lg" />
              <div className="ml-3 mt-2 media-body">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <h4 className="mb-0">Jenny Wilson</h4>
                    <span className="text-muted font-size-xs">2 hour ago</span>
                  </div>
                  <div>
                    <a href="#!" data-toggle="tooltip" data-placement="top" title data-original-title="Report Abuse"><i className="fe fe-flag" /></a>
                  </div>
                </div>
                <div className="mt-2">
                  <span className="mr-1">
                    <i className="mdi mdi-star mr-n1 mb-2 text-warning font-size-xs" />
                    <i className="mdi mdi-star mr-n1 mb-2 text-warning font-size-xs" />
                    <i className="mdi mdi-star mr-n1 mb-2 text-warning font-size-xs" />
                    <i className="mdi mdi-star mr-n1 mb-2 text-warning font-size-xs" />
                    <i className="mdi mdi-star mb-2-half-alt text-warning font-size-xs" />
                  </span>
                  <span className="mr-1">for</span>
                  <span className="h5">Getting started - Grunt: The JavaScript
                    Task...</span>
                  <p className="mt-2">
                    Quisque semper aliquet lacinia. Ut molestie felis
                    nec consectetur hendrerit. Aliquam eu viverra velit.
                    In non leo ornare, ornare lorem elementum, efficitur
                    urna. Curabitur fringilla nulla ac odio dignissim
                    viverra.
                  </p>
                  <a href="#!" className="btn btn-outline-white btn-sm">Respond</a>
                </div>
              </div>
            </div>
          </li>
          {/* List group item */}
          <li className="list-group-item px-0 py-4">
            <div className="media">
              <img src="../assets/images/avatar/avatar-7.jpg" alt className="rounded-circle avatar-lg" />
              <div className="ml-3 mt-2 media-body">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <h4 className="mb-0">Brooklyn Simmons</h4>
                    <span className="text-muted font-size-xs">2 hour ago</span>
                  </div>
                  <div>
                    <a href="#!" data-toggle="tooltip" data-placement="top" title data-original-title="Report Abuse"><i className="fe fe-flag" /></a>
                  </div>
                </div>
                <div className="mt-2">
                  <span className="mr-1">
                    <i className="mdi mdi-star mr-n1 mb-2 text-warning font-size-xs" />
                    <i className="mdi mdi-star mr-n1 mb-2 text-warning font-size-xs" />
                    <i className="mdi mdi-star mr-n1 mb-2 text-warning font-size-xs" />
                    <i className="mdi mdi-star mr-n1 mb-2 text-warning font-size-xs" />
                    <i className="mdi mdi-star mb-2-half-alt text-warning font-size-xs" />
                  </span>
                  <span className="mr-1">for</span>
                  <span className="h5">Getting started - Vue js: The JavaScript
                    Task...</span>
                  <p className="mt-2">
                    Nulla eu cursus lacus. Vestibulum imperdiet accumsan
                    tempor. Vivamus lacinia posuere augue ac mollis.
                    Integer ornare purus ac hendrerit vehicula. In
                    condimentum efficitur quam, sed porta turpis
                    lobortis sit amet.
                  </p>
                  <a href="#!" className="btn btn-outline-white btn-sm">Respond</a>
                </div>
              </div>
            </div>
          </li>
          {/* List group item */}
          <li className="list-group-item px-0 py-4">
            <div className="media">
              <img src="../assets/images/avatar/avatar-1.jpg" alt className="rounded-circle avatar-lg" />
              <div className="ml-3 mt-2 media-body">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <h4 className="mb-0">John Deo</h4>
                    <span className="text-muted font-size-xs">1 hour ago</span>
                  </div>
                  <div>
                    <a href="#!" data-toggle="tooltip" data-placement="top" title data-original-title="Report Abuse"><i className="fe fe-flag" /></a>
                  </div>
                </div>
                <div className="mt-2">
                  <span className="mr-1">
                    <i className="mdi mdi-star mr-n1 mb-2 text-warning font-size-xs" />
                    <i className="mdi mdi-star mr-n1 mb-2 text-warning font-size-xs" />
                    <i className="mdi mdi-star mr-n1 mb-2 text-warning font-size-xs" />
                    <i className="mdi mdi-star mr-n1 mb-2 text-warning font-size-xs" />
                    <i className="mdi mdi-star mb-2 text-light font-size-xs" />
                  </span>
                  <span className="mr-1">for</span>
                  <span className="h5">Getting started - Gulp: The JavaScript
                    Task...</span>
                  <p className="mt-2">
                    Suspendisse mauris lectus, posuere et quam eu,
                    auctor interdum turpis. Maecenas gravida libero
                    vitae risus sodales dictu llentesque tristique mi ut
                    lectus luctus, eu hendrerit felis accumsan. Nam eget
                    felis porttitor, volutpat nisi id, aliquam purus.
                  </p>
                  <a href="#!" className="btn btn-outline-white btn-sm">Respond</a>
                </div>
              </div>
            </div>
          </li>
          {/* List group item */}
          <li className="list-group-item px-0 pt-4 pb-0">
            <div className="media">
              <img src="../assets/images/avatar/avatar-8.jpg" alt className="rounded-circle avatar-lg" />
              <div className="ml-3 mt-2 media-body">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <h4 className="mb-0">Simons Xolaa</h4>
                    <span className="text-muted font-size-xs">3 hour ago</span>
                  </div>
                  <div>
                    <a href="#!" data-toggle="tooltip" data-placement="top" title data-original-title="Report Abuse"><i className="fe fe-flag" /></a>
                  </div>
                </div>
                <div className="mt-2">
                  <span className="mr-1">
                    <i className="mdi mdi-star mr-n1 mb-2 text-warning font-size-xs" />
                    <i className="mdi mdi-star mr-n1 mb-2 text-warning font-size-xs" />
                    <i className="mdi mdi-star mr-n1 mb-2 text-warning font-size-xs" />
                    <i className="mdi mdi-star mr-n1 mb-2 text-warning font-size-xs" />
                    <i className="mdi mdi-star mb-2 text-warning font-size-xs" />
                  </span>
                  <span className="mr-1">for</span>
                  <span className="h5">Getting started - HTML: The Foundations
                    Task...</span>
                  <p className="mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Sed euismod nulla orci, sed varius metus
                    tincidunt consequat. Maecenas in purus non nisi
                    luctus pulvinar vitae eu lacus. Nam magna ipsum,
                    fermentum in commodo ut, tristique ut mauris.
                  </p>
                  <a href="#!" className="btn btn-outline-white btn-sm">Respond</a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

  )
}