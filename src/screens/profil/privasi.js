export default function Privasi() {
  return (
    <div className="card">
      {/* Card header */}
      <div className="card-header">
        <h3 className="mb-0">Profile Privacy Settings</h3>
        <p className="mb-0">
          Making your profile public allow other users to see what you
          have been learning on Geeks.
        </p>
      </div>
      {/* Card body */}
      <div className="card-body">
        <div className="row d-lg-flex justify-content-between">
          <div className="col-lg-9 col-md-7 col-12 mb-3 mb-lg-0">
            <h4 className="mb-0">Privacy levels</h4>
            <p className="mb-0">Show your profile public and private.</p>
          </div>
          <div className="col-lg-3 col-md-5 col-12">
            <div className="dropdown bootstrap-select" style={{width: '100%'}}><select className="selectpicker" data-width="100%">
                <option value>Select</option>
                <option value="public">Public</option>
                <option value="private">Private</option>
              </select><button type="button" tabIndex={-1} className="btn dropdown-toggle btn-light bs-placeholder" data-toggle="dropdown" role="combobox" aria-owns="bs-select-1" aria-haspopup="listbox" aria-expanded="false" title="Select"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Select</div></div> </div></button><div className="dropdown-menu "><div className="inner show" role="listbox" id="bs-select-1" tabIndex={-1}><ul className="dropdown-menu inner show" role="presentation" /></div></div></div>
          </div>
        </div>
        <hr className="my-5" />
        <div>
          <h4 className="mb-0">Profile settings</h4>
          <p className="mb-5">
            These controls give you the ability to customize what areas
            of your profile others are able to see.
          </p>
          {/* List group */}
          <ul className="list-group list-group-flush">
            {/* List group item */}
            <li className="list-group-item d-flex align-items-center justify-content-between px-0 py-2">
              <div>Show your profile on search engines</div>
              <div>
                <div className="custom-control custom-switch">
                  <input type="checkbox" className="custom-control-input" id="swicthOne" defaultChecked />
                  <label className="custom-control-label" htmlFor="swicthOne" />
                </div>
              </div>
            </li>
            {/* List group item */}
            <li className="list-group-item d-flex align-items-center justify-content-between px-0 py-2">
              <div>Show courses you're taking on your profile page</div>
              <div>
                <div className="custom-control custom-switch">
                  <input type="checkbox" className="custom-control-input" id="switchTwo" />
                  <label className="custom-control-label" htmlFor="switchTwo" />
                </div>
              </div>
            </li>
            {/* List group item */}
            <li className="list-group-item d-flex align-items-center justify-content-between px-0 py-2">
              <div>Show your profile on public</div>
              <div>
                <div className="custom-control custom-switch">
                  <input type="checkbox" className="custom-control-input" id="switchThree" defaultChecked />
                  <label className="custom-control-label" htmlFor="switchThree" />
                </div>
              </div>
            </li>
            {/* List group item */}
            <li className="list-group-item d-flex align-items-center justify-content-between px-0 py-2">
              <div>Currently learning</div>
              <div>
                <div className="custom-control custom-switch">
                  <input type="checkbox" className="custom-control-input" id="switchFour" defaultChecked />
                  <label className="custom-control-label" htmlFor="switchFour" />
                </div>
              </div>
            </li>
            {/* List group item */}
            <li className="list-group-item d-flex align-items-center justify-content-between px-0 py-2">
              <div>Completed courses</div>
              <div>
                <div className="custom-control custom-switch">
                  <input type="checkbox" className="custom-control-input" id="switchFive" defaultChecked />
                  <label className="custom-control-label" htmlFor="switchFive" />
                </div>
              </div>
            </li>
            {/* List group item */}
            <li className="list-group-item d-flex align-items-center justify-content-between px-0 py-2">
              <div>Your Interests</div>
              <div>
                <div className="custom-control custom-switch">
                  <input type="checkbox" className="custom-control-input" id="switchSix" defaultChecked />
                  <label className="custom-control-label" htmlFor="switchSix" />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

  )
}