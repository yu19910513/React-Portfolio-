import React from 'react';
import art from '../../../img/all_art.png';
import kid from '../../../img/kid.gif';
import tech from '../../../img/tech_blog.gif';
import hike from '../../../img/hike.png';
import weather from '../../../img/weather.gif';
import daily from '../../../img/daily_work.gif';
import quiz from '../../../img/quiz.gif';


export default function Home(){
            return (

              <section className="cards cardContent container">
                <div>
                  <div className="uk-child-width-1-1@m mt-2" uk-grid>
                    <div className="card col-8 shadow-sm p-3 mb-1 card-background ml-1 bg-white rounded">
                      <a href="https://stark-badlands-81359.herokuapp.com/"><img className="card-img-top rounded" src={art} alt='project_cover' /></a>
                      <div className="card-body">
                        <h5 className="card-title">All About That Art</h5>
                        <p className="card-text cp">A website designed for users around the world to share and view colorful painting and photogrphy. Users can create their own accounts, store, and share image and text.</p>
                      </div>
                    </div>
                    <div className="card col-8 shadow-sm p-3 mb-1 card-background ml-1 bg-white rounded">
                      <a href="https://yu19910513.github.io/Project-1__Kid-s-Learning-Resources/"><img className="card-img-top" src={kid} alt='project_cover' /></a>
                      <div className="card-body">
                        <h5 className="card-title">Kid's Corner</h5>
                        <p className="card-text cp">This collaberative project is geared toward young children. Its focus was to make it an educational tool in learning about the fifty states of the US.</p>
                      </div>
                    </div>
                    <div className="card col-8 shadow-sm p-3 mb-1 card-background ml-1 bg-white rounded">
                      <a href="https://desolate-wave-46699.herokuapp.com/signup"><img className="card-img-top" src={tech} alt='project_cover' /></a>
                      <div className="card-body">
                        <h5 className="card-title">Tech Blog</h5>
                        <p className="card-text cp">An website designed to allow users to have peer-to-peer sharing experience features posting and commenting. </p>
                      </div>
                    </div>
                    <div className="card col-8 shadow-sm p-3 mb-1 card-background ml-1 bg-white rounded">
                      <a href="https://rex-note-taker.herokuapp.com/"><img className="card-img-top" src="https://github.com/yu19910513/Note-Taker/raw/main/img/note_taker.gif" alt='project_cover' /></a>
                      <div className="card-body">
                        <h5 className="card-title">Note Taker</h5>
                        <p className="card-text cp">Note Taker website is created to help busy professional to list to-do items and remove them as the items has been done.</p>
                      </div>
                    </div>
                    <div className="card col-8 shadow-sm p-3 mb-1 card-background ml-1 bg-white rounded">
                      <a href="https://thawing-plateau-25662.herokuapp.com/"><img className="card-img-top" src={hike} alt='project_cover' /></a>
                      <div className="card-body">
                        <h5 className="card-title">Take A Hike</h5>
                        <p className="card-text cp">Take a Hike is an application that hikers can use create post of hikes they have taken and hikes they want to take in the future. Users will also be able to see other users hikes and comment on them.</p>
                      </div>
                    </div>
                    <div className="card col-8 shadow-sm p-3 mb-1 card-background ml-1 bg-white rounded">
                      <a href="https://yu19910513.github.io/homework06/"><img className="card-img-top" src={weather} alt='project_cover' /></a>
                      <div className="card-body">
                        <h5 className="card-title">Weather Station</h5>
                        <p className="card-text cp">The user story behind this application is to allow travelers have an convient way to check the current weather and forcast at any location. </p>
                      </div>
                    </div>
                    <div className="card col-8 shadow-sm p-3 mb-1 card-background ml-1 bg-white rounded">
                      <a href="https://yu19910513.github.io/homework05/"><img className="card-img-top" src={daily} alt='project_cover' /></a>
                      <div className="card-body">
                        <h5 className="card-title">Daily Scheduler</h5>
                        <p className="card-text cp">The application helps busy professionals to track daily tasks. A time function combing with color change keeps this task tracker dynamic.</p>
                      </div>
                    </div>
                    <div className="card col-8 shadow-sm p-3 mb-1 card-background ml-1 bg-white rounded">
                      <a href="https://yu19910513.github.io/homework04/"><img className="card-img-top" src={quiz} alt='project_cover' /></a>
                      <div className="card-body">
                        <h5 className="card-title">A Small Quiz</h5>
                        <p className="card-text cp">A small game to test out a new coder's knowledge. Scoring systme and a countdown make this game competitive and interesting!</p>
                      </div>
                    </div>
                  </div>
                </div></section>
            );
          }
