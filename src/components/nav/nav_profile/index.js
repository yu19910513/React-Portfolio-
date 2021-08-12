import React from 'react';
import Education from './p_education';
import Skills from './p_skills';
import Experience from './p_experience';


export default function Profile() {
  return (
                  <div className="tab-pane" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                    <div className="d-flex row justify-content-center skillCard">
                      {Education()}
                      {Skills()}
                      {Experience()}
                    </div>
                  </div>

            );
          }
