import { Fragment } from "react";

export default function Baru() {
  return (
    <Fragment>
      <div className="py-4 py-lg-6 bg-primary">
        <div className="container">
          <div className="row">
            <div className="offset-lg-1 col-lg-10 col-md-12 col-12">
              <div className="d-lg-flex align-items-center justify-content-between">
                {/* Content */}
                <div className="mb-4 mb-lg-0">
                  <h1 className="text-white mb-1">Buat Kursus Baru</h1>
                  <p className="mb-0 text-white lead">
                    Cukup isi formulir dan buat kursus kamu.
                  </p>
                </div>
                <div>
                  <a href="/instruktur/kursus" className="btn btn-white mr-2">Kembali</a>
                  <a href="#" className="btn btn-success ">Simpan</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-12">
        <div className="container">
          <div id="courseForm" className="bs-stepper">
            <div className="row">
              <div className="offset-lg-1 col-lg-10 col-md-12 col-12">

                {/* Stepper Button */}
                <div className="bs-stepper-header shadow-sm" role="tablist">
                  <div className="step active" data-target="#test-l-1">
                    <button type="button" className="step-trigger" role="tab" id="courseFormtrigger1" aria-controls="test-l-1" aria-selected="true">
                      <span className="bs-stepper-circle">1</span>
                      <span className="bs-stepper-label">Informasi</span>
                    </button>
                  </div>
                  <div className="bs-stepper-line" />
                  <div className="step" data-target="#test-l-2">
                    <button type="button" className="step-trigger" role="tab" id="courseFormtrigger2" aria-controls="test-l-2" aria-selected="false">
                      <span className="bs-stepper-circle">2</span>
                      <span className="bs-stepper-label">Media</span>
                    </button>
                  </div>
                  <div className="bs-stepper-line" />
                  <div className="step" data-target="#test-l-3">
                    <button type="button" className="step-trigger" role="tab" id="courseFormtrigger3" aria-controls="test-l-3" aria-selected="false">
                      <span className="bs-stepper-circle">3</span>
                      <span className="bs-stepper-label">Kurikulum</span>
                    </button>
                  </div>
                  <div className="bs-stepper-line" />
                  <div className="step" data-target="#test-l-4">
                    <button type="button" className="step-trigger" role="tab" id="courseFormtrigger4" aria-controls="test-l-4" aria-selected="false">
                      <span className="bs-stepper-circle">4</span>
                      <span className="bs-stepper-label">Persyaratan</span>
                    </button>
                  </div>
                </div>
                {/* Stepper content */}
                <div className="bs-stepper-content mt-5">
                  <form onsubmit="return false">
                    {/* Content one */}
                    <div id="test-l-1" role="tabpanel" className="bs-stepper-pane fade dstepper-block dstepper-none" aria-labelledby="courseFormtrigger1">
                      {/* Card */}
                      <div className="card mb-3 ">
                        <div className="card-header border-bottom px-4 py-3">
                          <h4 className="mb-0">Basic Information</h4>
                        </div>
                        {/* Card body */}
                        <div className="card-body">
                          <div className="form-group">
                            <label htmlFor="courseTitle" className="form-label">Course Title</label>
                            <input id="courseTitle" className="form-control" type="text" placeholder="Course Title" />
                            <small>Write a 60 character course title.</small>
                          </div>
                          <div className="form-group">
                            <label className="form-label">Courses category</label>
                            <div className="dropdown bootstrap-select dropup" style={{width: '100%'}}><select className="selectpicker" data-width="100%" tabIndex="null">
                                <option value>Select category</option>
                                <option value="React">React</option>
                                <option value="Javascript">Javascript</option>
                                <option value="HTML">HTML</option>
                                <option value="Vue">Vue js</option>
                                <option value="Gulp">Gulp js</option>
                              </select><button type="button" tabIndex={-1} className="btn dropdown-toggle btn-light bs-placeholder" data-toggle="dropdown" role="combobox" aria-owns="bs-select-1" aria-haspopup="listbox" aria-expanded="false" title="Select category"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Select category</div></div> </div></button><div className="dropdown-menu" style={{maxHeight: '547.781px', overflow: 'hidden', minHeight: 114}}><div className="inner show" role="listbox" id="bs-select-1" tabIndex={-1} aria-activedescendant="bs-select-1-0" style={{maxHeight: '531.781px', overflowY: 'auto', minHeight: 98}}><ul className="dropdown-menu inner show" role="presentation" style={{marginTop: 0, marginBottom: 0}}><li className="selected active"><a role="option" className="dropdown-item active selected" id="bs-select-1-0" tabIndex={0} aria-setsize={6} aria-posinset={1} aria-selected="true"><span className="text">Select category</span></a></li><li className><a role="option" className="dropdown-item" id="bs-select-1-1" tabIndex={0} aria-setsize={6} aria-posinset={2}><span className="text">React</span></a></li><li><a role="option" className="dropdown-item" id="bs-select-1-2" tabIndex={0} aria-setsize={6} aria-posinset={3}><span className="text">Javascript</span></a></li><li><a role="option" className="dropdown-item" id="bs-select-1-3" tabIndex={0} aria-setsize={6} aria-posinset={4}><span className="text">HTML</span></a></li><li><a role="option" className="dropdown-item" id="bs-select-1-4" tabIndex={0} aria-setsize={6} aria-posinset={5}><span className="text">Vue js</span></a></li><li><a role="option" className="dropdown-item" id="bs-select-1-5" tabIndex={0} aria-setsize={6} aria-posinset={6}><span className="text">Gulp js</span></a></li></ul></div></div></div>
                            <small>Help people find your courses by choosing
                              categories that represent your course.</small>
                          </div>
                          <div className="form-group">
                            <label className="form-label">Courses level</label>
                            <div className="dropdown bootstrap-select dropup" style={{width: '100%'}}><select className="selectpicker" data-width="100%" tabIndex="null">
                                <option value>Select level</option>
                                <option value="intermediate">Intermediate</option>
                                <option value="Beignners">Beignners</option>
                                <option value="Advance">Advance</option>
                              </select><button type="button" tabIndex={-1} className="btn dropdown-toggle btn-light bs-placeholder" data-toggle="dropdown" role="combobox" aria-owns="bs-select-2" aria-haspopup="listbox" aria-expanded="false" title="Select level"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Select level</div></div> </div></button><div className="dropdown-menu" style={{maxHeight: '663.781px', overflow: 'hidden', minHeight: 114}}><div className="inner show" role="listbox" id="bs-select-2" tabIndex={-1} aria-activedescendant="bs-select-2-0" style={{maxHeight: '647.781px', overflowY: 'auto', minHeight: 98}}><ul className="dropdown-menu inner show" role="presentation" style={{marginTop: 0, marginBottom: 0}}><li className="selected active"><a role="option" className="dropdown-item active selected" id="bs-select-2-0" tabIndex={0} aria-setsize={4} aria-posinset={1} aria-selected="true"><span className="text">Select level</span></a></li><li><a role="option" className="dropdown-item" id="bs-select-2-1" tabIndex={0} aria-setsize={4} aria-posinset={2}><span className="text">Intermediate</span></a></li><li><a role="option" className="dropdown-item" id="bs-select-2-2" tabIndex={0} aria-setsize={4} aria-posinset={3}><span className="text">Beignners</span></a></li><li><a role="option" className="dropdown-item" id="bs-select-2-3" tabIndex={0} aria-setsize={4} aria-posinset={4}><span className="text">Advance</span></a></li></ul></div></div></div>
                          </div>
                          <div className="form-group">
                            <label className="form-label">Course Description</label>
                            <div className="ql-toolbar ql-snow"><span className="ql-formats"><span className="ql-header ql-picker"><span className="ql-picker-label" tabIndex={0} role="button" aria-expanded="false" aria-controls="ql-picker-options-0"><svg viewBox="0 0 18 18"> <polygon className="ql-stroke" points="7 11 9 13 11 11 7 11" /> <polygon className="ql-stroke" points="7 7 9 5 11 7 7 7" /> </svg></span><span className="ql-picker-options" aria-hidden="true" tabIndex={-1} id="ql-picker-options-0"><span tabIndex={0} role="button" className="ql-picker-item" data-value={1} /><span tabIndex={0} role="button" className="ql-picker-item" data-value={2} /><span tabIndex={0} role="button" className="ql-picker-item" data-value={3} /><span tabIndex={0} role="button" className="ql-picker-item" /></span></span><select className="ql-header" style={{display: 'none'}}><option value={1} /><option value={2} /><option value={3} /><option selected="selected" /></select></span><span className="ql-formats"><button type="button" className="ql-bold"><svg viewBox="0 0 18 18"> <path className="ql-stroke" d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z" /> <path className="ql-stroke" d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z" /> </svg></button><button type="button" className="ql-italic"><svg viewBox="0 0 18 18"> <line className="ql-stroke" x1={7} x2={13} y1={4} y2={4} /> <line className="ql-stroke" x1={5} x2={11} y1={14} y2={14} /> <line className="ql-stroke" x1={8} x2={10} y1={14} y2={4} /> </svg></button><button type="button" className="ql-underline"><svg viewBox="0 0 18 18"> <path className="ql-stroke" d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3" /> <rect className="ql-fill" height={1} rx="0.5" ry="0.5" width={12} x={3} y={15} /> </svg></button><button type="button" className="ql-link"><svg viewBox="0 0 18 18"> <line className="ql-stroke" x1={7} x2={11} y1={7} y2={11} /> <path className="ql-even ql-stroke" d="M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z" /> <path className="ql-even ql-stroke" d="M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z" /> </svg></button></span><span className="ql-formats"><button type="button" className="ql-list" value="ordered"><svg viewBox="0 0 18 18"> <line className="ql-stroke" x1={7} x2={15} y1={4} y2={4} /> <line className="ql-stroke" x1={7} x2={15} y1={9} y2={9} /> <line className="ql-stroke" x1={7} x2={15} y1={14} y2={14} /> <line className="ql-stroke ql-thin" x1="2.5" x2="4.5" y1="5.5" y2="5.5" /> <path className="ql-fill" d="M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z" /> <path className="ql-stroke ql-thin" d="M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156" /> <path className="ql-stroke ql-thin" d="M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109" /> </svg></button><button type="button" className="ql-list" value="bullet"><svg viewBox="0 0 18 18"> <line className="ql-stroke" x1={6} x2={15} y1={4} y2={4} /> <line className="ql-stroke" x1={6} x2={15} y1={9} y2={9} /> <line className="ql-stroke" x1={6} x2={15} y1={14} y2={14} /> <line className="ql-stroke" x1={3} x2={3} y1={4} y2={4} /> <line className="ql-stroke" x1={3} x2={3} y1={9} y2={9} /> <line className="ql-stroke" x1={3} x2={3} y1={14} y2={14} /> </svg></button></span><span className="ql-formats"><button type="button" className="ql-clean"><svg className viewBox="0 0 18 18"> <line className="ql-stroke" x1={5} x2={13} y1={3} y2={3} /> <line className="ql-stroke" x1={6} x2="9.35" y1={12} y2={3} /> <line className="ql-stroke" x1={11} x2={15} y1={11} y2={15} /> <line className="ql-stroke" x1={15} x2={11} y1={11} y2={15} /> <rect className="ql-fill" height={1} rx="0.5" ry="0.5" width={7} x={2} y={14} /> </svg></button></span></div><div id="editor" className="ql-container ql-snow"><div className="ql-editor" data-gramm="false" contentEditable="true"><p>Insert course description</p><p>Some initial <strong>bold</strong> text</p><p><br /></p></div><div className="ql-clipboard" contentEditable="true" tabIndex={-1} /><div className="ql-tooltip ql-hidden"><a className="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank" /><input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL" /><a className="ql-action" /><a className="ql-remove" /></div></div>
                            <small>A brief summary of your courses.</small>
                          </div>
                        </div>
                      </div>
                      {/* Button */}
                      <button className="btn btn-primary" onclick="courseForm.next()">
                        Next
                      </button>
                    </div>
                    {/* Content two */}
                    <div id="test-l-2" role="tabpanel" className="bs-stepper-pane fade dstepper-block dstepper-none" aria-labelledby="courseFormtrigger2">
                      {/* Card */}
                      <div className="card mb-3  border-0">
                        <div className="card-header border-bottom px-4 py-3">
                          <h4 className="mb-0">Courses Media</h4>
                        </div>
                        {/* Card body */}
                        <div className="card-body">
                          <div className="custom-file-container" data-upload-id="courseCoverImg" id="courseCoverImg">
                            <label className="form-label">Course cover image
                              <a href="javascript:void(0)" className="custom-file-container__image-clear" title="Clear Image" /></label>
                            <label className="custom-file-container__custom-file">
                              <input type="file" className="custom-file-container__custom-file__custom-file-input" accept="image/*" />
                              <input type="hidden" name="MAX_FILE_SIZE" defaultValue={10485760} />
                              <span className="custom-file-container__custom-file__custom-file-control"> No File Selected<span className="custom-file-container__custom-file__custom-file-control__button"> Upload File </span></span>
                            </label>
                            <small className="mt-3 d-block">Upload your course image here. It must meet
                              our
                              course image quality standards to be accepted.
                              Important guidelines: 750x440 pixels; .jpg, .jpeg,.
                              gif, or .png. no text on the image.</small>
                            <div className="custom-file-container__image-preview" style={{backgroundImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAiQAAAD6CAMAAACmhqw0AAAA+VBMVEUAAAD29u3u7unt7ent7enu7uju7uihoqCio6Gio6KjpKOkpaSmpqSmp6WoqKaqq6mqq6qrq6qsrautrauur62wsa6xsa+xsrCys7GztLK0tbK1trS2t7S3t7W4uba5ure6u7e7vLm8vbu9vrvAwL3Awb3DxMHFxcPGxsPHx8TIycXLzMjLzMnMzMnNzsrPz8vP0MzQ0M3S0s/U1NDV1dLX19TY2NTY2NXZ2dba2tXb29bc3Nfc3Njc3dnd3dre3tre39vg4Nvh4dzi4t3i4t7j497k5N/k5ODl5eDl5eHl5uLm5uHn5+Lo6OPp6eTq6uXr6+bs7Oft7eh54KxIAAAAB3RSTlMAHKbl5uztvql9swAABA1JREFUeNrt3VlT01AYgOG0oEEE910URNzFBVFcqCgKirLU/P8fI3QYbEOSdtrMyJzzvHfMlFx833NBQuY0SRrN8UwqabzZSJLGaYNQVacaSdMUVF0zGTMEVTeWmIH6BYkgESSCRJAIEkEiSCRIBIkgESSCRJAIEkEiQSJIBIkgESSCRJAIEgkSQSJIBIkgESSCRJBIkAgSQSJIBIkgESSCRIJEkAgSQSJIBIkgkSARJIJEkAgSQSJIBIkEiSARJIJEkAgSQSJIJEgEiSARJIJEkAgSQSJBIkgEiSARJIJEkAgSCRJBIkgEiSARJIJEgkSQ5PvxbdS+tyEJuZVb0+noTV579geSQGs/SOvqxiYkYfYwra+rbUhC7NNEjUjSJ5CE2P06jaTnIAmxKwe7vb468t3N14WOki1IAuzMwWrf1HCh3Q6S95AEWGe1b0/WlSCBBBJIIAkdSXvt1aNXa21IICld7dJU5+epJUggKV7tzuzRA4/ZHUggKVrtfNdjsXlIIClY7XLPw9NlSCA5vtqLPUguQgLJsdX+zv0fZhsSSPKrXckhWSn5jV8zG5DEiuR1DsnrEiOX0vMbkESKZDWHZLXMSFqsBJIIkOz1vn40sVdqpFgJJDHc3dzsQXKzwkihEkhiQLI+2f3y+3qVkSIlkMSAJFvsQrJYbaRACSRRIMlenj0UcPZlPyPHlUASB5Jsc+7cwevMc5v9jRxTAkkkSPbb+riVZYMYySuBJB4kJRUYySmBJHYkhUZ6lUASOZISIz1KIIkbSamRbiWQxIZkvT2YkS4lkESGpDV9tz2YkX9KIIkLSWs6TY+U9DFypASSqJC0OicfHSrpa2T/k5BEh6R1eDpWR8kARtIZSGJD0jo6QW1fySBGIIkOSavrlL27PwcxAklsSFo9JzFOppBAkl9ta5jTOiGJCslQRiCJCslwRiCJCcmQRiCJCMmwRiCJB8mXoU+YhyQaJM9TSCCBBBJIIIEEEkgggQQSSCCJAsnyzLA9hiQWJCfnSpBAAgkkkATXxFCnPxfU7iB5B0mAXT5Y7Z3t0Y087SDZgCTA7tX6bZ5TGSQBtlwrkgVIgmy+RiMXdiEJsp3b9Rn5nEESaC/O1/P3yMJuBkm4bX94O2rvNiKbWXRIBIkgESSCRJAIEkEiQSJIBIkgESSCRJAIEgkSQSJIBIkgESSCRIJEkAgSQSJIBIkgESQSJIJEkAgSQSJIBIkgkSARJIJEkAgSQSJIBIkEiSARJIJEkAgSQSJIJEgEiSARJIJEkAgSCRJBIkgEiSARJIJEkEiQCBJBIkgEiSARJIJEgkSQCBJBIkgEiSARJBIkgkSQ6P8gGTMDVTeWNA1B1TWTxmlTUFWnGknSaI4bhMoabzaSv+4BHFVoHZzfAAAAAElFTkSuQmCC")'}} />
                          </div>
                          <div>
                            <input type="url" className="form-control" placeholder="Video URL" />
                          </div>
                          <small className="mt-3 d-block">Enter a valid video URL. Students who watch a
                            well-made promo video are 5X more likely to enroll in
                            your course.
                          </small>
                          <div className="mt-3 d-flex justify-content-center position-relative rounded py-14 border-white border rounded bg-cover" style={{backgroundImage: 'url(../assets/images/course/course-javascript.jpg)'}}>
                            <a className="popup-youtube icon-shape rounded-circle btn-play icon-xl text-decoration-none" href="https://www.youtube.com/watch?v=JRzWRZahOVU">
                              <i className="fe fe-play font-size-lg" />
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* Button */}
                      <div className="d-flex justify-content-between">
                        <button className="btn btn-secondary" onclick="courseForm.previous()">
                          Previous
                        </button>
                        <button className="btn btn-primary" onclick="courseForm.next()">
                          Next
                        </button>
                      </div>
                    </div>
                    {/* Content three */}
                    <div id="test-l-3" role="tabpanel" className="bs-stepper-pane fade dstepper-block dstepper-none" aria-labelledby="courseFormtrigger3">
                      {/* Card */}
                      <div className="card mb-3  border-0">
                        <div className="card-header border-bottom px-4 py-3">
                          <h4 className="mb-0">Curriculum</h4>
                        </div>
                        {/* Card body */}
                        <div className="card-body ">
                          <div className="bg-light rounded p-2 mb-4">
                            <h4>Introduction to JavaScript</h4>
                            {/* List group */}
                            <div className="list-group list-group-flush border-top-0" id="courseList">
                              <div id="courseOne">
                                <div className="list-group-item rounded px-3 mb-1" id="introduction">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <h5 className="mb-0">
                                      <a href="#!" className="text-inherit">
                                        <i className="fe fe-menu mr-1 text-muted align-middle" />
                                        <span className="align-middle">Introduction</span>
                                      </a>
                                    </h5>
                                    <div><a href="#!" className="mr-1 text-inherit" data-toggle="tooltip" data-placement="top" title data-original-title="Edit"><i className="fe fe-edit font-size-xs" /></a>
                                      <a href="#!" className="mr-1 text-inherit" data-toggle="tooltip" data-placement="top" title data-original-title="Delete"><i className="fe fe-trash-2 font-size-xs" /></a>
                                      <a href="#!" className="text-inherit" aria-expanded="true" data-toggle="collapse" data-target="#collapselistOne" aria-controls="collapselistOne">
                                        <span className="chevron-arrow"><i className="fe fe-chevron-down" /></span>
                                      </a>
                                    </div>
                                  </div>
                                  <div id="collapselistOne" className="collapse show" aria-labelledby="introduction" data-parent="#courseList">
                                    <div className="card-body">
                                      <a href="#!" className="btn btn-secondary btn-sm">Add
                                        Article +</a>
                                      <a href="#!" className="btn btn-secondary btn-sm">Add
                                        Description +</a>
                                    </div>
                                  </div>
                                </div>
                                <div className="list-group-item rounded px-3 mb-1" id="development">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <h5 className="mb-0">
                                      <a href="#!" className="text-inherit">
                                        <i className="fe fe-menu mr-1 text-muted align-middle" />
                                        <span className="align-middle">Installing
                                          Development Software</span>
                                      </a>
                                    </h5>
                                    <div><a href="#!" className="mr-1 text-inherit" data-toggle="tooltip" data-placement="top" title data-original-title="Edit"><i className="fe fe-edit font-size-xs" /></a>
                                      <a href="#!" className="mr-1 text-inherit" data-toggle="tooltip" data-placement="top" title data-original-title="Delete"><i className="fe fe-trash-2 font-size-xs" /></a>
                                      <a href="#!" className="text-inherit" data-toggle="collapse" data-target="#collapselistTwo" aria-expanded="false" aria-controls="collapselistTwo">
                                        <span className="chevron-arrow"><i className="fe fe-chevron-down" /></span>
                                      </a>
                                    </div>
                                  </div>
                                  <div id="collapselistTwo" className="collapse" aria-labelledby="development" data-parent="#courseList">
                                    <div className="card-body">
                                      <a href="#!" className="btn btn-secondary btn-sm">Add
                                        Article +</a>
                                      <a href="#!" className="btn btn-secondary btn-sm">Add
                                        Description +</a>
                                    </div>
                                  </div>
                                </div>
                                <div className="list-group-item rounded px-3 mb-1" id="project">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <h5 className="mb-0">
                                      <a href="#!" className="text-inherit">
                                        <i className="fe fe-menu mr-1 text-muted align-middle" />
                                        <span className="align-middle">Hello World Project
                                          from GitHub</span>
                                      </a>
                                    </h5>
                                    <div><a href="#!" className="mr-1 text-inherit" data-toggle="tooltip" data-placement="top" title data-original-title="Edit"><i className="fe fe-edit font-size-xs" /></a>
                                      <a href="#!" className="mr-1 text-inherit" data-toggle="tooltip" data-placement="top" title data-original-title="Delete"><i className="fe fe-trash-2 font-size-xs" /></a>
                                      <a href="#!" className="text-inherit" data-toggle="collapse" data-target="#collapselistThree" aria-expanded="false" aria-controls="collapselistThree">
                                        <span className="chevron-arrow"><i className="fe fe-chevron-down" /></span></a>
                                    </div>
                                  </div>
                                  <div id="collapselistThree" className="collapse" aria-labelledby="project" data-parent="#courseList">
                                    <div className="card-body">
                                      <a href="#!" className="btn btn-secondary btn-sm">Add
                                        Article +</a>
                                      <a href="#!" className="btn btn-secondary btn-sm">Add
                                        Description +</a>
                                    </div>
                                  </div>
                                </div>
                                <div className="list-group-item rounded px-3 mb-1" id="sample">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <h5 className="mb-0">
                                      <a href="#!" className="text-inherit">
                                        <i className="fe fe-menu mr-1 text-muted align-middle" />
                                        <span className="align-middle">Our Sample
                                          Website</span>
                                      </a>
                                    </h5>
                                    <div><a href="#!" className="mr-1 text-inherit" data-toggle="tooltip" data-placement="top" title data-original-title="Edit"><i className="fe fe-edit font-size-xs" /></a>
                                      <a href="#!" className="mr-1 text-inherit" data-toggle="tooltip" data-placement="top" title data-original-title="Delete"><i className="fe fe-trash-2 font-size-xs" /></a>
                                      <a href="#!" className="text-inherit" data-toggle="collapse" data-target="#collapselistFour" aria-expanded="false" aria-controls="collapselistFour">
                                        <span className="chevron-arrow"><i className="fe fe-chevron-down" /></span></a>
                                    </div>
                                  </div>
                                  <div id="collapselistFour" className="collapse" aria-labelledby="sample" data-parent="#courseList">
                                    <div className="card-body">
                                      <a href="#!" className="btn btn-secondary btn-sm">Add
                                        Article +</a>
                                      <a href="#!" className="btn btn-secondary btn-sm">Add
                                        Description +</a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <a href="#!" className="btn btn-outline-primary btn-sm mt-3" data-toggle="modal" data-target="#addLectureModal">Add Lecture +</a>
                          </div>
                          <div className="bg-light rounded p-2 mb-4">
                            <h4>JavaScript Beginnings</h4>
                            {/* List group */}
                            <div className="list-group list-group-flush border-top-0" id="courseListSecond">
                              <div id="courseTwo">
                                <div className="list-group-item rounded px-3 mb-1" id="introductionSecond">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <h5 className="mb-0">
                                      <a href="#!" className="text-inherit">
                                        <i className="fe fe-menu mr-1 text-muted align-middle" />
                                        <span className="align-middle">Introduction</span>
                                      </a>
                                    </h5>
                                    <div><a href="#!" className="mr-1 text-inherit" data-toggle="tooltip" data-placement="top" title data-original-title="Edit"><i className="fe fe-edit font-size-xs" /></a>
                                      <a href="#!" className="mr-1 text-inherit" data-toggle="tooltip" data-placement="top" title data-original-title="Delete"><i className="fe fe-trash-2 font-size-xs" /></a>
                                      <a href="#!" className="text-inherit" data-toggle="collapse" data-target="#collapselistFive" aria-expanded="false" aria-controls="collapselistFive">
                                        <span className="chevron-arrow"><i className="fe fe-chevron-down" /></span></a>
                                    </div>
                                  </div>
                                  <div id="collapselistFive" className="collapse" aria-labelledby="introductionSecond" data-parent="#courseListSecond">
                                    <div className="card-body">
                                      <a href="#!" className="btn btn-secondary btn-sm">Add
                                        Article +</a>
                                      <a href="#!" className="btn btn-secondary btn-sm">Add
                                        Description +</a>
                                    </div>
                                  </div>
                                </div>
                                <div className="list-group-item rounded px-3 mb-1" id="developmentSecond">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <h5 className="mb-0">
                                      <a href="#!" className="text-inherit">
                                        <i className="fe fe-menu mr-1 text-muted align-middle" />
                                        <span className="align-middle">Installing
                                          Development Software</span>
                                      </a>
                                    </h5>
                                    <div><a href="#!" className="mr-1 text-inherit" data-toggle="tooltip" data-placement="top" title data-original-title="Edit"><i className="fe fe-edit font-size-xs" /></a>
                                      <a href="#!" className="mr-1 text-inherit" data-toggle="tooltip" data-placement="top" title data-original-title="Delete"><i className="fe fe-trash-2 font-size-xs" /></a>
                                      <a href="#!" className="text-inherit" data-toggle="collapse" data-target="#collapselistSix" aria-expanded="false" aria-controls="collapselistSix">
                                        <span className="chevron-arrow"><i className="fe fe-chevron-down" /></span></a>
                                    </div>
                                  </div>
                                  <div id="collapselistSix" className="collapse" aria-labelledby="developmentSecond" data-parent="#courseListSecond">
                                    <div className="card-body">
                                      <a href="#!" className="btn btn-secondary btn-sm">Add
                                        Article +</a>
                                      <a href="#!" className="btn btn-secondary btn-sm">Add
                                        Description +</a>
                                    </div>
                                  </div>
                                </div>
                                <div className="list-group-item rounded px-3 mb-1" id="projectSecond">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <h5 className="mb-0">
                                      <a href="#!" className="text-inherit">
                                        <i className="fe fe-menu mr-1 text-muted align-middle" />
                                        <span className="align-middle">Hello World Project
                                          from GitHub</span>
                                      </a>
                                    </h5>
                                    <div><a href="#!" className="mr-1 text-inherit" data-toggle="tooltip" data-placement="top" title data-original-title="Edit"><i className="fe fe-edit font-size-xs" /></a>
                                      <a href="#!" className="mr-1 text-inherit" data-toggle="tooltip" data-placement="top" title data-original-title="Delete"><i className="fe fe-trash-2 font-size-xs" /></a>
                                      <a href="#!" className="text-inherit" data-toggle="collapse" data-target="#collapselistSeven" aria-expanded="false" aria-controls="collapselistSeven">
                                        <span className="chevron-arrow"><i className="fe fe-chevron-down" /></span></a>
                                    </div>
                                  </div>
                                  <div id="collapselistSeven" className="collapse" aria-labelledby="projectSecond" data-parent="#courseListSecond">
                                    <div className="card-body">
                                      <a href="#!" className="btn btn-secondary btn-sm">Add
                                        Article +</a>
                                      <a href="#!" className="btn btn-secondary btn-sm">Add
                                        Description +</a>
                                    </div>
                                  </div>
                                </div>
                                <div className="list-group-item rounded px-3 mb-1" id="sampleSecond">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <h5 className="mb-0">
                                      <a href="#!" className="text-inherit">
                                        <i className="fe fe-menu mr-1 text-muted align-middle" />
                                        <span className="align-middle">Our Sample
                                          Website</span>
                                      </a>
                                    </h5>
                                    <div><a href="#!" className="mr-1 text-inherit" data-toggle="tooltip" data-placement="top" title data-original-title="Edit"><i className="fe fe-edit font-size-xs" /></a>
                                      <a href="#!" className="mr-1 text-inherit" data-toggle="tooltip" data-placement="top" title data-original-title="Delete"><i className="fe fe-trash-2 font-size-xs" /></a>
                                      <a href="#!" className="text-inherit" data-toggle="collapse" data-target="#collapselistEight" aria-expanded="false" aria-controls="collapselistEight">
                                        <span className="chevron-arrow"><i className="fe fe-chevron-down" /></span></a>
                                    </div>
                                  </div>
                                  <div id="collapselistEight" className="collapse" aria-labelledby="sampleSecond" data-parent="#courseListSecond">
                                    <div className="card-body">
                                      <a href="#!" className="btn btn-secondary btn-sm">Add
                                        Article +</a>
                                      <a href="#!" className="btn btn-secondary btn-sm">Add
                                        Description +</a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <a href="#!" className="btn btn-outline-primary btn-sm mt-3" data-toggle="modal" data-target="#addLectureModal">Add Lecture +</a>
                          </div>
                          <a href="#!" className="btn btn-outline-primary btn-sm" data-toggle="modal" data-target="#addSectionModal">Add Section</a>
                        </div>
                      </div>
                      {/* Button */}
                      <div className="d-flex justify-content-between">
                        <button className="btn btn-secondary" onclick="courseForm.previous()">
                          Previous
                        </button>
                        <button className="btn btn-primary" onclick="courseForm.next()">
                          Next
                        </button>
                      </div>
                    </div>
                    {/* Content four */}
                    <div id="test-l-4" role="tabpanel" className="bs-stepper-pane fade dstepper-block active" aria-labelledby="courseFormtrigger4">
                      {/* Card */}
                      <div className="card mb-3  border-0">
                        <div className="card-header border-bottom px-4 py-3">
                          <h4 className="mb-0">Requirements</h4>
                        </div>
                        {/* Card body */}
                        <div className="card-body">
                          <tags className="tagify" tabIndex={-1}>
                            <tag title="jquery" contentEditable="false" spellCheck="false" tabIndex={-1} className="tagify__tag tagify--noAnim" __isvalid="true" value="jquery"><x title className="tagify__tag__removeBtn" role="button" aria-label="remove tag" /><div><span className="tagify__tag-text">jquery</span></div></tag><tag title="bootstrap" contentEditable="false" spellCheck="false" tabIndex={-1} className="tagify__tag tagify--noAnim" __isvalid="true" value="bootstrap"><x title className="tagify__tag__removeBtn" role="button" aria-label="remove tag" /><div><span className="tagify__tag-text">bootstrap</span></div></tag><span contentEditable data-placeholder="​" aria-placeholder className="tagify__input" role="textbox" aria-autocomplete="both" aria-multiline="false" />
                          </tags><input name="tags" defaultValue="jquery, bootstrap" autofocus />
                        </div>
                      </div>
                      <div className="d-flex justify-content-between mb-22">
                        {/* Button */}
                        <button className="btn btn-secondary mt-5" onclick="courseForm.previous()">
                          Previous
                        </button>
                        <button type="submit" className="btn btn-danger mt-5">
                          Submit For Review
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </Fragment>
  )
}