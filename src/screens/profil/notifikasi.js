export default function Notifikasi() {
  return (
    <div className="card">
      {/* Card header */}
      <div className="card-header d-flex justify-content-between align-items-center">
        <div>
          {/* Notification */}
          <h3 className="mb-0">Notifications</h3>
          <p className="mb-0">
            You will get only notification what have enabled.
          </p>
        </div>
        <div>
          <div className="custom-control custom-switch">
            <input className="custom-control-input" type="checkbox" id="checkAll" defaultChecked />
            <label className="custom-control-label" htmlFor="checkAll" />
          </div>
        </div>
      </div>
      {/* Card body */}
      <div className="card-body">
        <div className="mb-5">
          <h4 className="mb-0">Security Alerts</h4>
          <p>
            You will get only those email notification what you want.
          </p>
          {/* List group */}
          <ul className="list-group list-group-flush">
            {/* List group item */}
            <li className="list-group-item d-flex align-items-center justify-content-between px-0 py-2">
              <div>Email me whenever encounter unusual activity</div>
              <div>
                <div className="custom-control custom-switch">
                  <input type="checkbox" className="custom-control-input" id="switchOne" defaultChecked />
                  <label className="custom-control-label" htmlFor="switchOne" />
                </div>
              </div>
            </li>
            {/* List group item */}
            <li className="list-group-item d-flex align-items-center justify-content-between px-0 py-2">
              <div>Email me if new browser is used to sign in</div>
              <div>
                <div className="custom-control custom-switch">
                  <input type="checkbox" className="custom-control-input" id="switchTwo" />
                  <label className="custom-control-label" htmlFor="switchTwo" />
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="mb-5">
          <h4 className="mb-0">News</h4>
          <p>
            You will get only those email notification what you want.
          </p>
          {/* List group*/}
          <ul className="list-group list-group-flush">
            {/* List group item */}
            <li className="list-group-item d-flex align-items-center justify-content-between px-0 py-2">
              <div>Notify me by email about sales and latest news</div>
              <div>
                <div className="custom-control custom-switch">
                  <input type="checkbox" className="custom-control-input" id="switchThree" defaultChecked />
                  <label className="custom-control-label" htmlFor="switchThree" />
                </div>
              </div>
            </li>
            {/* List group item */}
            <li className="list-group-item d-flex align-items-center justify-content-between px-0 py-2">
              <div>Email me about new features and updates</div>
              <div>
                <div className="custom-control custom-switch">
                  <input type="checkbox" className="custom-control-input" id="switchFour" />
                  <label className="custom-control-label" htmlFor="switchFour" />
                </div>
              </div>
            </li>
            {/* List group item */}
            <li className="list-group-item d-flex align-items-center justify-content-between px-0 py-2">
              <div>Email me about tips on using account</div>
              <div>
                <div className="custom-control custom-switch">
                  <input type="checkbox" className="custom-control-input" id="switchFive" defaultChecked />
                  <label className="custom-control-label" htmlFor="switchFive" />
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div>
          {/* Content */}
          <h4 className="mb-0">Courses</h4>
          <p>
            You will get only those email notification what you want.
          </p>
          {/* List group */}
          <ul className="list-group list-group-flush mb-4">
            {/* List group item */}
            <li className="list-group-item d-flex justify-content-between px-0">
              <div>
                <h5 className="mb-0">Updates from Classes You're Taking</h5>
                <span>Announcements, events, and tips and tricks.</span>
              </div>
              <div>
                <div className="custom-control custom-switch">
                  <input type="checkbox" className="custom-control-input" id="switchSix" defaultChecked />
                  <label className="custom-control-label" htmlFor="switchSix" />
                </div>
              </div>
            </li>
            {/* List group item */}
            <li className="list-group-item d-flex justify-content-between px-0">
              <div>
                <h5 className="mb-0">Updates from Teacher Discussions</h5>
                <span>Public Discussions outside of a class that teachers
                  share to all of their followers.</span>
              </div>
              <div>
                <div className="custom-control custom-switch">
                  <input type="checkbox" className="custom-control-input" id="switchSeven" />
                  <label className="custom-control-label" htmlFor="switchSeven" />
                </div>
              </div>
            </li>
            {/* List group item */}
            <li className="list-group-item d-flex justify-content-between px-0">
              <div>
                <h5 className="mb-0">Personalized Class Recommendations</h5>
                <span>Weekly recommendations tailored to your
                  interests.</span>
              </div>
              <div>
                <div className="custom-control custom-switch">
                  <input type="checkbox" className="custom-control-input" id="switchEight" />
                  <label className="custom-control-label" htmlFor="switchEight" />
                </div>
              </div>
            </li>
            {/* List group item */}
            <li className="list-group-item d-flex justify-content-between px-0">
              <div>
                <h5 className="mb-0">Featured content</h5>
                <span>Tips on Courses and dashboard usage, workshop, books,
                  tutorials and many insightful articles.</span>
              </div>
              <div>
                <div className="custom-control custom-switch">
                  <input type="checkbox" className="custom-control-input" id="switchNine" />
                  <label className="custom-control-label" htmlFor="switchNine" />
                </div>
              </div>
            </li>
            {/* List group item */}
            <li className="list-group-item d-flex justify-content-between px-0">
              <div>
                <h5 className="mb-0">Product updates</h5>
                <span>We'll send you a newsletter announcing essential
                  product updates in CoursesUI.</span>
              </div>
              <div>
                <div className="custom-control custom-switch">
                  <input type="checkbox" className="custom-control-input" id="switchTen" />
                  <label className="custom-control-label" htmlFor="switchTen" />
                </div>
              </div>
            </li>
            {/* List group item */}
            <li className="list-group-item d-flex justify-content-between px-0">
              <div>
                <h5 className="mb-0">Events and offers</h5>
                <span>Announcing promos and upcoming events,such as Ask Me
                  Anything sessions and webinars.</span>
              </div>
              <div>
                <div className="custom-control custom-switch">
                  <input type="checkbox" className="custom-control-input" id="switchEleven" />
                  <label className="custom-control-label" htmlFor="switchEleven" />
                </div>
              </div>
            </li>
          </ul>
          {/* Short note */}
          <a href="#!" className="text-danger mb-2 d-block">
            <u>Unsubscribe from all of the above</u>
          </a>
          <p className="mb-0">
            Please note: you'll still receive important administrative
            emails,such as password resets.
          </p>
        </div>
      </div>
    </div>

  )
}