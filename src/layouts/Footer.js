
export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row align-items-center no-gutters border-top py-2">
          {/* Desc */}
          <div className="col-md-6 col-12 text-center text-md-left">
            <span>© 2021 Geeks. All Rights Reserved.</span>
          </div>
          {/* Links */}
          <div className="col-12 col-md-6">
            <nav className="nav nav-footer justify-content-center justify-content-md-end">
              <a className="nav-link active pl-0" href="#!">Privacy</a>
              <a className="nav-link" href="#!">Terms </a>
              <a className="nav-link" href="#!">Feedback</a>
              <a className="nav-link" href="#!">Support</a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}