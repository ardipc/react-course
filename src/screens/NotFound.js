import React, { useState } from 'react';
import {
  Button,
  Row,
  Col,
  Jumbotron
} from 'react-bootstrap';

function NotFound(props) {
  return (
    <div className="row align-items-center justify-content-center no-gutters py-lg-12 py-4">
      {/* Docs */}
      <div className="offset-xl-1 col-xl-4 col-lg-6 col-md-12 col-12 text-center text-lg-left">
        <h1 className="display-1 mb-3">404</h1>
        <p className="mb-5 lead">Oops! Sorry, we couldn’t find the page you were looking for. If you think this is a problem with us, please <a href="#" className="btn-link">Contact us</a></p>
        <a href="/" className="btn btn-primary mr-2">Back to Safety</a>
      </div>
      {/* img */}
      <div className="offset-xl-1 col-xl-6 col-lg-6 col-md-12 col-12 mt-8 mt-lg-0">
        <img src="/assets/images/error/404-error-img.svg" alt className="w-100" />
      </div>
    </div>
  )
}

export default NotFound;
