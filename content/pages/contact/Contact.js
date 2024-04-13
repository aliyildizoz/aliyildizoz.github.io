import * as React from "react"
import { Helmet } from "react-helmet"
import { Script } from "gatsby"
import { useState } from "react";

export default function Contact() {
  return (
    <div className="container">
        <Helmet>
            <link rel="stylesheet" href="https://s.pageclip.co/v1/pageclip.css" media="screen"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"/>
            <style>
              { 
                  `a:hover {
                        text-decoration: none;
                        color: inherit;
                    }`
              }
            </style>
        </Helmet>
      <div className="row">
        <div className="col-10">
            <form className="pageclip-form" action="https://send.pageclip.co/bof7y7nMdkDkOsmeogYezazEpD5f1ZEh/contact" method="post">
                <div className="mb-3"><label className="form-label" htmlFor="name">Your Name</label><input className="form-control item" type="text" id="name" name="name" required=""/></div>
                <div className="mb-3"><label className="form-label" htmlFor="subject">Subject</label><input className="form-control item" type="text" id="subject" name="subject" required=""/></div>
                <div className="mb-3"><label className="form-label" htmlFor="email">Email</label><input className="form-control item" type="email" id="email" name="email" required=""/></div>
                <div className="mb-3"><label className="form-label" htmlFor="message">Message</label><textarea className="form-control item" id="message" name="body" required=""></textarea></div>
                <div className="mb-3"><button className="btn btn-primary btn-lg d-block w-100" type="submit">Send</button></div>
            </form>
        </div>
      </div>
    <Script src="https://s.pageclip.co/v1/pageclip.js"></Script>
</div>
  );
}