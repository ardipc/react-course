import { Fragment } from "react";

export default function Detail() {
  return (
    <Fragment>
      <div className="pt-lg-8 pb-lg-16 pt-8 pb-12 bg-primary">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-7 col-md-12">
              <div>
                <h1 className="text-white display-4 font-weight-semi-bold">Getting Started with JavaScript</h1>
                <p className="text-white mb-6 lead">
                  JavaScript is the popular programming language which powers web pages and web applications. This course will get you started coding in JavaScript.
                </p>
                <div className="d-flex align-items-center">
                  <a href="#!" className="bookmark text-white text-decoration-none">
                    <i className="fe fe-bookmark text-white-50 mr-2" />Bookmark
                  </a>
                  <span className="text-white ml-3"><i className="fe fe-user text-white-50" /> 1200 Enrolled </span>
                  <span className="ml-4">
                    <i className="mdi mdi-star mr-n1 text-warning" />
                    <i className="mdi mdi-star mr-n1 text-warning" />
                    <i className="mdi mdi-star mr-n1 text-warning" />
                    <i className="mdi mdi-star mr-n1 text-warning" />
                    <i className="mdi mdi-star mr-n1-half text-warning" />
                    <span className="text-white">(140)</span>
                  </span>
                  <span className="text-white ml-4 d-none d-md-block">
                    <svg width={16} height={16} viewBox="0 0 16
                              16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x={3} y={8} width={2} height={6} rx={1} fill="#DBD8E9" />
                      <rect x={7} y={5} width={2} height={9} rx={1} fill="#DBD8E9" />
                      <rect x={11} y={2} width={2} height={12} rx={1} fill="#DBD8E9" />
                    </svg>
                    <span className="align-middle">
                      Intermediate
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 col-12 mt-n8 mb-4 mb-lg-0">
              {/* Card */}
              <div className="card rounded-lg">
                {/* Card header */}
                <div className="card-header border-bottom-0 p-0">
                  <div>
                    {/* Nav */}
                    <ul className="nav nav-lb-tab" id="tab" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" id="table-tab" data-toggle="pill" href="#table" role="tab" aria-controls="table" aria-selected="true">Contents</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="description-tab" data-toggle="pill" href="#description" role="tab" aria-controls="description" aria-selected="false">Description</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="review-tab" data-toggle="pill" href="#review" role="tab" aria-controls="review" aria-selected="false">Reviews</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="transcript-tab" data-toggle="pill" href="#transcript" role="tab" aria-controls="transcript" aria-selected="false">Transcript</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="faq-tab" data-toggle="pill" href="#faq" role="tab" aria-controls="faq" aria-selected="false">FAQ</a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Card Body */}
                <div className="card-body">
                  <div className="tab-content" id="tabContent">
                    <div className="tab-pane fade show active" id="table" role="tabpanel" aria-labelledby="table-tab">
                      {/* Card */}
                      <div className="accordion" id="courseAccordion">
                        <div>
                          {/* List group */}
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item px-0 pt-0">
                              {/* Toggle */}
                              <a className=" h4 mb-0 d-flex align-items-center text-inherit text-decoration-none active" data-toggle="collapse" href="#courseTwo" aria-expanded="true" aria-controls="courseTwo">
                                <div className="mr-auto">
                                  Introduction to JavaScript
                                </div>
                                {/* Chevron */}
                                <span className="chevron-arrow ml-4">
                                  <i className="fe fe-chevron-down font-size-md" />
                                </span>
                              </a>
                              {/* Row */}
                              {/* Collapse */}
                              <div className="collapse show" id="courseTwo" data-parent="#courseAccordion">
                                <div className="pt-3 pb-2">
                                  <a href="course-resume.html" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-primary icon-sm rounded-circle mr-2"><i className="mdi mdi-play font-size-md" /></span>
                                      <span>Introduction</span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>1m 7s</span>
                                    </div>
                                  </a>
                                  <a href="course-resume.html" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-primary icon-sm rounded-circle mr-2"><i className="mdi mdi-play font-size-md" /></span>
                                      <span>Installing Development Software</span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>3m 11s</span>
                                    </div>
                                  </a>
                                  <a href="course-resume.html" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-primary icon-sm rounded-circle mr-2"><i className="mdi mdi-play font-size-md" /></span>
                                      <span>Hello World Project from GitHub</span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>2m 33s</span>
                                    </div>
                                  </a>
                                  <a href="course-resume.html" className="d-flex justify-content-between align-items-center text-inherit text-decoration-none">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-primary icon-sm rounded-circle mr-2"><i className="mdi mdi-play font-size-md" /></span>
                                      <span>Our Sample Website</span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>2m 15s</span>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </li>
                            {/* List group item */}
                            <li className="list-group-item px-0">
                              {/* Toggle */}
                              <a className="h4 mb-0 d-flex align-items-center text-inherit text-decoration-none" data-toggle="collapse" href="#courseThree" aria-expanded="false" aria-controls="courseThree">
                                <div className="mr-auto">
                                  {/* Title */}
                                  JavaScript Beginning
                                </div>
                                {/* Chevron */}
                                <span className="chevron-arrow ml-4">
                                  <i className="fe fe-chevron-down font-size-md" />
                                </span>
                              </a>
                              {/* Row */}
                              {/* Collapse */}
                              <div className="collapse" id="courseThree" data-parent="#courseAccordion">
                                <div className="pt-3 pb-2">
                                  <a href="course-resume.html" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-primary icon-sm rounded-circle mr-2"><i className="mdi mdi-play font-size-md" /></span>
                                      <span>Introduction</span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>1m 41s</span>
                                    </div>
                                  </a>
                                  <a href="course-resume.html" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-primary icon-sm rounded-circle mr-2"><i className="mdi mdi-play font-size-md" /></span>
                                      <span>Adding JavaScript Code to a Web Page</span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>3m 39s</span>
                                    </div>
                                  </a>
                                  <a href="course-resume.html" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-primary icon-sm rounded-circle mr-2"><i className="mdi mdi-play font-size-md" /></span>
                                      <span>
                                        Working with JavaScript Files
                                      </span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>6m 18s</span>
                                    </div>
                                  </a>
                                  <a href="course-resume.html" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-primary icon-sm rounded-circle mr-2"><i className="mdi mdi-play font-size-md" /></span>
                                      <span>Formatting Code </span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>2m 18s</span>
                                    </div>
                                  </a>
                                  <a href="course-resume.html" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-primary icon-sm rounded-circle mr-2"><i className="mdi mdi-play font-size-md" /></span>
                                      <span>
                                        Detecting and Fixing Errors
                                      </span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>3m 14s</span>
                                    </div>
                                  </a>
                                  <a href="course-resume.html" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-primary icon-sm rounded-circle mr-2"><i className="mdi mdi-play font-size-md" /></span>
                                      <span>Case Sensitivity </span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>1m 48s</span>
                                    </div>
                                  </a>
                                  <a href="course-resume.html" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-primary icon-sm rounded-circle mr-2"><i className="mdi mdi-play font-size-md" /></span>
                                      <span>Commenting Code </span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>2m 24s</span>
                                    </div>
                                  </a>
                                  <a href="course-resume.html" className="mb-0 d-flex justify-content-between align-items-center text-inherit text-decoration-none">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-primary icon-sm rounded-circle mr-2"><i className="mdi mdi-play font-size-md" /></span>
                                      <span>Summary</span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>2m 14s</span>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </li>
                            {/* List group item */}
                            <li className="list-group-item px-0">
                              {/* Toggle */}
                              <a className="h4 mb-0 d-flex align-items-center text-inherit text-decoration-none" data-toggle="collapse" href="#courseFour" aria-expanded="false" aria-controls="courseFour">
                                <div className="mr-auto">
                                  {/* Title */}
                                  Variables and Constants
                                </div>
                                {/* Chevron */}
                                <span className="chevron-arrow ml-4">
                                  <i className="fe fe-chevron-down font-size-md" />
                                </span>
                              </a>
                              {/* Row */}
                              {/* Collapse */}
                              <div className="collapse" id="courseFour" data-parent="#courseAccordion">
                                <div className="pt-3 pb-2">
                                  <a href="#!" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none disableClick">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-secondary icon-sm rounded-circle mr-2"><i className="fe fe-lock font-size-md" /></span>
                                      <span>Introduction</span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>1m 19s</span>
                                    </div>
                                  </a>
                                  <a href="#!" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none disableClick">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-secondary icon-sm rounded-circle mr-2"><i className="fe fe-lock font-size-md" /></span>
                                      <span>What Is a Variable?</span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>2m 11s</span>
                                    </div>
                                  </a>
                                  <a href="#!" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none disableClick">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-secondary icon-sm rounded-circle mr-2"><i className="fe fe-lock font-size-md" /></span>
                                      <span>Declaring Variables </span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>2m 30s</span>
                                    </div>
                                  </a>
                                  <a href="#!" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none disableClick">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-secondary icon-sm rounded-circle mr-2"><i className="fe fe-lock font-size-md" /></span>
                                      <span>Using let to Declare Variables </span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>3m 28s</span>
                                    </div>
                                  </a>
                                  <a href="#!" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none disableClick">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-secondary icon-sm rounded-circle mr-2"><i className="fe fe-lock font-size-md" /></span>
                                      <span>Naming Variables </span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>3m 14s</span>
                                    </div>
                                  </a>
                                  <a href="#!" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none disableClick">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-secondary icon-sm rounded-circle mr-2"><i className="fe fe-lock font-size-md" /></span>
                                      <span>Common Errors Using Variables </span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>3m 30s</span>
                                    </div>
                                  </a>
                                  <a href="#!" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none disableClick">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-secondary icon-sm rounded-circle mr-2"><i className="fe fe-lock font-size-md" /></span>
                                      <span>Changing Variable Values </span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>2m 4s</span>
                                    </div>
                                  </a>
                                  <a href="#!" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none disableClick">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-secondary icon-sm rounded-circle mr-2"><i className="fe fe-lock font-size-md" /></span>
                                      <span>Constants </span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>3m 15s</span>
                                    </div>
                                  </a>
                                  <a href="#!" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none disableClick">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-secondary icon-sm rounded-circle mr-2"><i className="fe fe-lock font-size-md" /></span>
                                      <span>The var Keyword </span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>2m 20s</span>
                                    </div>
                                  </a>
                                  <a href="#!" className="mb-0 d-flex justify-content-between align-items-center text-inherit text-decoration-none disableClick">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-secondary icon-sm rounded-circle mr-2"><i className="fe fe-lock font-size-md" /></span>
                                      <span>Summary</span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>1m 49s</span>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </li>
                            {/* List group item */}
                            <li className="list-group-item px-0">
                              {/* Toggle */}
                              <a className="h4 mb-0 d-flex align-items-center text-inherit text-decoration-none" data-toggle="collapse" href="#courseFive" aria-expanded="false" aria-controls="courseFive">
                                <div className="mr-auto">
                                  {/* Title */}
                                  Types and Operators
                                </div>
                                {/* Chevron */}
                                <span className="chevron-arrow ml-4">
                                  <i className="fe fe-chevron-down font-size-md" />
                                </span>
                              </a>
                              {/* Row */}
                              {/* Collapse */}
                              <div className="collapse" id="courseFive" data-parent="#courseAccordion">
                                <div className="pt-3 pb-2">
                                  <a href="#!" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none disableClick">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-secondary icon-sm rounded-circle mr-2"><i className="fe fe-lock font-size-md" /></span>
                                      <span>Introduction</span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>1m 55s</span>
                                    </div>
                                  </a>
                                  <a href="#!" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none disableClick">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-secondary icon-sm rounded-circle mr-2"><i className="fe fe-lock font-size-md" /></span>
                                      <span>Numbers </span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>6m 14s</span>
                                    </div>
                                  </a>
                                  <a href="#!" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none disableClick">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-secondary icon-sm rounded-circle mr-2"><i className="fe fe-lock font-size-md" /></span>
                                      <span>Operator Precedence </span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>2m 58s</span>
                                    </div>
                                  </a>
                                  <a href="#!" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none disableClick">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-secondary icon-sm rounded-circle mr-2"><i className="fe fe-lock font-size-md" /></span>
                                      <span>Number Precision</span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>1m 22s</span>
                                    </div>
                                  </a>
                                  <a href="#!" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none disableClick">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-secondary icon-sm rounded-circle mr-2"><i className="fe fe-lock font-size-md" /></span>
                                      <span>Negative Numbers </span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>1m 35s</span>
                                    </div>
                                  </a>
                                  <a href="#!" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none disableClick">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-secondary icon-sm rounded-circle mr-2"><i className="fe fe-lock font-size-md" /></span>
                                      <span>Strings </span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>4m 7s</span>
                                    </div>
                                  </a>
                                  <a href="#!" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none disableClick">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-secondary icon-sm rounded-circle mr-2"><i className="fe fe-lock font-size-md" /></span>
                                      <span>Manipulating Strings </span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>5m 8s</span>
                                    </div>
                                  </a>
                                  <a href="#!" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none disableClick">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-secondary icon-sm rounded-circle mr-2"><i className="fe fe-lock font-size-md" /></span>
                                      <span>Converting Strings and Numbers </span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>2m 55s</span>
                                    </div>
                                  </a>
                                  <a href="#!" className="mb-0 d-flex justify-content-between align-items-center text-inherit text-decoration-none disableClick">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-secondary icon-sm rounded-circle mr-2"><i className="fe fe-lock font-size-md" /></span>
                                      <span>Boolean Variables </span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>1m 39s</span>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </li>
                            {/* List group item */}
                            <li className="list-group-item px-0">
                              {/* Toggle */}
                              <a className="h4 mb-0 d-flex align-items-center text-inherit text-decoration-none" data-toggle="collapse" href="#courseSix" aria-expanded="false" aria-controls="courseSix">
                                <div className="mr-auto">
                                  {/* Title */}
                                  Program Flow
                                </div>
                                {/* Chevron */}
                                <span className="chevron-arrow ml-4">
                                  <i className="fe fe-chevron-down font-size-md" />
                                </span>
                              </a>
                              {/* Row */}
                              {/* Collapse */}
                              <div className="collapse" id="courseSix" data-parent="#courseAccordion">
                                <div className="pt-3 pb-2">
                                  <a href="#!" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none disableClick">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-secondary icon-sm rounded-circle mr-2"><i className="fe fe-lock font-size-md" /></span>
                                      <span>Introduction</span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>1m 52s</span>
                                    </div>
                                  </a>
                                  <a href="#!" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none disableClick">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-secondary icon-sm rounded-circle mr-2"><i className="fe fe-lock font-size-md" /></span>
                                      <span>Clip Watched </span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>4m 27s</span>
                                    </div>
                                  </a>
                                  <a href="#!" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none disableClick">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-secondary icon-sm rounded-circle mr-2"><i className="fe fe-lock font-size-md" /></span>
                                      <span>Conditionals Using if() </span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>4m 25s</span>
                                    </div>
                                  </a>
                                  <a href="#!" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none disableClick">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-secondary icon-sm rounded-circle mr-2"><i className="fe fe-lock font-size-md" /></span>
                                      <span>Truthy and Falsy</span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>3m 30s</span>
                                    </div>
                                  </a>
                                  <a href="#!" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none disableClick">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-secondary icon-sm rounded-circle mr-2"><i className="fe fe-lock font-size-md" /></span>
                                      <span>if ... else </span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>3m 30s</span>
                                    </div>
                                  </a>
                                  <a href="#!" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none disableClick">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-secondary icon-sm rounded-circle mr-2"><i className="fe fe-lock font-size-md" /></span>
                                      <span>Comparing === and == </span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>1m 52s</span>
                                    </div>
                                  </a>
                                  <a href="#!" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none disableClick">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-secondary icon-sm rounded-circle mr-2"><i className="fe fe-lock font-size-md" /></span>
                                      <span>The Ternary Operator </span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>2m 47s</span>
                                    </div>
                                  </a>
                                  <a href="#!" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none disableClick">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-secondary icon-sm rounded-circle mr-2"><i className="fe fe-lock font-size-md" /></span>
                                      <span>Block Scope Using let </span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>2m 21s</span>
                                    </div>
                                  </a>
                                  <a href="#!" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none disableClick">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-secondary icon-sm rounded-circle mr-2"><i className="fe fe-lock font-size-md" /></span>
                                      <span>Looping with for() </span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>5m 30s</span>
                                    </div>
                                  </a>
                                  <a href="#!" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none disableClick">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-secondary icon-sm rounded-circle mr-2"><i className="fe fe-lock font-size-md" /></span>
                                      <span>Looping with do ... while() </span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>1m 58s</span>
                                    </div>
                                  </a>
                                  <a href="#!" className="mb-0 d-flex justify-content-between align-items-center text-inherit text-decoration-none disableClick">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-secondary icon-sm rounded-circle mr-2"><i className="fe fe-lock font-size-md" /></span>
                                      <span>Summary </span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>2m 21s</span>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </li>
                            {/* List group item */}
                            <li className="list-group-item px-0">
                              {/* Toggle */}
                              <a className="h4 mb-0 d-flex align-items-center text-inherit text-decoration-none" data-toggle="collapse" href="#courseSeven" aria-expanded="false" aria-controls="courseSeven">
                                <div className="mr-auto">
                                  {/* Title */}
                                  Functions
                                </div>
                                {/* Chevron */}
                                <span className="chevron-arrow ml-4">
                                  <i className="fe fe-chevron-down font-size-md" />
                                </span>
                              </a>
                              {/* Row */}
                              {/* Collapse */}
                              <div className="collapse" id="courseSeven" data-parent="#courseAccordion">
                                <div className="pt-3 pb-2">
                                  <a href="#!" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none disableClick">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-secondary icon-sm rounded-circle mr-2"><i className="fe fe-lock font-size-md" /></span>
                                      <span>Introduction</span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>1m 52s</span>
                                    </div>
                                  </a>
                                  <a href="#!" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none disableClick">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-secondary icon-sm rounded-circle mr-2"><i className="fe fe-lock font-size-md" /></span>
                                      <span>Function Basics </span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>2m 46s</span>
                                    </div>
                                  </a>
                                  <a href="#!" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none disableClick">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-secondary icon-sm rounded-circle mr-2"><i className="fe fe-lock font-size-md" /></span>
                                      <span>Function Expressions </span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>2m 32s</span>
                                    </div>
                                  </a>
                                  <a href="#!" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none disableClick">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-secondary icon-sm rounded-circle mr-2"><i className="fe fe-lock font-size-md" /></span>
                                      <span>Passing Information to Functions</span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>3m 19s</span>
                                    </div>
                                  </a>
                                  <a href="#!" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none disableClick">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-secondary icon-sm rounded-circle mr-2"><i className="fe fe-lock font-size-md" /></span>
                                      <span>Function Return Values </span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>3m 13s</span>
                                    </div>
                                  </a>
                                  <a href="#!" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none disableClick">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-secondary icon-sm rounded-circle mr-2"><i className="fe fe-lock font-size-md" /></span>
                                      <span>Function Scope </span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>4m 20s</span>
                                    </div>
                                  </a>
                                  <a href="#!" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none disableClick">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-secondary icon-sm rounded-circle mr-2"><i className="fe fe-lock font-size-md" /></span>
                                      <span>Using Functions to Modify Web Pages </span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>3m 42s</span>
                                    </div>
                                  </a>
                                  <a href="#!" className="mb-0 d-flex justify-content-between align-items-center text-inherit text-decoration-none disableClick">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-secondary icon-sm rounded-circle mr-2"><i className="fe fe-lock font-size-md" /></span>
                                      <span>Summary </span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>2m 3s</span>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </li>
                            {/* List group item */}
                            <li className="list-group-item px-0">
                              {/* Toggle */}
                              <a className="h4 mb-0 d-flex align-items-center text-inherit text-decoration-none" data-toggle="collapse" href="#courseEight" aria-expanded="false" aria-controls="courseEight">
                                <div className="mr-auto">
                                  {/* Title */}
                                  Objects and the DOM
                                </div>
                                {/* Chevron */}
                                <span className="chevron-arrow ml-4">
                                  <i className="fe fe-chevron-down font-size-md" />
                                </span>
                              </a>
                              {/* Row */}
                              {/* Collapse */}
                              <div className="collapse" id="courseEight" data-parent="#courseAccordion">
                                <div className="pt-3 pb-2">
                                  <a href="#!" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none disableClick">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-secondary icon-sm rounded-circle mr-2"><i className="fe fe-lock font-size-md" /></span>
                                      <span>Introduction</span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>1m 48s</span>
                                    </div>
                                  </a>
                                  <a href="#!" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none disableClick">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-secondary icon-sm rounded-circle mr-2"><i className="fe fe-lock font-size-md" /></span>
                                      <span>Object Properties </span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>4m 28s</span>
                                    </div>
                                  </a>
                                  <a href="#!" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none disableClick">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-secondary icon-sm rounded-circle mr-2"><i className="fe fe-lock font-size-md" /></span>
                                      <span>Object Methods </span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>3m 3s</span>
                                    </div>
                                  </a>
                                  <a href="#!" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none disableClick">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-secondary icon-sm rounded-circle mr-2"><i className="fe fe-lock font-size-md" /></span>
                                      <span>Passing Objects to Functions</span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>3m 27s</span>
                                    </div>
                                  </a>
                                  <a href="#!" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none disableClick">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-secondary icon-sm rounded-circle mr-2"><i className="fe fe-lock font-size-md" /></span>
                                      <span>Standard Built-in Objects </span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>6m 55s</span>
                                    </div>
                                  </a>
                                  <a href="#!" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none disableClick">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-secondary icon-sm rounded-circle mr-2"><i className="fe fe-lock font-size-md" /></span>
                                      <span>The Document Object Model (DOM) </span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>3m 29s</span>
                                    </div>
                                  </a>
                                  <a href="#!" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none disableClick">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-secondary icon-sm rounded-circle mr-2"><i className="fe fe-lock font-size-md" /></span>
                                      <span>Styling DOM Elements </span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>2m 42s</span>
                                    </div>
                                  </a>
                                  <a href="#!" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none disableClick">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-secondary icon-sm rounded-circle mr-2"><i className="fe fe-lock font-size-md" /></span>
                                      <span>Detecting Button Clicks </span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>2m 3s</span>
                                    </div>
                                  </a>
                                  <a href="#!" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none disableClick">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-secondary icon-sm rounded-circle mr-2"><i className="fe fe-lock font-size-md" /></span>
                                      <span>Showing and Hiding DOM Elements </span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>4m 37s</span>
                                    </div>
                                  </a>
                                  <a href="#!" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none disableClick">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-secondary icon-sm rounded-circle mr-2"><i className="fe fe-lock font-size-md" /></span>
                                      <span>Summary </span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>2m 47s</span>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </li>
                            {/* List group item */}
                            <li className="list-group-item px-0">
                              {/* Toggle */}
                              <a className="h4 mb-0 d-flex align-items-center text-inherit text-decoration-none" data-toggle="collapse" href="#courseNine" aria-expanded="false" aria-controls="courseNine">
                                <div className="mr-auto">
                                  {/* Title */}
                                  Arrays
                                </div>
                                {/* Chevron */}
                                <span className="chevron-arrow ml-4">
                                  <i className="fe fe-chevron-down font-size-md" />
                                </span>
                              </a>
                              {/* Row */}
                              {/* Collapse */}
                              <div className="collapse" id="courseNine" data-parent="#courseAccordion">
                                <div className="pt-3 pb-2">
                                  <a href="#!" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none disableClick">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-secondary icon-sm rounded-circle mr-2"><i className="fe fe-lock font-size-md" /></span>
                                      <span>Introduction</span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>1m 48s</span>
                                    </div>
                                  </a>
                                  <a href="#!" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none disableClick">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-secondary icon-sm rounded-circle mr-2"><i className="fe fe-lock font-size-md" /></span>
                                      <span>Creating and Initializing Arrays </span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>4m 7s</span>
                                    </div>
                                  </a>
                                  <a href="#!" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none disableClick">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-secondary icon-sm rounded-circle mr-2"><i className="fe fe-lock font-size-md" /></span>
                                      <span>Accessing Array Items </span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>2m 4s</span>
                                    </div>
                                  </a>
                                  <a href="#!" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none disableClick">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-secondary icon-sm rounded-circle mr-2"><i className="fe fe-lock font-size-md" /></span>
                                      <span>Manipulating Arrays </span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>4m 3s</span>
                                    </div>
                                  </a>
                                  <a href="#!" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none disableClick">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-secondary icon-sm rounded-circle mr-2"><i className="fe fe-lock font-size-md" /></span>
                                      <span>slice() and splice() </span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>5m 54s</span>
                                    </div>
                                  </a>
                                  <a href="#!" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none disableClick">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-secondary icon-sm rounded-circle mr-2"><i className="fe fe-lock font-size-md" /></span>
                                      <span>Array Searching and Looping </span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>7m 32s</span>
                                    </div>
                                  </a>
                                  <a href="#!" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none disableClick">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-secondary icon-sm rounded-circle mr-2"><i className="fe fe-lock font-size-md" /></span>
                                      <span>Arrays in the DOM </span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>4m 11s</span>
                                    </div>
                                  </a>
                                  <a href="#!" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none disableClick">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-secondary icon-sm rounded-circle mr-2"><i className="fe fe-lock font-size-md" /></span>
                                      <span>Summary </span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>2m 28s</span>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </li>
                            {/* List group item */}
                            <li className="list-group-item px-0">
                              {/* Toggle */}
                              <a className="h4 mb-0 d-flex align-items-center text-inherit text-decoration-none" data-toggle="collapse" href="#courseTen" aria-expanded="false" aria-controls="courseTen">
                                <div className="mr-auto">
                                  {/* Title */}
                                  Scope and Hoisting
                                </div>
                                {/* Chevron */}
                                <span className="chevron-arrow ml-4">
                                  <i className="fe fe-chevron-down font-size-md" />
                                </span>
                              </a>
                              {/* Row */}
                              {/* Collapse */}
                              <div className="collapse" id="courseTen" data-parent="#courseAccordion">
                                <div className="pt-3 pb-2">
                                  <a href="#!" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none disableClick">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-secondary icon-sm rounded-circle mr-2"><i className="fe fe-lock font-size-md" /></span>
                                      <span>Introduction</span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>1m 20s</span>
                                    </div>
                                  </a>
                                  <a href="#!" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none disableClick">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-secondary icon-sm rounded-circle mr-2"><i className="fe fe-lock font-size-md" /></span>
                                      <span>Global Scope </span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>4m 7s</span>
                                    </div>
                                  </a>
                                  <a href="#!" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none disableClick">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-secondary icon-sm rounded-circle mr-2"><i className="fe fe-lock font-size-md" /></span>
                                      <span>Clip Watched </span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>3m 14s</span>
                                    </div>
                                  </a>
                                  <a href="#!" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none disableClick">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-secondary icon-sm rounded-circle mr-2"><i className="fe fe-lock font-size-md" /></span>
                                      <span>Function Scope </span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>3m 45s</span>
                                    </div>
                                  </a>
                                  <a href="#!" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none disableClick">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-secondary icon-sm rounded-circle mr-2"><i className="fe fe-lock font-size-md" /></span>
                                      <span>Var and Hoisting </span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>2m 21s</span>
                                    </div>
                                  </a>
                                  <a href="#!" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none disableClick">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-secondary icon-sm rounded-circle mr-2"><i className="fe fe-lock font-size-md" /></span>
                                      <span>Undeclared Variables and Strict Mode </span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>2m 16s</span>
                                    </div>
                                  </a>
                                  <a href="#!" className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none disableClick">
                                    <div className="text-truncate">
                                      <span className="icon-shape bg-light text-secondary icon-sm rounded-circle mr-2"><i className="fe fe-lock font-size-md" /></span>
                                      <span>Summary </span>
                                    </div>
                                    <div className="text-truncate">
                                      <span>1m 33s</span>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </li>
                            {/* List group item */}
                            <li className="list-group-item px-0 pb-0">
                              {/* Toggle */}
                              <a className="h4 mb-0 d-flex align-items-center text-inherit text-decoration-none" data-toggle="collapse" href="#courseEleven" aria-expanded="false" aria-controls="courseEleven">
                                <div className="mr-auto">
                                  {/* Title */}
                                  Summary
                                </div>
                                {/* Chevron */}
                                <span className="chevron-arrow ml-4">
                                  <i className="fe fe-chevron-down font-size-md" />
                                </span>
                              </a>
                              {/* Row */}
                              {/* Collapse */}
                              <div className="collapse" id="courseEleven" data-parent="#courseAccordion">
                                <div className="pt-3 pb-2">
                                  <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae esse velit eos sunt ab inventore est tenetur blanditiis? Voluptas eius molestiae ad itaque tempora nobis minima eveniet aperiam molestias, maiores natus expedita dolores ea non possimus
                                    magnam corrupt i quas rem unde quo enim porro culpa! Quaerat veritatis veniam corrupti iusto.
                                  </p>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="description" role="tabpanel" aria-labelledby="description-tab">
                      {/* Description */}
                      <div className="mb-4">
                        <h3 className="mb-2">Course Descriptions</h3>
                        <p>
                          If you’re learning to program for the first time, or if you’re coming from a different language, this course, JavaScript: Getting Started, will give you the basics for coding in JavaScript. First, you'll discover the types of applications that can be
                          built with JavaScript, and the platforms they’ll run on.
                        </p>
                        <p>
                          Next, you’ll explore the basics of the language, giving plenty of examples. Lastly, you’ll put your JavaScript knowledge to work and modify a modern, responsive web page. When you’re finished with this course, you’ll have the skills and knowledge in JavaScript
                          to create simple programs, create simple web applications, and modify web pages.
                        </p>
                      </div>
                      <h4 className="mb-3">What you’ll learn</h4>
                      <div className="row mb-3">
                        <div className="col-12 col-md-6">
                          <ul className="list-unstyled">
                            <li className="d-flex mb-2">
                              <i className="far fa-check-circle text-success mr-2 mt-2" />
                              <span>Recognize the importance of understanding your objectives when addressing an
                                audience.</span>
                            </li>
                            <li className="d-flex mb-2">
                              <i className="far fa-check-circle text-success mr-2 mt-2" />
                              <span>Identify the fundaments of composing a successful close.</span>
                            </li>
                            <li className="d-flex mb-2">
                              <i className="far fa-check-circle text-success mr-2 mt-2" />
                              <span>Explore how to connect with your audience through crafting compelling stories.</span>
                            </li>
                          </ul>
                        </div>
                        <div className="col-12 col-md-6">
                          <ul className="list-unstyled">
                            <li className="d-flex mb-2">
                              <i className="far fa-check-circle text-success mr-2 mt-2" />
                              <span>Examine ways to connect with your audience by personalizing your content.</span>
                            </li>
                            <li className="d-flex mb-2">
                              <i className="far fa-check-circle text-success mr-2 mt-2" />
                              <span>Break down the best ways to exude executive presence.</span>
                            </li>
                            <li className="d-flex mb-2">
                              <i className="far fa-check-circle text-success mr-2 mt-2" />
                              <span>Explore how to communicate the unknown in an impromptu communication.</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <p>Maecenas viverra condimentum nulla molestie condimentum. Nunc ex libero, feugiat quis lectus vel, ornare euismod ligula. Aenean sit amet arcu nulla.</p>
                      <p>Duis facilisis ex a urna blandit ultricies. Nullam sagittis ligula non eros semper, nec mattis odio ullamcorper. Phasellus feugiat sit amet leo eget consectetur.</p>
                    </div>
                    <div className="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
                      {/* Reviews */}
                      <div className="mb-3">
                        <h3 className="mb-4">How students rated this courses</h3>
                        <div className="row align-items-center">
                          <div className="col-auto text-center">
                            <h3 className="display-2 font-weight-bold">4.5</h3>
                            <i className="mdi mdi-star mr-n1 text-warning" />
                            <i className="mdi mdi-star mr-n1 text-warning" />
                            <i className="mdi mdi-star mr-n1 text-warning" />
                            <i className="mdi mdi-star mr-n1 text-warning" />
                            <i className="mdi mdi-star mr-n1-half text-warning" />
                            <p className="mb-0 font-size-xs">(Based on 27 reviews)</p>
                          </div>
                          {/* Progress bar */}
                          <div className="col pt-3 order-3 order-md-2">
                            <div className="progress mb-3" style={{height: 6}}>
                              <div className="progress-bar bg-warning" role="progressbar" style={{width: '90%'}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                            <div className="progress mb-3" style={{height: 6}}>
                              <div className="progress-bar bg-warning" role="progressbar" style={{width: '80%'}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                            <div className="progress mb-3" style={{height: 6}}>
                              <div className="progress-bar bg-warning" role="progressbar" style={{width: '70%'}} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                            <div className="progress mb-3" style={{height: 6}}>
                              <div className="progress-bar bg-warning" role="progressbar" style={{width: '60%'}} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                            <div className="progress mb-0" style={{height: 6}}>
                              <div className="progress-bar bg-warning" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                          </div>
                          <div className="col-md-auto col-6 order-2 order-md-3">
                            {/* Rating */}
                            <div>
                              <i className="mdi mdi-star mr-n1 text-warning" />
                              <i className="mdi mdi-star mr-n1 text-warning" />
                              <i className="mdi mdi-star mr-n1 text-warning" />
                              <i className="mdi mdi-star mr-n1 text-warning" />
                              <i className="mdi mdi-star mr-n1 text-warning" />
                              <span className="ml-1">53%</span>
                            </div>
                            <div>
                              <i className="mdi mdi-star mr-n1 text-warning" />
                              <i className="mdi mdi-star mr-n1 text-warning" />
                              <i className="mdi mdi-star mr-n1 text-warning" />
                              <i className="mdi mdi-star mr-n1 text-warning" />
                              <i className="mdi mdi-star mr-n1 text-light" />
                              <span className="ml-1">36%</span>
                            </div>
                            <div>
                              <i className="mdi mdi-star mr-n1 text-warning" />
                              <i className="mdi mdi-star mr-n1 text-warning" />
                              <i className="mdi mdi-star mr-n1 text-warning" />
                              <i className="mdi mdi-star mr-n1 text-light" />
                              <i className="mdi mdi-star mr-n1 text-light" />
                              <span className="ml-1">9%</span>
                            </div>
                            <div>
                              <i className="mdi mdi-star mr-n1 text-warning" />
                              <i className="mdi mdi-star mr-n1 text-warning" />
                              <i className="mdi mdi-star mr-n1 text-light" />
                              <i className="mdi mdi-star mr-n1 text-light" />
                              <i className="mdi mdi-star mr-n1 text-light" />
                              <span className="ml-1">3%</span>
                            </div>
                            <div>
                              <i className="mdi mdi-star mr-n1 text-warning" />
                              <i className="mdi mdi-star mr-n1 text-light" />
                              <i className="mdi mdi-star mr-n1 text-light" />
                              <i className="mdi mdi-star mr-n1 text-light" />
                              <i className="mdi mdi-star mr-n1 text-light" />
                              <span className="ml-1">2%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* hr */}
                      <hr className="my-5" />
                      <div className="mb-3">
                        <div className="d-lg-flex align-items-center justify-content-between mb-5">
                          {/* Reviews */}
                          <div className="mb-3 mb-lg-0">
                            <h3 className="mb-0">Reviews</h3>
                          </div>
                          <div>
                            {/* Form */}
                            <form className="form-inline">
                              <div className="d-flex align-items-center mr-2">
                                <span className="position-absolute pl-3">
                                  <i className="fe fe-search" />
                                </span>
                                <input type="search" className="form-control pl-6" placeholder="Search Review" />
                              </div>
                            </form>
                          </div>
                        </div>
                        {/* Rating */}
                        <div className="media border-bottom pb-4 mb-4">
                          <img src="../assets/images/avatar/avatar-2.jpg" alt className="rounded-circle avatar-lg" />
                          <div className="media-body ml-3">
                            <h4 className="mb-1">
                              Max Hawkins
                              <span className="ml-1 font-size-xs text-muted">2 Days ago</span>
                            </h4>
                            <div className="font-size-xs mb-2">
                              <i className="mdi mdi-star mr-n1 text-warning" />
                              <i className="mdi mdi-star mr-n1 text-warning" />
                              <i className="mdi mdi-star mr-n1 text-warning" />
                              <i className="mdi mdi-star mr-n1 text-warning" />
                              <i className="mdi mdi-star mr-n1 text-warning" />
                            </div>
                            <p>Lectures were at a really good pace and I never felt lost. The instructor was well informed and allowed me to learn and navigate Figma easily.</p>
                            <div className="d-lg-flex">
                              <p className="mb-0">Was this review helpful?</p>
                              <a href="#!" className="btn btn-xs btn-primary ml-lg-3">Yes</a>
                              <a href="#!" className="btn btn-xs btn-outline-white ml-1">No</a>
                            </div>
                          </div>
                        </div>
                        {/* Rating */}
                        <div className="media border-bottom pb-4 mb-4">
                          <img src="../assets/images/avatar/avatar-3.jpg" alt className="rounded-circle avatar-lg" />
                          <div className="media-body ml-3">
                            <h4 className="mb-1">Arthur Williamson <span className="ml-1 font-size-xs text-muted">3 Days ago</span>
                            </h4>
                            <div className="font-size-xs mb-2">
                              <i className="mdi mdi-star mr-n1 text-warning" />
                              <i className="mdi mdi-star mr-n1 text-warning" />
                              <i className="mdi mdi-star mr-n1 text-warning" />
                              <i className="mdi mdi-star mr-n1 text-warning" />
                              <i className="mdi mdi-star mr-n1 text-warning" />
                            </div>
                            <p>Its pretty good.Just a reminder that there are also students with Windows, meaning Figma its a bit different of yours. Thank you!</p>
                            <div className="d-lg-flex">
                              <p className="mb-0">Was this review helpful?</p>
                              <a href="#!" className="btn btn-xs btn-primary ml-lg-3">Yes</a>
                              <a href="#!" className="btn btn-xs btn-outline-white ml-1">No</a>
                            </div>
                          </div>
                        </div>
                        {/* Rating */}
                        <div className="media border-bottom pb-4 mb-4">
                          <img src="../assets/images/avatar/avatar-4.jpg" alt className="rounded-circle avatar-lg" />
                          <div className="media-body ml-3">
                            <h4 className="mb-1">Claire Jones <span className="ml-1 font-size-xs text-muted">4 Days ago</span></h4>
                            <div className="font-size-xs mb-2">
                              <i className="mdi mdi-star mr-n1 text-warning" />
                              <i className="mdi mdi-star mr-n1 text-warning" />
                              <i className="mdi mdi-star mr-n1 text-warning" />
                              <i className="mdi mdi-star mr-n1 text-warning" />
                              <i className="mdi mdi-star mr-n1 text-warning" />
                            </div>
                            <p>
                              Great course for learning Figma, the only bad detail would be that some icons are not included in the assets. But 90% of the icons needed are included, and the voice of the instructor was very clear and easy to understood.
                            </p>
                            <div className="d-lg-flex">
                              <p className="mb-0">Was this review helpful?</p>
                              <a href="#!" className="btn btn-xs btn-primary ml-lg-3">Yes</a>
                              <a href="#!" className="btn btn-xs btn-outline-white ml-1">No</a>
                            </div>
                          </div>
                        </div>
                        {/* Rating */}
                        <div className="media">
                          <img src="../assets/images/avatar/avatar-5.jpg" alt className="rounded-circle avatar-lg" />
                          <div className="media-body ml-3">
                            <h4 className="mb-1">
                              Bessie Pena
                              <span className="ml-1 font-size-xs text-muted">5 Days ago</span>
                            </h4>
                            <div className="font-size-xs mb-2">
                              <i className="mdi mdi-star mr-n1 text-warning" />
                              <i className="mdi mdi-star mr-n1 text-warning" />
                              <i className="mdi mdi-star mr-n1 text-warning" />
                              <i className="mdi mdi-star mr-n1 text-warning" />
                              <i className="mdi mdi-star mr-n1 text-warning" />
                            </div>
                            <p>
                              I have really enjoyed this class and learned a lot, found it very inspiring and helpful, thank you!
                              <i className="em em-heart_eyes ml-2 font-size-xs" />
                            </p>
                            <div className="d-lg-flex">
                              <p className="mb-0">Was this review helpful?</p>
                              <a href="#!" className="btn btn-xs btn-primary ml-lg-3">Yes</a>
                              <a href="#!" className="btn btn-xs btn-outline-white ml-1">No</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="transcript" role="tabpanel" aria-labelledby="transcript-tab">
                      {/* Description */}
                      <div>
                        <h3 className="mb-3">Transcript from the "Introduction" Lesson</h3>
                        <div className="mb-4">
                          <h4>Course Overview <a href="#!" className="text-primary ml-2 h4">[00:00:00]</a></h4>
                          <p className="mb-0">
                            My name is John Deo and I work as human duct tape at Gatsby, that means that I do a lot of different things. Everything from dev roll to writing content to writing code. And I used to work as an architect at IBM. I live in Portland, Oregon.
                          </p>
                        </div>
                        <div className="mb-4">
                          <h4>Introduction <a href="#!" className="text-primary ml-2 h4">[00:00:16]</a></h4>
                          <p>
                            We'll dive into GraphQL, the fundamentals of GraphQL. We're only gonna use the pieces of it that we need to build in Gatsby. We're not gonna be doing a deep dive into what GraphQL is or the language specifics. We're also gonna get into MDX. MDX is a way
                            to write React components in your markdown.
                          </p>
                        </div>
                        <div className="mb-4">
                          <h4>Why Take This Course? <a href="#!" className="text-primary ml-2 h4">[00:00:37]</a></h4>
                          <p>
                            We'll dive into GraphQL, the fundamentals of GraphQL. We're only gonna use the pieces of it that we need to build in Gatsby. We're not gonna be doing a deep dive into what GraphQL is or the language specifics. We're also gonna get into MDX. MDX is a way
                            to write React components in your markdown.
                          </p>
                        </div>
                        <div className="mb-4">
                          <h4>A Look at the Demo Application <a href="#!" className="text-primary ml-2 h4">[00:00:54]</a></h4>
                          <p>
                            We'll dive into GraphQL, the fundamentals of GraphQL. We're only gonna use the pieces of it that we need to build in Gatsby. We're not gonna be doing a deep dive into what GraphQL is or the language specifics. We're also gonna get into MDX. MDX is a way
                            to write React components in your markdown.
                          </p>
                          <p>
                            We'll dive into GraphQL, the fundamentals of GraphQL. We're only gonna use the pieces of it that we need to build in Gatsby. We're not gonna be doing a deep dive into what GraphQL is or the language specifics. We're also gonna get into MDX. MDX is a way
                            to write React components in your markdown.
                          </p>
                        </div>
                        <div className="mb-4">
                          <h4>Summary <a href="#!" className="text-primary ml-2 h4">[00:01:31]</a></h4>
                          <p>
                            We'll dive into GraphQL, the fundamentals of GraphQL. We're only gonna use the pieces of it that we need to build in Gatsby. We're not gonna be doing a deep dive into what GraphQL is or the language specifics. We're also gonna get into MDX. MDX is a way
                            to write React components in your markdown.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Tab pane */}
                    <div className="tab-pane fade" id="faq" role="tabpanel" aria-labelledby="faq-tab">
                      {/* FAQ */}
                      <div>
                        <h3 className="mb-3">Course - Frequently Asked Questions</h3>
                        <div className="mb-4">
                          <h4>How this course help me to design layout?</h4>
                          <p>
                            My name is Jason Woo and I work as human duct tape at Gatsby, that means that I do a lot of different things. Everything from dev roll to writing content to writing code. And I used to work as an architect at IBM. I live in Portland, Oregon.
                          </p>
                        </div>
                        <div className="mb-4">
                          <h4>What is important of this course?</h4>
                          <p>
                            We'll dive into GraphQL, the fundamentals of GraphQL. We're only gonna use the pieces of it that we need to build in Gatsby. We're not gonna be doing a deep dive into what GraphQL is or the language specifics. We're also gonna get into MDX. MDX is a way
                            to write React components in your markdown.
                          </p>
                        </div>
                        <div className="mb-4">
                          <h4>Why Take This Course?</h4>
                          <p>
                            We'll dive into GraphQL, the fundamentals of GraphQL. We're only gonna use the pieces of it that we need to build in Gatsby. We're not gonna be doing a deep dive into what GraphQL is or the language specifics. We're also gonna get into MDX. MDX is a way
                            to write React components in your markdown.
                          </p>
                        </div>
                        <div className="mb-4">
                          <h4>Is able to create application after this course?</h4>
                          <p>
                            We'll dive into GraphQL, the fundamentals of GraphQL. We're only gonna use the pieces of it that we need to build in Gatsby. We're not gonna be doing a deep dive into what GraphQL is or the language specifics. We're also gonna get into MDX. MDX is a way
                            to write React components in your markdown.
                          </p>
                          <p>
                            We'll dive into GraphQL, the fundamentals of GraphQL. We're only gonna use the pieces of it that we need to build in Gatsby. We're not gonna be doing a deep dive into what GraphQL is or the language specifics. We're also gonna get into MDX. MDX is a way
                            to write React components in your markdown.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-12 mt-lg-n22">
              {/* Card */}
              <div className="card mb-3 mb-4">
                <div className="p-1">
                  <div className="d-flex justify-content-center position-relative rounded py-10 border-white border rounded-lg bg-cover" style={{backgroundImage: 'url(../assets/images/course/course-javascript.jpg)'}}>
                    <a className="popup-youtube icon-shape rounded-circle btn-play icon-xl text-decoration-none" href="https://www.youtube.com/watch?v=JRzWRZahOVU">
                      <i className="fe fe-play" />
                    </a>
                  </div>
                </div>
                {/* Card body */}
                <div className="card-body">
                  {/* Price single page */}
                  <div className="mb-3">
                    <span className="text-dark font-weight-bold h2">$600</span>
                    <del className="font-size-md text-muted">$750</del>
                  </div>
                  <a href="#!" className="btn btn-primary btn-block">Start Free Month</a>
                  <a href="pricing.html" className="btn btn-outline-primary btn-block">Get Full Access</a>
                </div>
              </div>
              {/* Card */}
              <div className="card mb-4">
                <div>
                  {/* Card header */}
                  <div className="card-header">
                    <h4 className="mb-0">What’s included</h4>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item bg-transparent"><i className="fe fe-play-circle align-middle mr-2 text-primary" />12 hours video</li>
                    <li className="list-group-item bg-transparent"><i className="fe fe-award mr-2 align-middle text-success" />Certificate</li>
                    <li className="list-group-item bg-transparent"><i className="fe fe-calendar align-middle mr-2 text-info" />12 Article
                    </li>
                    <li className="list-group-item bg-transparent"><i className="fe fe-video align-middle mr-2 text-secondary" />Watch Offline</li>
                    <li className="list-group-item bg-transparent border-bottom-0"><i className="fe fe-clock align-middle mr-2 text-warning" />Lifetime access</li>
                  </ul>
                </div>
              </div>
              {/* Card */}
              <div className="card">
                {/* Card body */}
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div className="position-relative">
                      <img src="../assets/images/avatar/avatar-1.jpg" alt className="rounded-circle avatar-xl" />
                      <a href="#!" className="position-absolute mt-2 ml-n3" data-toggle="tooltip" data-placement="top" title="Verifed">
                        <img src="../assets/images/svg/checked-mark.svg" alt height={30} width={30} />
                      </a>
                    </div>
                    <div className="ml-4">
                      <h4 className="mb-0">Jenny Wilson</h4>
                      <p className="mb-1 font-size-xs">Front-end Developer, Designer</p>
                      <span className="font-size-xs"><span className="text-warning">4.5</span><span className="mdi mdi-star text-warning mr-2" />Instructor Rating</span>
                    </div>
                  </div>
                  <div className="border-top row mt-3 border-bottom mb-3 no-gutters">
                    <div className="col">
                      <div className="pr-1 pl-2 py-3">
                        <h5 className="mb-0">11,604</h5>
                        <span>Students</span>
                      </div>
                    </div>
                    <div className="col border-left">
                      <div className="pr-1 pl-3 py-3">
                        <h5 className="mb-0">32</h5>
                        <span>Courses</span>
                      </div>
                    </div>
                    <div className="col border-left">
                      <div className="pr-1 pl-3 py-3">
                        <h5 className="mb-0">12,230</h5>
                        <span>Reviews</span>
                      </div>
                    </div>
                  </div>
                  <p>I am an Innovation designer focussing on UX/UI based in Berlin. As a creative resident at Figma explored the city of the future and how new technologies.</p>
                  <a href="instructor-profile.html" className="btn btn-outline-white btn-sm">View Details</a>
                </div>
              </div>
            </div>
          </div>
          {/* Card */}

          <div className="pt-8 pb-3">
            <div className="row d-md-flex align-items-center mb-4">
              <div className="col-12">
                <h2 className="mb-0">Related Courses</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12">
                {/* Card */}
                <div className="card mb-4 card-hover">
                  <a href="course-single.html" className="card-img-top"><img src="../assets/images/course/course-react.jpg" alt className="card-img-top rounded-top" /></a>
                  {/* Card body */}
                  <div className="card-body">
                    <h4 className="mb-2 text-truncate-line-2"><a href="course-single.html" className="text-inherit">How to
                        easily create a website with React</a></h4>
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
                  </div>
                  {/* Card footer */}
                  <div className="card-footer">
                    <div className="row align-items-center no-gutters">
                      <div className="col-auto">
                        <img src="../assets/images/avatar/avatar-1.jpg" className="rounded-circle avatar-xs" alt />
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
              <div className="col-lg-3 col-md-6 col-12">
                {/* Card */}
                <div className="card mb-4 card-hover">
                  <a href="course-single.html" className="card-img-top"><img src="../assets/images/course/course-graphql.jpg" alt className="card-img-top rounded-top" /></a>
                  {/* Card body */}
                  <div className="card-body">
                    <h4 className="mb-2 text-truncate-line-2"><a href="course-single.html" className="text-inherit">GraphQL:
                        introduction to graphQL for beginners</a></h4>
                    <ul className="mb-3 list-inline">
                      <li className="list-inline-item"><i className="far fa-clock mr-1" />2h 46m</li>
                      <li className="list-inline-item">
                        <svg className="mr-1 mt-n1" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x={3} y={8} width={2} height={6} rx={1} fill="#754FFE" />
                          <rect x={7} y={5} width={2} height={9} rx={1} fill="#754FFE" />
                          <rect x={11} y={2} width={2} height={12} rx={1} fill="#754FFE" />
                        </svg> Advance
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
                      <span className="font-size-xs text-muted">(9,300)</span>
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
                        <a href="#!" className="text-muted bookmark">
                          <i className="fe fe-bookmark  " />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                {/* Card */}
                <div className="card mb-4 card-hover">
                  <a href="course-single.html" className="card-img-top"><img src="../assets/images/course/course-angular.jpg" alt className="card-img-top rounded-top" /></a>
                  <div className="card-body">
                    <h4 className="mb-2 text-truncate-line-2"><a href="course-single.html" className="text-inherit">Angular -
                        the complete guide for beginner</a></h4>
                    <ul className="mb-3 list-inline">
                      <li className="list-inline-item"><i className="far fa-clock mr-1" />1h 30m</li>
                      <li className="list-inline-item">
                        <svg className="mr-1 mt-n1" width={16} height={16} viewBox="0
                                    0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                      <span className="font-size-xs text-muted">(8,890)</span>
                    </div>
                  </div>
                  {/* Card footer */}
                  <div className="card-footer">
                    <div className="row align-items-center no-gutters">
                      <div className="col-auto">
                        <img src="../assets/images/avatar/avatar-3.jpg" className="rounded-circle avatar-xs" alt />
                      </div>
                      <div className="col ml-2">
                        <span>Juanita Bell</span>
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
              <div className="col-lg-3 col-md-6 col-12">
                <div className="card mb-4 card-hover">
                  <a href="course-single.html" className="card-img-top"><img src="../assets/images/course/course-python.jpg" alt className="card-img-top rounded-top" /></a>
                  <div className="card-body">
                    <h4 className="mb-2 text-truncate-line-2"><a href="course-single.html" className="text-inherit">The Python
                        Course: build web application</a></h4>
                    <ul className="mb-3 list-inline">
                      <li className="list-inline-item"><i className="far fa-clock mr-1" />2h 30m</li>
                      <li className="list-inline-item">
                        <svg className="mr-1 mt-n1" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x={3} y={8} width={2} height={6} rx={1} fill="#754FFE" />
                          <rect x={7} y={5} width={2} height={9} rx={1} fill="#754FFE" />
                          <rect x={11} y={2} width={2} height={12} rx={1} fill="#DBD8E9" />
                        </svg> Intermediate
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
                      <span className="font-size-xs text-muted">(13,245)</span>
                    </div>
                  </div>
                  {/* Card footer */}
                  <div className="card-footer">
                    <div className="row align-items-center no-gutters">
                      <div className="col-auto">
                        <img src="../assets/images/avatar/avatar-4.jpg" className="rounded-circle avatar-xs" alt />
                      </div>
                      <div className="col ml-2">
                        <span>Claire Robertson</span>
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
            </div>
          </div>

        </div>
      </div>
    </Fragment>
  )
}