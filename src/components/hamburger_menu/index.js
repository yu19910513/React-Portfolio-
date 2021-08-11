import React from 'react';
export default function Hamburger(){
      return (

        <div className="pos-f-t">
          <div className="collapse" id="navbarToggleExternalContent">
            <div className="bg-dark p-4">
              <nav className="navbar navbar-expand navbar-dark">
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Projects
                      </a>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="https://stark-badlands-81359.herokuapp.com">All About That Art <span className="badge badge-warning"> new</span></a>
                        <a className="dropdown-item" href="https://desolate-wave-46699.herokuapp.com/">Tech Blog</a>
                        <a className="dropdown-item" href="https://github.com/yu19910513/Employee-Tracker">Employee Tracker | <span className="text-success">Github</span></a>
                        <a className="dropdown-item" href="https://rex-note-taker.herokuapp.com/">Note Taker</a>
                        <a className="dropdown-item" href="https://yu19910513.github.io/Project-1__Kid-s-Learning-Resources/">Kid's Corner</a>
                        <a className="dropdown-item" href="https://yu19910513.github.io/homework06/">Weather Station</a>
                        <a className="dropdown-item" href="https://yu19910513.github.io/homework05/">Daily Scheduler</a>
                        <a className="dropdown-item" href="https://yu19910513.github.io/homework04/">A Small Quiz</a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="https://twomountaineers.myportfolio.com/">Some Mountains</a>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="https://github.com/yu19910513?tab=repositories">GitHub</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="https://www.linkedin.com/in/rexyu0513/">LinkedIn</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="./assets/images/resume.pdf">Resume</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="modal" data-target="#exampleModalLong">Contact Info</a>
                      <div className="modal fade" id="exampleModalLong" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id="exampleModalLongTitle">Contact Information</h5>
                              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                              </button>
                            </div>
                            <div className="modal-body">
                              <b>Cell:</b> (253)219-8399
                              <br />
                              <b>Email:</b> <a href="rexyu@uw.edu">rexyu@uw.edu</a>
                              <br />
                              <b>Location:</b> Greater Seattle Area
                            </div>
                          </div>
                        </div>
                      </div>
                    </li></ul></div>
              </nav>
            </div>
          </div>
          <nav className="navbar navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="text-right text-white bg-dark timer" />
          </nav>
        </div>
      );
    }
