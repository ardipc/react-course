export default function Akun() {
  return (
    <div className="card">
      {/* Card header */}
      <div className="card-header">
        <h3 className="mb-0">Profile Details</h3>
        <p className="mb-0">
          You have full control to manage your own account setting.
        </p>
      </div>
      {/* Card body */}
      <div className="card-body">
        <div className="d-lg-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center mb-4 mb-lg-0">
            <img src="../assets/images/avatar/avatar-3.jpg" id="img-uploaded" className="avatar-xl rounded-circle" alt />
            <div className="ml-3">
              <h4 className="mb-0">Your avatar</h4>
              <p className="mb-0">
                PNG or JPG no bigger than 800px wide and tall.
              </p>
            </div>
          </div>
          <div>
            <a href="#!" className="btn btn-outline-white btn-sm">Update</a>
            <a href="#!" className="btn btn-outline-danger btn-sm">Delete</a>
          </div>
        </div>
        <hr className="my-5" />
        <div>
          <h4 className="mb-0">Personal Details</h4>
          <p className="mb-4">
            Edit your personal information and address.
          </p>
          {/* Form */}
          <form className="form-row">
            {/* First name */}
            <div className="form-group col-12 col-md-6">
              <label className="form-label" htmlFor="fname">First Name</label>
              <input type="text" id="fname" className="form-control" placeholder="First Name" required />
            </div>
            {/* Last name */}
            <div className="form-group col-12 col-md-6">
              <label className="form-label" htmlFor="lname">Last Name</label>
              <input type="text" id="lname" className="form-control" placeholder="Last Name" required />
            </div>
            {/* Phone */}
            <div className="form-group col-12 col-md-6">
              <label className="form-label" htmlFor="phone">Phone</label>
              <input type="text" id="phone" className="form-control" placeholder="Phone" required />
            </div>
            {/* Birthday */}
            <div className="form-group col-12 col-md-6">
              <label className="form-label" htmlFor="birth">Birthday</label>
              <input className="form-control flatpickr flatpickr-input" type="text" placeholder="Birth of Date" id="birth" name="birth" readOnly="readonly" />
            </div>
            {/* Address */}
            <div className="form-group col-12 col-md-6">
              <label className="form-label" htmlFor="address">Address Line 1</label>
              <input type="text" id="address" className="form-control" placeholder="Address" required />
            </div>
            {/* Address */}
            <div className="form-group col-12 col-md-6">
              <label className="form-label" htmlFor="address2">Address Line 2</label>
              <input type="text" id="address2" className="form-control" placeholder="Address" required />
            </div>
            {/* State */}
            <div className="form-group col-12 col-md-6">
              <label className="form-label">State</label>
              <div className="dropdown bootstrap-select" style={{width: '100%'}}><select className="selectpicker" data-width="100%">
                  <option value>Select State</option>
                  <option value={1}>Gujarat</option>
                  <option value={2}>Rajasthan</option>
                  <option value={3}>Maharashtra</option>
                </select><button type="button" tabIndex={-1} className="btn dropdown-toggle btn-light bs-placeholder" data-toggle="dropdown" role="combobox" aria-owns="bs-select-1" aria-haspopup="listbox" aria-expanded="false" title="Select State"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Select State</div></div> </div></button><div className="dropdown-menu "><div className="inner show" role="listbox" id="bs-select-1" tabIndex={-1}><ul className="dropdown-menu inner show" role="presentation" /></div></div></div>
            </div>
            {/* Country */}
            <div className="form-group col-12 col-md-6">
              <label className="form-label">Country</label>
              <div className="dropdown bootstrap-select" style={{width: '100%'}}><select className="selectpicker" data-width="100%">
                  <option value>Select Country</option>
                  <option value={1}>India</option>
                  <option value={2}>UK</option>
                  <option value={3}>USA</option>
                </select><button type="button" tabIndex={-1} className="btn dropdown-toggle btn-light bs-placeholder" data-toggle="dropdown" role="combobox" aria-owns="bs-select-2" aria-haspopup="listbox" aria-expanded="false" title="Select Country"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Select Country</div></div> </div></button><div className="dropdown-menu "><div className="inner show" role="listbox" id="bs-select-2" tabIndex={-1}><ul className="dropdown-menu inner show" role="presentation" /></div></div></div>
            </div>
            <div className="col-12">
              {/* Button */}
              <button className="btn btn-primary" type="submit">
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}