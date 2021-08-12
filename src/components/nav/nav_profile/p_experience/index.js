import React from 'react';

export default function Experience() {
  return (
<div className="card mb-4 text-center mt-4 shadow-sm col-3 mr-2 ml-2 experienceEL">
                        <div className="card-body bg-light experiencecard rounded" data-toggle="modal" data-target="#experienceModal">
                          <h5 className="card-title">Experience</h5>
                          <h6 className="card-subtitle mb-2 text-muted">Collaboration</h6>
                          <img className="card-img-bottom rounded expIMG" src="https://i.gifer.com/7Gbu.gif" style={{width: '50%'}} />
                          <div className="modal fade" id="experienceModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered" role="document">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h5 className="modal-title text-dark" id="exampleModalLongTitle"><b>Experience</b></h5>
                                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                  </button>
                                </div>
                                <div className="modal-body row justify-content-center">
                                  <div className="list-group text-left">
                                    <a href="https://github.com/yu19910513/Hiking-Application-Project-Take-A-Hike" className="list-group-item list-group-item-action flex-column align-items-start text-dark expOption mb-1">
                                      <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">Project 2 <span className="text-success small">| Github</span></h5>
                                        <small>July 2021</small>
                                      </div>
                                      <p className="mb-1">Take A Hike - Informational</p>
                                      <small>Team: Chris Abiva, Vinnette Gutierrez, Rex Yu, Matt Koski</small>
                                    </a>
                                    <a href="https://github.com/yu19910513/Project-1" className="list-group-item list-group-item-action flex-column align-items-start text-dark expOption mb-1">
                                      <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">Project 1 <span className="text-success small">| Github</span></h5>
                                        <small>May 2021</small>
                                      </div>
                                      <p className="mb-1">Kid's Corner - Educational</p>
                                      <small>Team: Donna Crawford, Gunjan Bhargava, Rex Yu, Sandy Marr</small>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
  )
}
