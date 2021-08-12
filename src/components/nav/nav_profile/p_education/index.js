import React from 'react';

export default function Education() {
  return (
    <div className="card mb-4 text-center mt-4 shadow-sm col-3 mr-2 ml-2 educationEL">
    <div className="card-body rounded bg-light educationCard" data-toggle="modal" data-target="#educationModal">
      <h5 className="card-title">Education</h5>
      <h6 className="card-subtitle mb-2 text-muted">Colleges</h6>
      <img className="card-img-bottom rounded" src="https://pbs.twimg.com/profile_images/770765680555601920/UVy9iRnS.jpg" style={{width: '20%'}} alt='' />
      <img className="card-img-bottom rounded" src="https://pbs.twimg.com/profile_images/1381053633341530117/gy3-uGcg_400x400.jpg" style={{width: '20%'}} alt='' />
      <div className="modal fade" id="educationModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-dark" id="exampleModalLongTitle"><b>Education</b></h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body row justify-content-center">
<div className="list-group">
    <a href="https://www.cs.washington.edu/research/plse" className="list-group-item list-group-item-action flex-column align-items-start text-dark educationOption">
        <div className="d-flex w-100 justify-content-between">
           <h5 className="mb-1">University of Washington</h5>
           <small>2021</small>
             </div>
           <p className="mb-1">Certificate in Web Development/ Software Engineering</p>
           <small>Seattle, WA</small>
            </a>
          <a href="https://pharmacy.wsu.edu/" className="list-group-item list-group-item-action flex-column align-items-start educationOption">
           <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">Washington State University</h5>
            <small className="text-muted">2017 - 2021</small>
            </div>
            <p className="mb-1">Doctor of Pharmacy (Pharm.D.)</p>
            <small className="text-muted">Spokane, WA</small>
           </a>
           <a href="https://wsu.edu/" className="list-group-item list-group-item-action flex-column align-items-start educationOption">
          <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">Washington State University</h5>
           <small className="text-muted">2010 - 2015</small>
        </div>
        <p className="mb-1">Bachelor of Science in Biochemistry</p>
        <small className="text-muted">Pullman, WA</small>
        </a>
    </div>
    </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

    ) }
