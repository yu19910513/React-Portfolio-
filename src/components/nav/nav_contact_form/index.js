import React from 'react';
export default function Contact_form(){
return (
              <div className="tab-pane container" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                <form className="text-left col-lg-8 mt-4 shadow-sm">
                  <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="rex.yu@example.com" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Industry</label>
                    <select className="form-control" id="exampleFormControlSelect1">
                      <option value="null">---</option>
                      <option>Healthcare</option>
                      <option>Technology</option>
                      <option>Government</option>
                      <option>Education</option>
                      <option>Others</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="companyName">Company</label>
                    <input type="name" className="form-control" placeholder="Amazon/ Pillpack" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Comment</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} placeholder="I will get back to you in 48 hours" defaultValue={""} />
                  </div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="survey">like my portfolio</label>
                  </div>
                  <button type="submit" className="btn btn-dark mt-2 mb-2">Submit</button>
                </form>
              </div>
            );
          }
