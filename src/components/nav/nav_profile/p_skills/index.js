import React from 'react';

export default function Skills() {
    return (
        <div className="card mb-4 text-center mt-4 shadow-sm col-3 mr-2 ml-2 skillEL">
                        <div className="card-body bg-light skillcard rounded" data-toggle="modal" data-target="#skillModal">
                          <h5 className="card-title">Skills</h5>
                          <h6 className="card-subtitle mb-2 text-muted">Knowledge &amp; Languages</h6>
                          <img className="card-img-bottom rounded" src="https://camo.githubusercontent.com/6eaaae8defc78f268eaf0824350a66a1dfcb6aa77210d3dca069d1d1cefebc53/68747470733a2f2f6769742d73636d2e636f6d2f696d616765732f6c6f676f732f646f776e6c6f6164732f4769742d4c6f676f2d32436f6c6f722e706e67" style={{width: '20%'}} alt='' />
                          <img className="card-img-bottom rounded" src="https://pluralsight2.imgix.net/paths/images/javascript-542e10ea6e.png" style={{width: '20%'}} alt='' />
                          <img className="card-img-bottom rounded" src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-social-logo.png" style={{width: '10%'}} alt=''/>
                          <div className="modal fade" id="skillModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered" role="document">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h5 className="modal-title text-dark" id="exampleModalLongTitle"><b>Skills</b></h5>
                                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                  </button>
                                </div>
                                <div className="modal-body row justify-content-center mr-1 ml-1"></div>
 <div className="list-group text-left">
                                    <div className="list-group-item list-group-item-action flex-column align-items-start skillOption text-dark">
                                      <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">Technical Skills</h5>
                                        <small />
                                      </div>
                                      <p className="mb-1">JavaScript, HTML5, CSS, JQuery, Bootstrap 4, and Node js.</p>
                                      <small />
                                    </div>
                                    <div className="list-group-item list-group-item-action flex-column align-items-start skillOption text-dark">
                                      <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">Operation Systems</h5>
                                        <small className="text-muted" />
                                      </div>
                                      <p className="mb-1">MacOS, Window, and Linux</p>
                                      <small className="text-muted" />
                                    </div>
                                    <div className="list-group-item list-group-item-action flex-column align-items-start skillOption text-dark">
                                      <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">Tools</h5>
                                        <small className="text-muted" />
                                      </div>
                                      <p className="mb-1">Git, Visual Studio Code, and Google</p>
                                      <small className="text-muted" />
                                    </div>
                                    <div className="list-group-item text-dark list-group-item-action flex-column align-items-start skillOption">
                                      <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">Speaking Languages</h5>
                                        <small className="text-muted" />
                                      </div>
                                      <p className="mb-1">English, Chinese, and Vietnamese</p>
                                      <small className="text-muted" />
                                    </div>
                                    <div className="list-group-item text-dark list-group-item-action flex-column align-items-start skillOption">
                                      <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">Clinical Exp.</h5>
                                        <small className="text-muted" />
                                      </div>
                                      <p className="mb-1">Pharmacy Operation, Healthcare Liaison, and Insurance Systme</p>
                                      <small className="text-muted" />
                                    </div>
                                  </div>
                                  </div>
                              </div>
                            </div>
                          </div>
                        </div>

                                  )
}
